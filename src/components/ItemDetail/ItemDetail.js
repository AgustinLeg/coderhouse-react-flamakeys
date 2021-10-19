import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({itemdetail, addCantidadCarrito}) => {
    const {id,nombre, precio, descripcion,img, stock} = itemdetail;
    const [checkout, setCheckout] = useState(false)
    
    return (
        <div className="card m-3" data-id={id}>
            <div className="row g-0">
                <div className="col-md-6">
                <img src={img} className="img-fluid rounded-" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text fs-2">${precio}</p>
                        <p className="card-text" ><small className="text-muted">{stock} unidades disponibles</small></p>
                        {checkout
                            ?<Link to="/cart" className="btn btn-danger">Finalizar Compra</Link>
                            :<ItemCount stock={stock}  initial={1} addCantidadCarrito={addCantidadCarrito} setCheckout={setCheckout}/>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
