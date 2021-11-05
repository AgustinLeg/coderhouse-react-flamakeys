import firebase from "firebase"
import { useCartContext } from "../context/cartContext"
import { getFirestore } from "../services/getFirebase"


const useNewOrder = () => {
    const db = getFirestore()
    const { items, total } = useCartContext();

    const newOrder = async (data) =>{
        const itemsBuy = items.map(item => (
            {
                nombre:item.nombre,
                id:item.id,
                cantidad:item.cantidad,
                precio:item.precio
            }
        ))
        const order = {
            comprador:data,
            items:itemsBuy,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total
        };
        const itemsToUpdate = db.collection('productos')
            .where(firebase.firestore.FieldPath.documentId(),'in',items.map(i => i.id));

        const query = await itemsToUpdate.get();
        const batch = db.batch();
        let outOfStock =[];
        query.docs.forEach((docSnapshot,idx) => {
            let snapshot = docSnapshot.data().stock

            if(snapshot>= items[idx].cantidad){
                batch.update(docSnapshot.ref, {stock: snapshot - items[idx].cantidad})
            }else{
                outOfStock.push({...snapshot,id:docSnapshot.id})
            }
        })

        if(outOfStock.length === 0){
            batch.commit().then(r => console.log('exito')).catch(err => console.log('err',err))
            db.collection('orders').add(order)
        }else{
            console.error('No tenemos mas stock de:',outOfStock)
        }
        
    }
    
    
    return {newOrder}
}

export default useNewOrder
