import React from 'react';
import Item from '../Item/Item'
import Spinner from '../Stateless/Spinner/Spinner';

const ItemList = ({items,setItems}) => {
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
        <div className="row">
            {items.length === 0
                ? <Spinner />
                :items.map(item => (
                    <Item key={item.id} item={item}/>
                ))
            }
            
        </div>
     );
}
 
export default ItemList;