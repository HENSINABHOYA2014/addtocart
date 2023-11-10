import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem('checkUserLogin'));
  console.log(data);

  const logout = () => {
    localStorage.clear('checkUserLogin');
    navigate('/login');
  }
  return (
    <>
      <div>
        {/* header-start */}
        <header className="header d-blue-bg myCustomClass" style={{ fontFamily: 'Rubik' }}>
          <div className="header-top">
            <div className="container">
              <div className="header-inner">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-7">
                    <div className="header-inner-start">
                      <div className="header__currency border-right">
                        <div className="s-name">
                          <span>Language: </span>
                        </div>
                        <select>
                          <option>English</option>
                          <option>Deutsch</option>
                          <option>Français</option>
                          <option>Espanol</option>
                        </select>
                      </div>
                      <div className="header__lang border-right">
                        <div className="s-name">
                          <span>Currency: </span>
                        </div>
                        <select>
                          <option> USD</option>
                          <option>EUR</option>
                          <option>INR</option>
                          <option>BDT</option>
                          <option>BGD</option>
                        </select>
                      </div>
                      <div className="support d-none d-sm-block">
                        <p>Need Help? <NavLink href="tel:+001123456789">+001 123 456 789</NavLink></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                    <div className="header-inner-end text-md-end">
                      <div className="ovic-menu-wrapper">
                        <ul>
                        <li><NavLink to={'/home'}>Product</NavLink></li>
                        <li><NavLink to={'/product'}>ProductDetails</NavLink></li>
                        <li><NavLink to={'/cart'}>Cart</NavLink></li>
                        <li><NavLink to={'/userprofile'}>Profile</NavLink></li>

                          <li><NavLink>Contact Us</NavLink></li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-mid">
            <div className="container">
              <div className="heade-mid-inner">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                    <div className="header__info">
                      <div className="logo">
                        <NavLink className="logo-image"><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/logo/logo1.svg" alt="logo" /></NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-4 d-none d-lg-block">
                    <div className="header__search">
                      <form action="#">
                        <div className="header__search-box">
                          <input className="search-input" type="text" placeholder="I'm shopping for..." />
                          <button className="button" type="submit"><i className="far fa-search" /></button>
                        </div>
                        <div className="header__search-cat">
                          <select>
                            <option>All Categories</option>
                            <option>Best Seller Products</option>
                            <option>Top 10 Offers</option>
                            <option>New Arrivals</option>
                            <option>Phones &amp; Tablets</option>
                            <option>Electronics &amp; Digital</option>
                            <option>Fashion &amp; Clothings</option>
                            <option>Jewelry &amp; Watches</option>
                            <option>Health &amp; Beauty</option>
                            <option>Sound &amp; Speakers</option>
                            <option>TV &amp; Audio</option>
                            <option>Computers</option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>
                 <div className="col-xl-4 col-lg-5 col-md-8 col-sm-8">
  <div className="header-action">
    <div className="block-userlink">
      <a className="icon-link">
        <i className="flaticon-user" />
        <span className="text">
          <span className="sub">Login </span>
          My Account </span>
      </a>
    </div>
    <div className="block-wishlist action">
      <a className="icon-link" href="wishlist.html">
        <i className="flaticon-heart" />
        <span className="count">0</span>
        <span className="text">
          <span className="sub">Favorite</span>
          My Wishlist </span>
      </a>
    </div>
    <div className="block-cart action">
      <a className="icon-link" href="cart.html">
        <i className="flaticon-shopping-bag" />
        <span className="count">1</span>
        <span className="text">
          <span className="sub">Your Cart:</span>
          $00.00 </span>
      </a>
      <div className="cart">
        <div className="cart__mini">
          <ul>
            <li>
              <div className="cart__title">
                <h4>Your Cart</h4>
                <span>(1 Item in Cart)</span>
              </div>
            </li>
            <li>
              <div className="cart__item d-flex justify-content-between align-items-center">
                <div className="cart__inner d-flex">
                  <div className="cart__thumb">
                    <a href="product-details.html">
                      <img src="assets/img/cart/20.jpg" alt />
                    </a>
                  </div>
                  <div className="cart__details">
                    <h6><a href="product-details.html"> Samsung C49J89:
                        £875, Debenhams Plus </a></h6>
                    <div className="cart__price">
                      <span>$255.00</span>
                    </div>
                  </div>
                </div>
                <div className="cart__del">
                  <a href="#"><i className="fal fa-times" /></a>
                </div>
              </div>
            </li>
            <li>
              <div className="cart__sub d-flex justify-content-between align-items-center">
                <h6>Subtotal</h6>
                <span className="cart__sub-total">$255.00</span>
              </div>
            </li>
            <li>
              <a href="cart.html" className="wc-cart mb-10">View cart</a>
              <a href="checkout.html" className="wc-checkout">Checkout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

                </div>
              </div>
            </div>
          </div>
          <div className="header__bottom">
            <div className="container">
              <div className="row g-0 align-items-center">
                <div className="col-lg-3">
                  <div className="cat__menu-wrapper side-border d-none d-lg-block">
                    <div className="cat-toggle">
                      <button type="button" className="cat-toggle-btn cat-toggle-btn-1"><i className="fal fa-bars" /> Shop by department</button>
                      <div className="cat__menu">
                        <nav id="mobile-menu" style={{ display: 'block' }}>
                          <ul>
                            <li>
                              <NavLink>All Categories <i className="far fa-angle-down" /></NavLink>
                              <ul className="mega-menu">
                                <li><NavLink>Shop Pages</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>Standard SHop Page</NavLink></li>
                                    <li><NavLink>Shop Right Sidebar</NavLink></li>
                                    <li><NavLink>Shop Left Sidebar</NavLink></li>
                                    <li><NavLink>Shop 3 Column</NavLink></li>
                                    <li><NavLink>Shop 4 Column</NavLink></li>
                                  </ul>
                                </li>
                                <li><NavLink>Product Pages</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>Product Details</NavLink></li>
                                    <li><NavLink>Product V2</NavLink></li>
                                    <li><NavLink>Product V3</NavLink></li>
                                    <li><NavLink>Varriable Product</NavLink></li>
                                    <li><NavLink>External Product</NavLink></li>
                                  </ul>
                                </li>
                                <li><NavLink>Other Pages</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>wishlist</NavLink></li>
                                    <li><NavLink>Shopping Cart</NavLink></li>
                                    <li><NavLink>Checkout</NavLink></li>
                                    <li><NavLink>Login</NavLink></li>
                                    <li><NavLink>Register</NavLink></li>
                                  </ul>
                                </li>
                                <li><NavLink>Phone &amp; Tablets</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>Catagory 1</NavLink></li>
                                    <li><NavLink>Catagory 2</NavLink></li>
                                    <li><NavLink>Catagory 3</NavLink></li>
                                  </ul>
                                </li>
                                <li><NavLink>Phone &amp; Tablets</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>Catagory 1</NavLink></li>
                                    <li><NavLink>Catagory 2</NavLink></li>
                                    <li><NavLink>Catagory 3</NavLink></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <NavLink>Phone and Electronics <i className="far fa-angle-down" /></NavLink>
                              <ul className="mega-menu mega-menu-2">
                                <li><NavLink>Shop Pages</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>Standard SHop Page</NavLink></li>
                                    <li><NavLink>Shop Right Sidebar</NavLink></li>
                                    <li><NavLink>Shop Left Sidebar</NavLink></li>
                                    <li><NavLink>Shop 3 Column</NavLink></li>
                                    <li><NavLink>Shop 4 Column</NavLink></li>
                                  </ul>
                                </li>
                                <li><NavLink>Product Pages</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>Product Details</NavLink></li>
                                    <li><NavLink>Product V2</NavLink></li>
                                    <li><NavLink>Product V3</NavLink></li>
                                    <li><NavLink>Varriable Product</NavLink></li>
                                    <li><NavLink>External Product</NavLink></li>
                                  </ul>
                                </li>
                                <li><NavLink>Other Pages</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>wishlist</NavLink></li>
                                    <li><NavLink>Shopping Cart</NavLink></li>
                                    <li><NavLink>Checkout</NavLink></li>
                                    <li><NavLink>Login</NavLink></li>
                                    <li><NavLink>Register</NavLink></li>
                                  </ul>
                                </li>
                                <li><NavLink>Phone &amp; Tablets</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>Catagory 1</NavLink></li>
                                    <li><NavLink>Catagory 2</NavLink></li>
                                    <li><NavLink>Catagory 3</NavLink></li>
                                  </ul>
                                </li>
                                <li><NavLink>Phone &amp; Tablets</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>Catagory 1</NavLink></li>
                                    <li><NavLink>Catagory 2</NavLink></li>
                                    <li><NavLink>Catagory 3</NavLink></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <NavLink>Best Seller Products
                                <span className="cat-label">hot!</span>
                                <i className="far fa-angle-down" />
                              </NavLink>
                              <ul className="mega-menu">
                                <li><NavLink>Shop Pages</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>Standard SHop Page</NavLink></li>
                                    <li><NavLink>Shop Right Sidebar</NavLink></li>
                                    <li><NavLink>Shop Left Sidebar</NavLink></li>
                                    <li><NavLink>Shop 3 Column</NavLink></li>
                                    <li><NavLink>Shop 4 Column</NavLink></li>
                                  </ul>
                                </li>
                                <li><NavLink>Product Pages</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>Product Details</NavLink></li>
                                    <li><NavLink>Product V2</NavLink></li>
                                    <li><NavLink>Product V3</NavLink></li>
                                    <li><NavLink>Varriable Product</NavLink></li>
                                    <li><NavLink>External Product</NavLink></li>
                                  </ul>
                                </li>
                                <li><NavLink>Other Pages</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>wishlist</NavLink></li>
                                    <li><NavLink>Shopping Cart</NavLink></li>
                                    <li><NavLink>Checkout</NavLink></li>
                                    <li><NavLink>Login</NavLink></li>
                                    <li><NavLink>Register</NavLink></li>
                                  </ul>
                                </li>
                                <li><NavLink>Phone &amp; Tablets</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>Catagory 1</NavLink></li>
                                    <li><NavLink>Catagory 2</NavLink></li>
                                    <li><NavLink>Catagory 3</NavLink></li>
                                  </ul>
                                </li>
                                <li><NavLink>Phone &amp; Tablets</NavLink>
                                  <ul className="mega-item">
                                    <li><NavLink>Catagory 1</NavLink></li>
                                    <li><NavLink>Catagory 2</NavLink></li>
                                    <li><NavLink>Catagory 3</NavLink></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <NavLink>Top 10 Offers
                                <span className="cat-label green">new!</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink>New Arrivals <i className="far fa-angle-down" /></NavLink>
                              <ul className="submenu">
                                <li><NavLink>Home Appliances</NavLink></li>
                                <li><NavLink>Technology</NavLink>
                                  <ul className="submenu">
                                    <li><NavLink>Storage Devices</NavLink></li>
                                    <li><NavLink>Monitors</NavLink></li>
                                    <li><NavLink>Laptops</NavLink></li>
                                  </ul>
                                </li>
                                <li><NavLink>Office Equipments</NavLink></li>
                              </ul>
                            </li>
                            <li><NavLink>TV &amp; Audio</NavLink></li>
                            <li><NavLink>Electronics &amp; Digital</NavLink></li>
                            <li className="d-laptop-none"><NavLink>Fashion &amp; Clothings</NavLink></li>
                            <li className="d-laptop-none"><NavLink>Jewelry &amp; Watches</NavLink></li>
                            <li><NavLink>Health &amp; Beauty</NavLink></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-3">
                  <div className="header__bottom-left d-flex d-xl-block align-items-center">
                    <div className="side-menu d-lg-none mr-20">
                      <button type="button" className="side-menu-btn offcanvas-toggle-btn"><i className="fas fa-bars" /></button>
                    </div>
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul>
                          <li>
                            <NavLink className="active">Home <i className="far fa-angle-down" /></NavLink>
                            <ul className="megamenu-1">
                              <li><NavLink>Home Pages</NavLink>
                                <ul className="mega-item">
                                  <li><NavLink className="active">Home One</NavLink></li>
                                  <li><NavLink>Home Two</NavLink></li>
                                  <li><NavLink>Home Three</NavLink></li>
                                  <li><NavLink>Shop 3 Column</NavLink></li>
                                  <li><NavLink>Shop 4 Column</NavLink></li>
                                </ul>
                              </li>
                              <li><NavLink>Product Pages</NavLink>
                                <ul className="mega-item">
                                  <li><NavLink>Product Details</NavLink></li>
                                  <li><NavLink>Product V2</NavLink></li>
                                  <li><NavLink>Product V3</NavLink></li>
                                  <li><NavLink>Varriable Product</NavLink></li>
                                  <li><NavLink>External Product</NavLink></li>
                                </ul>
                              </li>
                              <li><NavLink>Other Pages</NavLink>
                                <ul className="mega-item">
                                  <li><NavLink>wishlist</NavLink></li>
                                  <li><NavLink>Shopping Cart</NavLink></li>
                                  <li><NavLink>Checkout</NavLink></li>
                                  <li><NavLink>Login</NavLink></li>
                                  <li><NavLink>Register</NavLink></li>
                                </ul>
                              </li>
                              <li><NavLink>Phone &amp; Tablets</NavLink>
                                <ul className="mega-item">
                                  <li><NavLink>Catagory 1</NavLink></li>
                                  <li><NavLink>Catagory 2</NavLink></li>
                                  <li><NavLink>Catagory 3</NavLink></li>
                                  <li><NavLink>Catagory 4</NavLink></li>
                                </ul>
                              </li>
                              <li><NavLink>Phone &amp; Tablets</NavLink>
                                <ul className="mega-item">
                                  <li><NavLink>Catagory 1</NavLink></li>
                                  <li><NavLink>Catagory 2</NavLink></li>
                                  <li><NavLink>Catagory 3</NavLink></li>
                                  <li><NavLink>Catagory 4</NavLink></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li><NavLink>About Us</NavLink></li>
                          <li className="has-mega"><NavLink>Shop <i className="far fa-angle-down" /></NavLink>
                            <div className="mega-menu">
                              <div className="container container-mega">
                                <ul>
                                  <li>
                                    <ul>
                                      <li className="title"><NavLink>SHOP LAYOUT</NavLink></li>
                                      <li><NavLink>Pagination</NavLink></li>
                                      <li><NavLink>Ajax Load More</NavLink></li>
                                      <li><NavLink>Infinite Scroll</NavLink></li>
                                      <li><NavLink>Sidebar Right</NavLink></li>
                                      <li><NavLink>Sidebar Left</NavLink></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <ul>
                                      <li className="title"><NavLink>SHOP PAGES</NavLink></li>
                                      <li><NavLink>List View</NavLink></li>
                                      <li><NavLink>Small Products</NavLink></li>
                                      <li><NavLink>Large Products</NavLink></li>
                                      <li><NavLink>Shop — 3 Items</NavLink></li>
                                      <li><NavLink>Shop — 4 Items</NavLink></li>
                                      <li><NavLink>Shop — 5 Items</NavLink></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <ul>
                                      <li className="title"><NavLink>PRODUCT LAYOUT</NavLink></li>
                                      <li><NavLink>Description Sticky</NavLink></li>
                                      <li><NavLink>Product Carousel</NavLink></li>
                                      <li><NavLink>Gallery Modern</NavLink></li>
                                      <li><NavLink>Thumbnail Left</NavLink></li>
                                      <li><NavLink>Thumbnail Right</NavLink></li>
                                      <li><NavLink>Thumbnail Botttom</NavLink></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <ul>
                                      <li className="title"><NavLink>Basketball</NavLink></li>
                                      <li><NavLink>East Hampton Fleece</NavLink></li>
                                      <li><NavLink>Faxon Canvas Low</NavLink></li>
                                      <li><NavLink>Habitasse Dictumst</NavLink></li>
                                      <li><NavLink>Kaoreet Lobortis</NavLink></li>
                                      <li><NavLink>NikeCourt Zoom</NavLink></li>
                                      <li><NavLink>NikeCourts Air Zoom</NavLink></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <ul>
                                      <li className="title"><NavLink>Basketball</NavLink></li>
                                      <li><NavLink>East Hampton Fleece</NavLink></li>
                                      <li><NavLink>Faxon Canvas Low</NavLink></li>
                                      <li><NavLink>Habitasse Dictumst</NavLink></li>
                                      <li><NavLink>Kaoreet Lobortis</NavLink></li>
                                      <li><NavLink>NikeCourt Zoom</NavLink></li>
                                      <li><NavLink>NikeCourts Air Zoom</NavLink></li>
                                    </ul>
                                  </li>
                                  <li className="mega-image hover-effect" style={{ backgroundImage: 'url(assets/img/bg/menu-item.jpg)' }}>
                                    <ul>
                                      <li><NavLink>
                                        <h4>Top Cameras <br /> Bestseller Products</h4>
                                        <h5>4K</h5>
                                        <h6>Sale Up To <span>60% Off</span></h6>
                                      </NavLink></li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                              <div className="offer mt-40">
                                <p><b>30% OFF</b> the shipping of your first order with the code: <b>DUKA-SALE30</b></p>
                              </div>
                            </div>
                          </li>
                          <li><NavLink href="blog.html">Blog <i className="far fa-angle-down" /></NavLink>
                            <ul className="submenu">
                              <li><NavLink href="blog.html">Blog</NavLink></li>
                              <li><NavLink href="blog-details.html">Blog Details</NavLink></li>
                            </ul>
                          </li>
                          <li>
                            <NavLink>Pages <i className="far fa-angle-down" /></NavLink>
                            <ul className="submenu">
                              <li><NavLink>My Account</NavLink></li>
                              <li><NavLink>Product Details</NavLink></li>
                              <li><NavLink>FAQs pages</NavLink></li>
                              <li><NavLink>Cart</NavLink></li>
                              <li><NavLink>Wishlist</NavLink></li>
                              <li><NavLink>Checkout</NavLink></li>
                              <li><NavLink>Contact Us</NavLink></li>
                              <li><NavLink href="404.html">404 Error</NavLink></li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-9">
                  <div className="shopeing-text text-sm-end">
                    <p>Spend $120 more and get free shipping!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header-end */}

      </div>


    </>
  );
};

export default Header;
