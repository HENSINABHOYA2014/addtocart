import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <div>
        {/* banner__area-end */}
        {/* topsell__area-start */}
        {/* <div className="single-slider swiper-slide slider-height d-flex align-items-center" src="https://wphix.com/template/dukamarket/dukamarket/assets/img/slider/01-slide-2.jpg">
  <div className="container">
    <div className="row">
      <div className="col-xl-5">
        <div className="slider-content">
          <div className="slider-top-btn" data-animation="fadeInLeft" data-delay="1.5s">
            <a href="product-details.html" className="st-btn b-radius">HOT DEALS</a>
          </div>
          <h2 data-animation="fadeInLeft" data-delay="1.7s" className="pt-15 slider-title pb-5" style={{color:'black'}}>SALE 30% OFF <br /> FUTURE FOOTBALL BOOTS</h2>
          <p className="pr-20 slider_text" data-animation="fadeInLeft" data-delay="1.9s">
            Discount 30% On Products &amp; Free Shipping</p>
          <div className="slider-bottom-btn mt-75">
            <a data-animation="fadeInUp" data-delay="1.15s" href="shop.html" className="st-btn-b b-radius">Discover now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

        {/* topsell__area-end */}
      </div>
      {/* features__area-start */}
      <section className="features__area pt-20" style={{ fontFamily: 'Rubik' }}>
        <div className="container">
          <div className="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 gx-0">
            <div className="col">
              <div className="features__item d-flex white-bg">
                <div className="features__icon mr-20">
                  <i className="fal fa-truck" />
                </div>
                <div className="features__content">
                  <h6>FREE DELIVERY</h6>
                  <p>For all orders over $120</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="features__item d-flex white-bg">
                <div className="features__icon mr-20">
                  <i className="fal fa-money-check" />
                </div>
                <div className="features__content">
                  <h6>SAFE PAYMENT</h6>
                  <p>100% secure payment</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="features__item d-flex white-bg">
                <div className="features__icon mr-20">
                  <i className="fal fa-comments-alt" />
                </div>
                <div className="features__content">
                  <h6>24/7 HELP CENTER</h6>
                  <p>Delicated 24/7 support</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="features__item features__item-last d-flex white-bg">
                <div className="features__icon mr-20">
                  <i className="fad fa-user-headset" />
                </div>
                <div className="features__content">
                  <h6>FRIENDLY SERVICES</h6>
                  <p>30 day satisfaction guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features__area-end */}
      {/* banner__area-start */}
      <section className="banner__area pt-20 pb-10" style={{ fontFamily: 'Rubik' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="banner__item p-relative w-img mb-30">
                <div className="banner__img">
                  <NavLink ><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/banner/banner-1.jpg" alt /></NavLink>
                </div>
                <div className="banner__content ">
                  <h6><NavLink className="text-decoration">Intelligent <br /> New Touch Control</NavLink></h6>
                  <p>Discount 20% On Products</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="banner__item p-relative mb-30 w-img">
                <div className="banner__img">
                  <NavLink ><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/banner/banner-2.jpg" alt /></NavLink>
                </div>
                <div className="banner__content">
                  <h6><NavLink className="text-decoration">On-sale <br /> Best Prices</NavLink></h6>
                  <p>Limited Time: Online Only!</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="banner__item p-relative mb-30 w-img">
                <div className="banner__img">
                  <NavLink ><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/banner/banner-3.jpg" alt /></NavLink>
                </div>
                <div className="banner__content">
                  <h6><NavLink className="text-decoration">Hot Sale <br /> Super Laptops 2022 </NavLink></h6>
                  <p>Free Shipping All Order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner__area-end */}
      {/* banner__area-start */}
      {/* <section className="banner__area banner__area-d pb-10 ">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="banner__item p-relative w-img mb-30">
                <div className="banner__img">
                  <NavLink ><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/banner/banner-4.jpg" alt /></NavLink>
                </div>
                <div className="banner__content">
                  <span>Bestseller Products</span>
                  <h6><NavLink style={{color:'white'}}>PC &amp; Docking Station</NavLink></h6>
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
                  <h6><NavLink style={{color:'white'}}>Accessories iPhone</NavLink></h6>
                  <p>Free Shipping All Order Over $99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* banner__area-end */}
      {/* featured-start */}
      {/* <section className="featured light-bg pt-55 pb-40 ">
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
                        <NavLink className="cart-btn-2 w-100 mr-10">Add to Cart</NavLink>
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
      </section> */}
      {/* featured-end */}
      {/* moveing-text-area-start */}
      {/* <section className="moveing-text-area">
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
      </section> */}
      {/* moveing-text-area-end */}
      {/* banner__area-start */}
      {/* <section className="banner__area pt-60 pb-25">
        <div className="container">
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
                  <h6><NavLink style={{color:'white'}}>Sale 30% Off <br /> Top Computer Case Gaming</NavLink></h6>
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
                      <h6><NavLink style={{color:'white'}}>Electronic Deals</NavLink></h6>
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
                      <h6><NavLink style={{color:'white'}}>Hot Products <br /> Laptop Ultra 4K 16”</NavLink>
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
                  <h6><NavLink style={{color:'white'}}>Sport Edition <br /> Best Choice of The Year</NavLink></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
export default Slider;