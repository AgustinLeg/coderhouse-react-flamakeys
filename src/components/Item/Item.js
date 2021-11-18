import React from 'react';
import { Link} from 'react-router-dom';
import useFormatPrice from '../../hooks/useFormatPrice';


const Item = ({item}) => {
    const {nombre,stock,imgURL,precio,id} = item
    return (
            <div  className="col-12 col-md-6 col-lg-3 m-0 p-0 position-relative">
                <Link to={`/producto/${id}`} className="card m-auto border-0 text-black text-decoration-none">
                    {stock === 0 && <span className="position-absolute top-0 start-100 translate-middle bg-danger text-white text-center rounded" style={{width:'75px'}}>Sin Stock</span>}
                    <img src={imgURL} className="card-img-top" alt={`imagen de ${nombre}`} />
                    <div className="card-body text-start bg-white">
                        <h5 className="card-title fs-6">{nombre}</h5>
                        <p className="card-text mb-1 mt-4">{useFormatPrice(precio)}</p>
                        <button className="btn btn-dark text-uppercase fw-bold w-100 rounded-0 py-3 mt-2">Ver producto</button>
                    </div>
                </Link>
            </div>
     );
}
 
export default Item;