import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({titulo,addCantidadCarrito}) => {
    const items = [
        {id: 0, nombre:"Producto 1", stock:4},
        {id: 1, nombre:"Producto 2", stock:5},
        {id: 2, nombre:"Producto 3", stock:1},
        {id: 3, nombre:"Producto 4", stock:7},
        {id: 4, nombre:"Producto 5", stock:8},
        {id: 5, nombre:"Producto 6"}
    ]
    
    return (
        <section className="container mt-5">
            <h2>{titulo}</h2>
            <div className="productos">
                <div className="row">
                    {items.map(producto =>(
                        <ItemCount key={producto.id} nombre={producto.nombre} stock={producto.stock} initial={1} addCantidadCarrito={addCantidadCarrito} />
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default ItemListContainer;