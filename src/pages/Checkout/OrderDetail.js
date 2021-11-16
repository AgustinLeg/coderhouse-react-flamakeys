import React from 'react'
import { useCartContext } from '../../context/cartContext'
import useFormatPrice from '../../hooks/useFormatPrice'

const OrderDetail = () => {  
    const {order} = useCartContext()
    const {order: {items,total}} = order;
    return (
        <div className="container align-items-center justify-content-center">
            {order &&
                <>
                    <h2 className="text-center">Tu compra fue procesada con exito</h2>
                    <span className="text-center d-block my-5">Identificador del Pedido:<small className="fw-bold"> {order.id}</small></span>
                    <p className="fw-bold">Detalles de tu Compra:</p>
                    {items.map(item =>(
                        <div key={item.id} className="row g-0">
                          <div className="col-3 position-relative">
                            <img
                              src={item.imgURL}
                              className="img-fluid rounded-start bg-white rounded"
                              alt={`Foto producto ${item.nombre}`}
                            />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                              {item.cantidad}
                              <span className="visually-hidden">cantidad</span>
                            </span>
                          </div>
                          <div className="col-7">
                            <div className="card-body">
                              <h5 className="card-title" style={{ fontSize: "12px" }}>
                                {item.nombre}
                              </h5>
                            </div>
                          </div>
                          <div className="col-2">
                            <p className="card-text mt-4 fw-bold" style={{ fontSize: "12px" }}>
                              $ {item.precio}
                            </p>
                          </div>
                      </div>
                    ))}
                </>
            }
            <h3 className="text-center">Total: <span className="fw-bold mx-4">{useFormatPrice(total)}</span></h3>
        </div>
    )
}

export default OrderDetail
