import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <>
        {/* cta-area-start */}
<section className="cta-area d-ldark-bg pt-55 pb-10 text-decoration">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="cta-item cta-item-d mb-30">
          <h5 className="cta-title">Follow Us</h5>
          <p>We make consolidating, marketing and tracking your social media website easy.</p>
          <div className="cta-social">
            <div className="social-icon">
              <NavLink className="facebook"><i className="fab fa-facebook-f" /></NavLink>
              <NavLink className="twitter"><i className="fab fa-twitter" /></NavLink>
              <NavLink className="youtube"><i className="fab fa-youtube" /></NavLink>
              <NavLink className="linkedin"><i className="fab fa-linkedin-in" /></NavLink>
              <NavLink className="rss"><i className="fas fa-rss" /></NavLink>
              <NavLink className="dribbble"><i className="fab fa-dribbble" /></NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="cta-item mb-30">
          <h5 className="cta-title">Sign Up To Newsletter</h5>
          <p>Join 60.000+ subscribers and get a new discount coupon on every Saturday.</p>
          <div className="subscribe__form">
            <form action="#">
              <input type="email" placeholder="Enter your email here..." />
              <button>subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="cta-item mb-30">
          <h5 className="cta-title">Download App</h5>
          <p>DukaMarket App is now available on App Store &amp; Google Play. Get it now.</p>
          <div className="cta-apps">
            <div className="apps-store">
              <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/brand/app_ios.png" alt /></NavLink>
              <NavLink><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/brand/app_android.png" alt /></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* cta-area-end */}

            {/* footer-start */}
            <footer>
                <div className="fotter-area d-dark-bg">
                    <div className="footer__top pt-80 pb-15">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-4 order-last-md">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                            <div className="footer__widget">
                                                <div className="footer__widget-title">
                                                    <h4>Customer Care</h4>
                                                </div>
                                                <div className="footer__widget-content">
                                                    <div className="footer__link">
                                                        <ul>
                                                            <li><NavLink>New Customers</NavLink></li>
                                                            <li><NavLink>How to use Account</NavLink></li>
                                                            <li><NavLink>Placing an Order</NavLink></li>
                                                            <li><NavLink>Payment Methods</NavLink></li>
                                                            <li><NavLink>Delivery &amp; Dispatch</NavLink></li>
                                                            <li><NavLink>Problems with Order</NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                            <div className="footer__widget">
                                                <div className="footer__widget-title">
                                                    <h4>Customer Service</h4>
                                                </div>
                                                <div className="footer__widget-content">
                                                    <div className="footer__link">
                                                        <ul>
                                                            <li><NavLink>Help Center</NavLink></li>
                                                            <li><NavLink>Contact Us</NavLink></li>
                                                            <li><NavLink>Report Abuse</NavLink></li>
                                                            <li><NavLink>Submit a Dispute</NavLink></li>
                                                            <li><NavLink>Policies &amp; Rules</NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-8 order-first-md">
                                    <div className="footer__top-left">
                                        <div className="row">
                                            <div className="col-xl-7 col-lg-6 col-md-6 col-sm-6">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                        <div className="footer__widget">
                                                            <div className="footer__widget-title">
                                                                <h4>My Account</h4>
                                                            </div>
                                                            <div className="footer__widget-content">
                                                                <div className="footer__link">
                                                                    <ul>
                                                                        <li><NavLink>Product Support</NavLink></li>
                                                                        <li><NavLink href="checkout.html">Checkout</NavLink></li>
                                                                        <li><NavLink href="cart.html">Shopping Cart</NavLink></li>
                                                                        <li><NavLink href="wishlist.html">Wishlist</NavLink></li>
                                                                        <li><NavLink>Terms &amp; Conditions &amp;</NavLink>
                                                                        </li>
                                                                        <li><NavLink>Redeem Voucher</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                        <div className="footer__widget">
                                                            <div className="footer__widget-title">
                                                                <h4>Quick Links</h4>
                                                            </div>
                                                            <div className="footer__widget-content">
                                                                <div className="footer__link">
                                                                    <ul>
                                                                        <li><NavLink href="contact.html">Store Location</NavLink></li>
                                                                        <li><NavLink href="my-account.html">My account</NavLink></li>
                                                                        <li><NavLink href="contact.html">Order Tracking</NavLink></li>
                                                                        <li><NavLink>FAQs</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                                                <div className="footer__widget">
                                                    <div className="footer__widget-title mb-20">
                                                        <h4>About The Store</h4>
                                                    </div>
                                                    <div className="footer__widget-content">
                                                        <p className="footer-text mb-35">Our mission statement is to provide the
                                                            absolute best customer experience available in the Electronic
                                                            industry without exception.</p>
                                                        <div className="footer__hotline d-flex align-items-center mb-10">
                                                            <div className="icon mr-15">
                                                                <i className="fal fa-headset" />
                                                            </div>
                                                            <div className="text">
                                                                <h4>Got Question? Call us 24/7!</h4>
                                                                <span><NavLink href="tel:100-123-456-7890">(+100) 123 456
                                                                    7890</NavLink></span>
                                                            </div>
                                                        </div>
                                                        <div className="footer__info">
                                                            <ul>
                                                                <li>
                                                                    <span>Add: <NavLink target="_blank" href="https://goo.gl/maps/c82DDZ8ALvL878Bv8">Walls
                                                                        Street 68, Mahattan, New York, USA</NavLink></span>
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
                    </div>
                    <div className="footer__bottom">
                        <div className="container">
                            <div className="footer__bottom-content pt-55 pb-45">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="footer__links text-center mb-25">
                                            <p>
                                                <NavLink>Online Shopping</NavLink>
                                                <NavLink>Promotions</NavLink>
                                                <NavLink>My Orders</NavLink>
                                                <NavLink>Help</NavLink>
                                                <NavLink>Customer Service</NavLink>
                                                <NavLink>Support</NavLink>
                                                <NavLink>Most Populars</NavLink>
                                                <NavLink>New Arrivals</NavLink>
                                                <NavLink>Special Products </NavLink>
                                                <NavLink>Manufacturers</NavLink>
                                                <br />
                                                <NavLink>Garden Equipments</NavLink>
                                                <NavLink>Powers And Hand Tools </NavLink>
                                                <NavLink>Utensil &amp; Gadget </NavLink>
                                                <NavLink>Printers</NavLink>
                                                <NavLink>Projectors</NavLink>
                                                <NavLink>Scanners</NavLink>
                                                <NavLink>Store</NavLink>
                                                <NavLink>Business</NavLink>
                                            </p>
                                        </div>
                                        <div className="payment-image text-center mb-25">
                                            <NavLink href="contact.html"><img src="https://wphix.com/template/dukamarket/dukamarket/assets/img/payment/payment.png" alt /></NavLink>
                                        </div>
                                        <div className="copy-right-area text-center">
                                            <p>Copyright © <span>DukaMarket.</span> All Rights Reserved. Powered by <NavLink><span className="main-color">Theme_Pure.</span></NavLink></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer-end */}

        </>
    )
}
export default Footer;