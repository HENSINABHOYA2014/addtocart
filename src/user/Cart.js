import axios from "axios";
import { useEffect, useState } from "react"
import Userauth from "./Userauth";
import '../../src/css/addtocart.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const calulaterTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.price;
    });
    setTotalPrice(total);
  }

  // const productDelete=(id)=>{
  //  axios.delete(` http://localhost:8000/carts/${id}`)
  //  .then((res)=>{
  //   alert("Product Succesfully Delete");
  //   getAllCart();
  //  }).catch((err)=>{
  //   console.log(err);
  //   return false;
  //  })
  // }

  const qtyChange = (id, qty) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        if (qty > 0) {
          return { ...item, qty: parseInt(qty) }
        }
      }
      return item;
    });
    updatedCart.forEach(item => {
      if (item.id === id) {
        axios.patch(`http://localhost:8000/carts/${item.id}`, {
          qty: item.qty,
        })
          .then((res) => {
            
          })
          .catch((err) => {
            
          });
      }
    });

    setCart(updatedCart);
  }




  //   let data=updateCart.map((item)=>{
  //     if(item.id===id){
  //       axios.patch(`http://localhost:8000/carts/${item.id}`,{
  //         qty:item.qty,
  //       }).then((res)=>{
  //         cartdata();
  //       }).catch((err)=>{
  //         return false;
  //       })
  //     }
  //     return item;
  //   })
  //   setCart(data);
  // }

  const getAllCart = () => {
    if (!Userauth()) {
      alert("Please Login");
      navigate('/product');
    } else {
      axios.get(`http://localhost:8000/carts?userId=${Userauth().id}`)
        .then((res) => {
          setCart(res.data);
        }).catch((err) => {
          console.log(err);
          return false;
        })
    }
  }

  
  useEffect(()=>{
    calulaterTotalPrice();
  },[cart]);

  useEffect(() => {
    getAllCart();
    // updateCart ();
  }, []);
  return (
    <>  
     <div className=" container-fluid my-5">
        
        <div className="col-md-12">
          <div className="card border-0">
            <div className="card-header card-2">
              <p className="card-text text-muted mt-md-4 mb-2 space">YOUR ORDER <span className="small text-muted ml-2 cursor-pointer">EDIT SHOPPING BAG</span> </p>
              <hr className="my-2" />
            </div>
            <div className="card-body pt-0">
              {cart.map((val) => (
                <div className="row justify-content-between" key={val.userId}>
                  <div className="col-auto col-md-7">
                    <div className="media flex-column flex-sm-row">
                      <img className=" img-fluid" src={val.image} width={100} />
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
                    <input type="number" onChange={(e) => qtyChange(val.id, e.target.value)} value={val.qty} />

                  </div>
                  <div className="pl-0 flex-sm-col col-auto my-auto">
                    <h2 style={{ color: 'gray' }}><b>Price: {val.price}</b></h2>
                  </div>
                </div>
              ))}
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Cart;