import React from 'react';
import Item from '../Item/Item';

const ItemListContainer = ({titulo,addCantidadCarrito}) => {
    const productos = [
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
                    {productos.map(producto =>(
                        <Item key={producto.id} producto={producto} addCantidadCarrito={addCantidadCarrito} />
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default ItemListContainer;