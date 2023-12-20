import React from 'react'
import { NavLink } from 'react-router-dom'
const Feature = () => {
  return (
    <>
    
      {/* featured-start */}
      <section className="featured light-bg pt-55 pb-40 ">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__head d-flex justify-content-between mb-30">
                <div className="section__title">
                  <h5 className="st-titile">Top Featured Products</h5>
                </div>
                <div className="button-wrap">
                  <NavLink>See All Product <i className="fal fa-chevron-right" /></NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div className="single-features-item single-features-item-d b-radius mb-20">
                <div className="row  g-0 align-items-center">
                  <div className="col-md-6">
                    <div className="features-thum">
                      <div className="features-product-image w-img">
                        <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/features-product/fpb-1.jpg" alt /></NavLink>
                      </div>
                      <div className="product__offer">
                        <span className="discount">-15%</span>
                      </div>
                      <div className="product-action">
                        <NavLink className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                          <i className="fal fa-eye" />
                          <i className="fal fa-eye" />
                        </NavLink>
                        <NavLink className="icon-box icon-box-1">
                          <i className="fal fa-heart" />
                          <i className="fal fa-heart" />
                        </NavLink>
                        <NavLink className="icon-box icon-box-1">
                          <i className="fal fa-layer-group" />
                          <i className="fal fa-layer-group" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product__content product__content-d">
                      <h6><NavLink style={{ color: 'DodgerBlue' }} className="text-decoration">Samsang Galaxy A70 128GB Dual-SIM</NavLink></h6>
                      <div className="rating mb-5">
                        <ul className="rating-d">
                          <li><NavLink><i className="fal fa-star" /></NavLink></li>
                          <li><NavLink><i className="fal fa-star" /></NavLink></li>
                          <li><NavLink><i className="fal fa-star" /></NavLink></li>
                          <li><NavLink><i className="fal fa-star" /></NavLink></li>
                          <li><NavLink><i className="fal fa-star" /></NavLink></li>
                        </ul>
                        <span>(01 review)</span>
                      </div>
                      <div className="price d-price mb-10">
                        <span>$307.00 <del>$110</del></span>
                      </div>
                      <div className="features-des mb-25">
                        <ul>
                          <li><NavLink><i className="fas fa-circle" /> Bass
                            and Stereo Sound.</NavLink></li>
                          <li><NavLink><i className="fas fa-circle" /> Display
                            with 3088 x 1440 pixels resolution.</NavLink></li>
                          <li><NavLink><i className="fas fa-circle" /> Memory,
                            Storage &amp; SIM: 12GB RAM, 256GB.</NavLink></li>
                          <li><NavLink><i className="fas fa-circle" /> Androi
                            v10.0 Operating system.</NavLink></li>
                        </ul>
                      </div>
                      <div className="cart-option">
                        <NavLink className="cart-btn-2 w-100 mr-10 text-white">Add to Cart</NavLink>
                        <NavLink className="transperant-btn"><i className="fal fa-heart" /></NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="single-features-item b-radius mb-20">
                    <div className="row  g-0 align-items-center">
                      <div className="col-6">
                        <div className="features-thum">
                          <div className="features-product-image w-img">
                            <NavLink ><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/features-product/fp-1.jpg" alt /></NavLink>
                          </div>
                          <div className="product__offer">
                            <span className="discount">-15%</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="product__content product__content-d text-decoration">
                          <h6><NavLink>Epple Watch SE Gold Aluminum</NavLink></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                            </ul>
                            <span>(01 review)</span>
                          </div>
                          <div className="price d-price">
                            <span>$307.00 <del>$110</del></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-features-item b-radius mb-20">
                    <div className="row  g-0 align-items-center">
                      <div className="col-6">
                        <div className="features-thum">
                          <div className="features-product-image w-img">
                            <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/features-product/fp-2.jpg" alt /></NavLink>
                          </div>
                          <div className="product__offer">
                            <span className="discount">-5%</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="product__content product__content-d">
                          <h6><NavLink>G951s Pink Stereo Gaming Headset</NavLink>
                          </h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                            </ul>
                            <span>(01 review)</span>
                          </div>
                          <div className="price d-price">
                            <span>$307.00 <del>$110</del></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="single-features-item b-radius mb-20">
                    <div className="row  g-0 align-items-center">
                      <div className="col-6">
                        <div className="features-thum">
                          <div className="features-product-image w-img">
                            <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/features-product/fp-3.jpg" alt /></NavLink>
                          </div>
                          <div className="product__offer">
                            <span className="discount">-25%</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="product__content product__content-d">
                          <h6><NavLink>Solo3 Wireless On-Ear Headphones</NavLink>
                          </h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                            </ul>
                            <span>(01 review)</span>
                          </div>
                          <div className="price d-price">
                            <span>$307.00 <del>$110</del></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-features-item b-radius mb-20">
                    <div className="row  g-0 align-items-center">
                      <div className="col-6">
                        <div className="features-thum">
                          <div className="features-product-image w-img">
                            <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/features-product/fp-4.jpg" alt /></NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="product__content product__content-d">
                          <h6><NavLink>Men’s Short-Sleeve Pocket Oxford
                            Shirt</NavLink></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                              <li><NavLink><i className="fal fa-star" /></NavLink></li>
                            </ul>
                            <span>(01 review)</span>
                          </div>
                          <div className="price d-price">
                            <span>$307.00 <del>$110</del></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* featured-end */}
      {/* moveing-text-area-start */}
      <section className="moveing-text-area">
        <div className="container">
          <div className="ovic-running">
            <div className="wrap">
              <div className="inner">
                <p className="item">Free UK Delivery - Return Over $100.00 ( Excluding Homeware ) | Free UK
                  Collect From Store</p>
                <p className="item">Design Week / 15% Off the website / Code: AYOSALE-2020</p>
                <p className="item">Always iconic. Now organic. Introducing the $20 Organic Tee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* moveing-text-area-end */}
      {/* banner__area-start */}
      <section className="banner__area pt-60 pb-25">
        <div className="container">z
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="banner__item p-relative w-img mb-30">
                <div className="banner__img">
                  <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/banner/banner-6.jpg" alt /></NavLink>
                </div>
                <div className="banner__content banner__content-sd text-center">
                  <div className="banner-button mb-20">
                    <NavLink className="st-btn">HOT DEALS</NavLink>
                  </div>
                  <h6><NavLink className={"text-white"}>Sale 30% Off <br /> Top Computer Case Gaming</NavLink></h6>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="banner__item p-relative mb-30 w-img">
                    <div className="banner__img">
                      <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/banner/banner-7.jpg" alt /></NavLink>
                    </div>
                    <div className="banner__content banner__content-sd text-center">
                      <h6><NavLink className={"text-white"}>Electronic Deals</NavLink></h6>
                      <p>Laptop, Computer, Smartphone, Gampad</p>
                      <div className="banner-button mt-20 d-none d-sm-block">
                        <NavLink className="st-btn-3 b-radius">Shop Deals</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="banner__item p-relative w-img mb-30">
                    <div className="banner__img">
                      <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/banner/banner-8.jpg" alt /></NavLink>
                    </div>
                    <div className="banner__content">
                      <h6><NavLink className={"text-white"}>Hot Products <br /> Laptop Ultra 4K 16”</NavLink>
                      </h6>
                      <p>Discount 20% On Products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="banner__item p-relative mb-30 w-img">
                <div className="banner__img">
                  <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/banner/banner-9.jpg" alt /></NavLink>
                </div>
                <div className="banner__content banner__content-sd text-center">
                  <div className="banner-button mb-20">
                    <NavLink className="st-btn">HOT DEALS</NavLink>
                  </div>
                  <h6><NavLink className={"text-white"}>Sport Edition <br /> Best Choice of The Year</NavLink></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner__area-end */}
      {/* brand-area-start */}
      {/* <section className="brand-area brand-area-d">
        <div className="container">
          <div className="brand-slider swiper-container pt-50 pb-45">
            <div className="swiper-wrapper">
              <div className="brand-item bread-img swiper-slide">
                <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/brand/brand-6.jpg" alt="brand" /></NavLink>
              </div>
              <div className="brand-item bread-img swiper-slide">
                <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/brand/brand-1.jpg" alt="brand" /></NavLink>
              </div>
              <div className="brand-item bread-img swiper-slide">
                <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/brand/brand-3.jpg" alt="brand" /></NavLink>
              </div>
              <div className="brand-item bread-img swiper-slide">
                <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/brand/brand-4.jpg" alt="brand" /></NavLink>
              </div>
              <div className="brand-item bread-img swiper-slide">
                <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/brand/brand-5.jpg" alt="brand" /></NavLink>
              </div>
              <div className="brand-item bread-img swiper-slide">
                <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/brand/brand-6.jpg" alt="brand" /></NavLink>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* brand-area-end */}


    </>
  )
}




export default Feature