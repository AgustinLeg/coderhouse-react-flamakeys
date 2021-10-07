import React from 'react';


const Item = ({item}) => {
    const {nombre,stock,img} = item
    return (
        <div className="col-sm-12 col-md-5 col-lg-3 m-4">
            <div className="card" style={{width: '18rem'}}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{nombre}</h5>
                    <a href="#!" className="btn btn-primary my-4">Ver detalle del producto</a>
                    <p >Stock disponible : ${stock}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Item;