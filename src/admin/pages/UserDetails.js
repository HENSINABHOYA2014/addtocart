import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../../src/css/userdproductdetails.css'


const UserDetails = () => {
    const { userid } = useParams();

    const [cart, setCart] = useState([])
    const [user, setUser] = useState("");

    const getUserDetails = () => {
        axios.get(`http://localhost:8000/users/${userid}`)
            .then((res) => {
                setUser(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const getUserCartDetails = () => {
        axios.get(`http://localhost:8000/carts?userId=${userid}`)
            .then((res) => {
                setCart(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    useEffect(() => {
        getUserCartDetails();
        getUserDetails();
    }, [])

    return (
        <>
            <div className="ps-5 col-lg-12 pt-2 text-center">
                <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 p-5">
                    <h1 className="text-center">Users Details</h1>
                    <hr />
                    <div className='container'>
                        <h3 className='p-2 text-primary' >User Name : {user.username}</h3>
                        <h3 className='p-2 text-primary'>User Email : {user.email}</h3>

                        <div className="product-card">
                            {
                                cart.map((val) => {
                                    return (
                                        <>
                                            <div className="badge">Hot</div>
                                            <div className="product-tumb">
                                                <img src={val.image} alt />
                                            </div>
                                            <div className="product-details">
                                                {/* <span className="product-catagory">{val.name}</span> */}
                                                <h4><a href>{val.name}</a></h4>
                                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p> */}
                                                <div className="product-bottom-details">
                                                    <div className="product-price">{val.price}</div>
                                                    <div className="product-links">
                                                        <a href><i className="fa fa-heart" /></a>
                                                        <a href><i className="fa fa-shopping-cart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>

                    </div>


                </div>



                {/* <ToastContainer /> */}
            </div>
        </>
    )
}

export default UserDetails