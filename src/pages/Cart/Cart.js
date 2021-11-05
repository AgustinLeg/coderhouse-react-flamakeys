import React,{useState} from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { useCartContext } from "../../context/cartContext";
import useFormatPrice from "../../hooks/useFormatPrice";

const Cart = () => {
  const { items, total, removeItem, clearCart} = useCartContext();
  const [inputDisscount, setInputDisscount] = useState('')
  
  const handleChange = e =>{
    setInputDisscount(e.target.value)
  }
  
  return (
    <div className="container-fluid pt-5 mt-5">
      <div className="row p-5">
        <div className="col-md-7">
          {items.length > 0 ? (
            <>
              <div className="cart-container div-stripped">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} removeItem={removeItem} />
                ))}
              </div>
            </>
          ) : (
            <div className="d-flex flex-column">
              <p className="text-center">El carrito de compras está vacío.</p>
              <button
                type="button"
                className="btn"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offCanvasCart"
                aria-label="Close"
              >
                <Link to="/" className="btn btn-success">
                  Quiero Comprar
                </Link>
              </button>
            </div>
          )}
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">RESUMEN DE PEDIDO</h5>
              <hr />
              <h6 className="mb-5 fs-4 d-flex justify-content-between ">
                Total: <span>{useFormatPrice(total)}</span>
              </h6>
              <button
                className="btn btn-outline-dark  w-100"
                data-bs-toggle="collapse"
                data-bs-target="#disscountCollapse"
                aria-expanded="false"
                aria-controls="disscountCollapse"
              >
                Cupon de descuento
              </button>
              <div className="collapse" id="disscountCollapse">
                <div className="card card-body">
                  <form>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        id="inputDisscount"
                        value={inputDisscount}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <button type="submit" className="btn btn-dark mt-3 w-100">
                        ingresar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-group d-flex flex-column flex-lg-row justify-content-between align-items-center mt-5" role="group">
            <Link to="/" className="btn btn-danger w-100 mt-2" onClick={clearCart}>
              Cancelar Pedido
            </Link>
            <Link to="/finalizar-compra" className="btn btn-success w-100 mt-2">
              Continuar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
