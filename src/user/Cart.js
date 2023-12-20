import axios from "axios";
import { useEffect, useState } from "react";
import Userauth from "./Userauth";
import '../../src/css/addtocart.css';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getAllCart = () => {
    if (!Userauth().id) {
      navigate('/login');
    } else {
      axios.get(`http://localhost:8000/carts?userId=${Userauth().id}`)
        .then((res) => {
          setCart(res.data);
        }).catch((err) => {
          console.log(err);
        });
    }
  };

  const editCart = (id, Qty) => {
    let edit = cart.map((val) => {
      if (val.id === id) {
        return {
          ...val,
          qty: parseInt(Qty)
        };
      }
      return val;
    });
    setCart(edit);

    let updateCart = edit.find((v) => {
      return v.id === id;
    });

    axios.patch(`http://localhost:8000/carts/${updateCart.id}`, {
      qty: updateCart.qty
    }).then((res) => {
      getAllCart();
    }).catch((err) => {
      console.log(err);
      return false;
    });
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.qty;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    getAllCart();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <>
      <div className="container-fluid my-5">
        <div className="col-md-12">
          <div className="card border-0">
            <div className="card-header card-2">
              <p className="card-text text-muted mt-md-4 mb-2 space">YOUR ORDER <span className="small text-muted ml-2 cursor-pointer">EDIT SHOPPING BAG</span> </p>
              <hr className="my-2" />
            </div>
            <div>
              {cart.map((val) => (
                <div className="row justify-content-between" key={val.userId}>
                  <div className="col-auto col-md-7">
                    <div className="media flex-column flex-sm-row">
                      <img className="img-fluid" src={val.image} width={100} alt="product" />
                      <div className="media-body my-auto">
                        <div className="row">
                          <div className="col-auto">
                            <h2 className="mb-0" style={{ color: 'gray' }}><b>Product: {val.name}</b></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-0 flex-sm-col col-auto my-auto">
                    <input type="number" onChange={(e) => editCart(val.id, e.target.value)} value={val.qty} />
                  </div>
                  <div className="pl-0 flex-sm-col col-auto my-auto">
                    <h2 style={{ color: 'gray' }}><b>Price: {val.price}</b></h2>
                  </div>
                  <div className="pl-0 flex-sm-col col-auto my-auto">
                    <h2 style={{ color: 'gray' }}><b>SubTotal: {val.price * val.qty}</b></h2>
                  </div>
                </div>
              ))}
              {/* Display Total */}
              <center>
              <div>
                <p><b>Total Price: {totalPrice}</b></p>
              </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
