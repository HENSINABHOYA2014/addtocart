import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Product = () => {
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);

    const allProduct = () => {
        axios.get(`http://localhost:8000/products`)
            .then((res) => {
                setProduct(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const allCategory = () => {
        axios.get(`  http://localhost:8000/category`)
            .then((res) => {
                setCategory(res.data)
            }).catch((err) => {
                console.log(err);
                return false
            })
    }

    const categoryFilter = (category) => {
        if (category === 'all') {
            allProduct();
        } else {
            axios.get(`http://localhost:8000/products?category=${category}`)
                .then((res) => {
                    setProduct(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }


    useEffect(() => {
        allProduct()
        allCategory()
    }, []);
    return (
        <>
            <div className="container p-5 " style={{ fontFamily: 'Rubik' }}>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__head d-flex justify-content-between mb-10">
                            <div className="section__title">
                                <h5 className="st-titile">Top Selling Products</h5>
                            </div>
                            <div className="product__nav-tab">
                                <ul className="nav nav-tabs" id="flast-sell-tab" role="tablist">
                                    {/* <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="computer-tab" data-bs-toggle="tab" data-bs-target="#computer" type="button" role="tab" aria-controls="computer" aria-selected="false">Mobile</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="samsung-tab" data-bs-toggle="tab" data-bs-target="#samsung" type="button" role="tab" aria-selected="false">Tv</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="htc-tab" data-bs-toggle="tab" data-bs-target="#htc" type="button" role="tab" aria-selected="false">Ipad</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="nokia-tab" data-bs-toggle="tab" data-bs-target="#nokia" type="button" role="tab" aria-selected="false">Moniter</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="cell-tab" data-bs-toggle="tab" data-bs-target="#cell" type="button" role="tab" aria-selected="true">Headphone</button>
                                    </li> */}
                                    {
                                        category.map((val) => {
                                            return (
                                                <>
                                                    <li className="nav-item" role="presentation">

                                                        <button onClick={() => categoryFilter(val.category_name)} style={{ width: '100%' }} type="button" className="nav-link" id="cell-tab" data-bs-toggle="tab" data-bs-target="#cell" role="tab" aria-selected="true">{val.category_name}</button>
                                                    </li>

                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    {
                        product.map((val) => {
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
                                            <Link to={`/product_details/${val.id}`}>
                                                <button className="cart-btn">View More</button>
                                            </Link>
                                            {/* <button className="cart-btn">View More</button> */}
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
export default Product;