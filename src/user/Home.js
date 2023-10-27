import { useState } from "react";
import Slider from "./Slider";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [product, setProduct] = useState([]);
    const [ipad, setIpad] = useState([]);
    const [mobile, setMobile] = useState([]);
    const [headphone, setHeadphone] = useState([]);
    const [laptop, setLaptop] = useState([]);

    const getAllProduct = async () => {
        axios.get(` http://localhost:8000/products`)
            .then((res) => {
                setProduct(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    // mobile

    const getAllMobile = () => {
        axios.get(`http://localhost:8000/products`)
            .then((res) => {
                let ans = res.data.filter((val, i) => {
                    if (i < 5) {
                        return val.category === "mobile"
                    }
                })
                setMobile(ans)
            })
            .catch((err) => {
                console.log(err);
                return false;
            })
    }
    // ipad
    const getAllIpad = () => {
        axios.get(`http://localhost:8000/products?category=ipad&status=instock`)
            .then((res) => {
                setIpad(res.data.slice(0, 4)); // Corrected slice argument
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
// headphone
    const getAllHeadphone = () => {
        axios.get(`http://localhost:8000/products?category=headphone&status=instock`)
            .then((res) => {
                setHeadphone(res.data.slice(0, 4)); // Corrected to setHeadphone
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

// laptop
    const getAllLaptop = () => {
        axios.get(`http://localhost:8000/products?category=laptop&status=instock`)
            .then((res) => {
                setLaptop(res.data.slice(0, 4)); // Corrected to setLaptop
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }


    useEffect(() => {
        getAllProduct();
        getAllMobile();
        getAllIpad();
        getAllHeadphone();
        getAllLaptop();
    }, [])
    return (
        <>
            <Slider />
            <div className="container p-5 " style={{ fontFamily: 'Rubik' }}>
            <div className="row">
              <div className="col-xl-12">
                <div className="section__head d-flex justify-content-between mb-10">
                  <div className="section__title">
                    <h5 className="st-titile-d">Top Deals Of The Day</h5>
                  </div>
                  <div className="offer-time">
                    <span className="offer-title d-none d-sm-block">Hurry Up! Offer ends in:</span>
                    <div className="countdown">
                      <div className="countdown-inner b-radius" data-countdown data-date="Mar 02 2022 20:20:22">
                        <ul className="text-center">
                          <li><span data-days>36</span> Days</li>
                          <li><span data-hours>8</span> Hours</li>
                          <li><span data-minutes>16</span> Mins</li>
                          <li><span data-seconds>54</span> Secs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            {/*  */}
            <div className="container p-5 " style={{ fontFamily: 'Rubik' }}>
                <div className="row">
                    {
                        mobile.map((val) => {
                            return (
                                <div className="col-md-3 pb-4">
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
                                            <Link to={`/product`}>
                                                <button className="cart-btn">Add To Cart</button>
                                            </Link>
                                            {/* <h5 className="card-title">Price :- {val.price}</h5> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* ipad */}
                    {
                        ipad.map((val) => {
                            return (
                                <div className="col-md-3 pb-4">
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
                                            <Link to={`/product`}>
                                                <button className="cart-btn">Add To Cart</button>
                                            </Link>
                                            {/* <h5 className="card-title">Price :- {val.price}</h5> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* headphone */}
                    {
                        headphone.map((val) => {
                            return (
                                <div className="col-md-3 pb-4">
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
                                            <Link to={`/product`}>
                                                <button className="cart-btn">Add To Cart</button>
                                            </Link>
                                            {/* <h5 className="card-title">Price :- {val.price}</h5> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                    {/* laptop */}

                    {
                        laptop.map((val) => {
                            return (
                                <div className="col-md-3 pb-4">
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
                                            <Link to={`/product`}>
                                                <button className="cart-btn">Add To Cart</button>
                                            </Link>
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
export default Home;