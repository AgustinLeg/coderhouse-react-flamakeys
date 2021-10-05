import React from 'react';

import ItemCount from '../ItemCount/ItemCount'

const Item = ({producto,addCantidadCarrito}) => {

    const {nombre,stock} = producto

    return (
        <div className="col-sm-12 col-md-5 col-lg-3 m-4">
            <div className="card" style={{width: '18rem'}}>
                <img src="./logo512.png" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Stock: <span>{stock || 0}</span></p>
                    <ItemCount
                        stock={stock}
                        initial={1}
                        addCantidadCarrito={addCantidadCarrito}
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Item;