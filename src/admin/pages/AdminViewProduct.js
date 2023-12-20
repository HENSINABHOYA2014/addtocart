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
    const onpagination = async (ans) => {
        if (ans === "F") {
          let pagination = await axios.get(`http://localhost:8000/products?_page=1&_limit=10`);
          setProduct(pagination.data)
        } else if (ans === "M") {
          let pagination = await axios.get(`http://localhost:8000/products?_page=2&_limit=10`);
          setProduct(pagination.data)
        }
        else if (ans === "L") {
          let pagination = await axios.get(`http://localhost:8000/products?_page=3&_limit=10`);
          setProduct(pagination.data)
        }
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
            <main id='main' className='main'>
                <div className=" col-lg-12 ">
                    <section style={{ boxShadow: '3px 3px 5px 6px #ccc' }} >
                        <h1 className="text-center">Product</h1>
                        <button className="button">
                            <i className="fa-solid fa-plus" />
                            <NavLink to={`/admin/adminproduct`} className="text-white">ADD Product</NavLink>
                        </button>
                    </section>

                    <div className="card">
                        <table>
                            <thead>
                                <tr>
                                    <th className='h2' scope="col">Name</th>
                                    <th className='h2' scope="col">ProductName</th>
                                    <th className='h2' scope="col">Price</th>
                                    <th className='h2' scope="col">MarketStatus</th>
                                    <th className='h2' scope="col">Status</th>
                                    <th className='h2' scope="col">Quantity</th>
                                    <th className='h2' scope="col">Description</th>
                                    <th className='h2' scope="col">Action</th>
                                    {/* <th className='h2' scope="col">ID</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map((val) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td className='h3'>{val.id}</td>
                                                    <td className='h3'>{val.name}</td>
                                                    <td className='h3'>{val.productname}</td>
                                                    <td className='h3'>{val.price}</td>
                                                    <td className='h3'>
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
                                                    <td className='h3'>{val.qty}</td>
                                                    <td className='h3'>{val.description}</td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* <section className="table-footer grid">
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
                    </section> */}
                </div>
            
            </main>


            {/* <button className="btn btn-primary mt-5">
                <NavLink to={`/admin/adminproduct`} className="text-white">ADD Product</NavLink>
            </button> */}


        </>
    )
}

export default AdminViewProduct