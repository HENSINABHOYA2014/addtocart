import React from 'react'
import { NavLink } from 'react-router-dom';
const Banner = () => {
    return (
        <>
            {/* banner__area-start */}
            <section className="banner__area banner__area-d pb-10 ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="banner__item p-relative w-img mb-30">
                                <div className="banner__img">
                                    <NavLink ><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/banner/banner-4.jpg" alt /></NavLink>
                                </div>
                                <div className="banner__content">
                                    <span>Bestseller Products</span>
                                    <h6><NavLink className={"text-white"}>PC &amp; Docking Station</NavLink></h6>
                                    <p>Discount 20% Off, Top Quality Products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="banner__item p-relative mb-30 w-img">
                                <div className="banner__img">
                                    <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/banner/banner-5.jpg" alt /></NavLink>
                                </div>
                                <div className="banner__content">
                                    <span>Featured Products</span>
                                    <h6><NavLink className={"text-white"}>Accessories iPhone</NavLink></h6>
                                    <p>Free Shipping All Order Over $99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner__area-end */}

        </>
    )
}

export default Banner;