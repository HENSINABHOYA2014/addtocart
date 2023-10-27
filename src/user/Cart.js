import axios from "axios";
import { useEffect, useState } from "react"
import Userauth from "./Userauth";

const Cart=()=>{
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        axios.get(` http://localhost:8000/carts?userId=${Userauth().id}`)
        .then((res)=>{
            setCart(res.data);
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    },[]);
    return(
       <>
        <div className='container'>
                <div className="row">
                    {
                        cart.map((val) => {
                            return (
                                <div className="col-md-3 pb-4 ">
                                    <div className="card" style={{ width: '25rem', border: 'none', padding: '15px' }}>
                                        <img style={{ height: '200px', width: '25rem', objectFit: 'contain' }} src={val.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <br />
                                            <h3 style={{ color: 'DodgerBlue' }}>{val.content}</h3>
                                            <div className="rating">
                                                <ul>
                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                </ul>
                                                <span>(01 review)</span>
                                            </div>
                                            <h4 className="card-title pt-2 pb-2"> {val.price}</h4>
                                            <div className="progress mb-3">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <h4 className="card-title" style={{ color: 'Gray' }}>Sold: {val.sold}</h4>
                                            <br/>
                                            <button className="cart-btn">Add To Cart</button>
                                            {/* <div className="hover-content">
                                                <a href="#" className="add-to-cart"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                                            </div> */}
                                            {/* <h5 className="card-title">Price :- {val.price}</h5> */}
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
       </> 
    )
}
export default Cart;