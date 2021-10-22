import React from 'react';
import { Link} from 'react-router-dom';


const Item = ({item}) => {
    const {nombre,stock,img,precio,id} = item
    return (
            <div className="col-sm-12 col-md-6 col-lg-3 m-4">
                <div className="card m-auto" style={{width: '18rem'}}>
                    <img src={img} className="card-img-top" alt={`imagen de ${nombre}`} />
                    <div className="card-body text-center bg-light">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text" ><small className="text-muted">Stock disponible : {stock}</small></p>
                        <Link to={`/producto/${id}`} className="btn btn-danger my-4 text-uppercase fw-bold">Ver producto</Link>
                        <p className="card-text fw-bold">${precio}</p>
                    </div>
                </div>
            </div>
     );
}
 
export default Item;