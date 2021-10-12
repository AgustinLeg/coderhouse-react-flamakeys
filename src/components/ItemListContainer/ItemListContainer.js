import React,{useState} from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({titulo}) => {
    const [items, setItems] = useState([])

    const productos = [
        {id: 0, nombre:"Producto 1", img:"https://bbfotografia.com/wp-content/uploads/2021/01/SIMPLES.jpg",stock:4},
        {id: 1, nombre:"Producto 2", img:"https://bbfotografia.com/wp-content/uploads/2021/01/SIMPLES.jpg",stock:5},
        {id: 2, nombre:"Producto 3", img:"https://bbfotografia.com/wp-content/uploads/2021/01/SIMPLES.jpg",stock:1},
        {id: 3, nombre:"Producto 4", img:"https://bbfotografia.com/wp-content/uploads/2021/01/SIMPLES.jpg",stock:7},
        {id: 4, nombre:"Producto 5", img:"https://bbfotografia.com/wp-content/uploads/2021/01/SIMPLES.jpg",stock:8},
        {id: 5, nombre:"Producto 6",img:"https://bbfotografia.com/wp-content/uploads/2021/01/SIMPLES.jpg",}
    ]
    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })

    getItems.then(res => setItems(res))

    
    return (
        <section className="container mt-5">
            <h2 className="text-center my-5">{titulo}</h2>
            <div className="productos">
                <div className="item-list">
                    <ItemList items={items}/>
                </div>
            </div>
        </section>
     );
}
 
export default ItemListContainer;