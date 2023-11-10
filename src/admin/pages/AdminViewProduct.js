import React, { useEffect, useState } from 'react'
// import './viewproduct.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const AdminViewProduct = () => {
    const [product, setProduct] = useState([]);
    const [marketstatus, setMarketStatus] = useState(["trending", "best", "latest", "upcoming"]);
    const [selectMarketStatus, setSelectMarketStatus] = useState("")
    const [stockstatus, setStockStatus] = useState(["instock", "outstock"])

    const changeMarketStatus = (userproductid, value) => {
        axios.patch(` http://localhost:8000/products/${userproductid}`, {
            marketstatus: value
        }).then((res) => {
            alert("Marketstatus Succesfully Update")
        }).catch((err) => {
            return false;
        })
    }
    const instock = (userproductid, value) => {
        axios.patch(`http://localhost:8000/products/${userproductid}`, {
            stockstatus: value
        }).then((res) => {
            alert("StockStatus Succesfully Update");
            getAllProduct();
        }).catch((err) => {
            return false;
        })
    }
    const outStock = (userproductid, value) => {
        axios.patch(`http://localhost:8000/products/${userproductid}`, {
            stockstatus: value
        }).then((res) => {
            alert("StockStatus Succesfully Update");
            getAllProduct();
        }).catch((err) => {
            return false;
        })
    }
    const getAllProduct = () => {
        axios.get(`http://localhost:8000/products`)
            .then((res) => {
                setProduct(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    useEffect(() => {
        getAllProduct();
    }, [])
    return (
        <>
            <main>
                <div className="content">
                    <section className="main-header grid">
                        <h1>Product</h1>
                        <button className="button">
                            <i className="fa-solid fa-plus" />
                            <NavLink to={`/adminProduct`} className="text-white">ADD Product</NavLink>
                        </button>
                    </section>

                    <div className="card">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>ProductName</th>
                                    <th>Price</th>
                                    <th>MarketStatus</th>
                                    <th>Status</th>
                                    <th>Quantity</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map((val) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{val.id}</td>
                                                    <td>{val.name}</td>
                                                    <td>{val.productname}</td>
                                                    <td>{val.price}</td>
                                                    <td>
                                                        <select onChange={(e) => changeMarketStatus(val.id, e.target.value)}>

                                                            <option value="">--Select Market Status--</option>
                                                            {
                                                                marketstatus.map((item) => {
                                                                    return (
                                                                        val.marketstatus === item ?
                                                                            <option selected>{val.marketstatus}
                                                                            </option> : <option>{item}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </td>
                                                    <td>
                                                        {
                                                            val.stockstatus === "instock" ? (<button onClick={() => instock(val.id, "outstock")} style={{ backgroundColor: 'DarkSeaGreen', color: 'black' }} className=' btn-sm'>InStock</button>) :
                                                                (<button onClick={() => outStock(val.id, "instock")} style={{ backgroundColor: 'DarkOliveGreen', color: 'white' }} className=' btn-sm'>OutStock</button>)
                                                        }
                                                    </td>
                                                    <td>{val.qty}</td>
                                                    <td>{val.description}</td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <section className="table-footer grid">
                        <span>Displaying 1-10 of 123 items</span>
                        <div className="paging grid">
                            <span>
                                Page
                                <input type="number" defaultValue={1} />
                                of 13
                            </span>
                            <div className="button icon">
                                <i className="fa-solid fa-angle-left" />
                            </div>
                            <div className="button icon">
                                <i className="fa-solid fa-angle-right" />
                            </div>
                        </div>
                    </section>
                    <div className="colors">
                        <div className="color primary-100" />
                        <div className="color primary-200" />
                        <div className="color primary-300" />
                        <div className="color primary" />
                        <div className="color primary-500" />
                        <div className="color white" />
                        <div className="color neutral-100" />
                        <div className="color neutral" />
                        <div className="color black" />
                    </div>
                </div>
            </main>


            <button className="btn btn-primary mt-5">
                <NavLink to={`/adminProduct`} className="text-white">ADD Product</NavLink>
            </button>


        </>
    )
}

export default AdminViewProduct