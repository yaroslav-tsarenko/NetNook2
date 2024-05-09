import { FunctionComponent } from "react";
import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent14 from "../components/FrameComponent14";
import CheckoutDetails from "../components/CheckoutDetails";
import FrameComponent9 from "../components/FrameComponent9";
import "./Cart.css";

const Cart: FunctionComponent = () => {
  return (
    <div className="cart1">
      <section className="branch-processor">
        <header className="navigation4">
          <div className="logo18">
            <img
              className="logologo-symbol-icon11"
              loading="lazy"
              alt=""
              src="/logologo-symbol.svg"
            />
            <div className="loop-controller1">
              <b className="netnook15">NetNook</b>
            </div>
          </div>
          <div className="else-statement">
            <div className="partner-with-us4">Partner with Us</div>
            <div className="about-us12">About Us</div>
            <div className="blog9">Blog</div>
            <div className="community4">Community</div>
          </div>
          <div className="variable-holder1">
            <div className="profile-parent">
              <img
                className="profile-icon1"
                loading="lazy"
                alt=""
                src="/profile.svg"
              />
              <div className="sign-in1">Sign in</div>
            </div>
            <div className="fluentcart-20-regular-parent">
              <img
                className="fluentcart-20-regular-icon1"
                loading="lazy"
                alt=""
                src="/fluentcart20regular.svg"
              />
              <div className="cart2">Cart</div>
            </div>
          </div>
        </header>
        <FrameComponent16
          yourCart="Your Cart"
          cart="Cart"
          cartDetails="Cart  Details"
        />
      </section>
      <section className="call-stack">
        <div className="breakpoint">
          <FrameComponent14 />
          <CheckoutDetails />
        </div>
      </section>
      <section className="footer7">
        <div className="logo-parent7">
          <div className="logo19">
            <img className="vector-icon7" alt="" src="/vector-1.svg" />
            <div className="giftglyph7">GiftGlyph</div>
          </div>
          <div className="logo-parent8">
            <div className="logo20">
              <img
                className="logologo-symbol-icon12"
                alt=""
                src="/logologo-symbol-2.svg"
              />
              <div className="netnook-wrapper10">
                <b className="netnook16">NetNook</b>
              </div>
            </div>
            <FrameComponent9
              social="/social2@2x.png"
              propLineHeight="22px"
              propAlignSelf="stretch"
              propFlex="1"
              propLineHeight1="22px"
              propWidth="unset"
              propDisplay="unset"
            />
          </div>
        </div>
        <footer className="error-handler-wrapper">
          <div className="error-handler">
            <div className="information-parent1">
              <div className="information8">
                <div className="information9">Learn</div>
                <div className="faq4">Our Story</div>
                <div className="blog10">Sourcing</div>
                <div className="support8">Blog</div>
                <div className="support9">News Room</div>
              </div>
              <div className="company16">
                <div className="company17">Partner with us</div>
                <div className="about-us13">NetNook Partners Platform</div>
                <div className="careers8">Affiliate Partners</div>
                <div className="contact-us9">Distribution Partners</div>
                <div className="hutteio20">API Partners</div>
                <div className="hutteio21">NetNook for Corporation</div>
              </div>
              <div className="company18">
                <div className="company19">Support</div>
                <div className="about-us14">Contact</div>
                <div className="careers9">FAQ</div>
                <div className="contact-us10">Careers</div>
                <div className="hutteio22">COVID-19 Safety Plan</div>
                <div className="hutteio23">Privacy Policy</div>
                <div className="hutteio24">Terms of Service</div>
              </div>
            </div>
            <div className="frame-parent25">
              <div className="terms-of-service-parent1">
                <div className="terms-of-service4">{`Terms of Service `}</div>
                <div className="line-wrapper4">
                  <div className="frame-child6" />
                </div>
                <div className="privacy-policy7">Privacy Policy</div>
                <div className="line-wrapper5">
                  <div className="frame-child7" />
                </div>
                <div className="cookies4">Cookies</div>
              </div>
              <div className="payment-icons-parent">
                <img
                  className="payment-icons28"
                  alt=""
                  src="/payment-icons@2x.png"
                />
                <img
                  className="payment-icons29"
                  alt=""
                  src="/payment-icons-1.svg"
                />
                <img
                  className="payment-icons30"
                  alt=""
                  src="/payment-icons-22@2x.png"
                />
                <img
                  className="payment-icons31"
                  alt=""
                  src="/payment-icons-32@2x.png"
                />
                <img
                  className="payment-icons32"
                  alt=""
                  src="/payment-icons-4.svg"
                />
                <img
                  className="payment-icons33"
                  alt=""
                  src="/payment-icons-5.svg"
                />
                <img
                  className="payment-icons34"
                  alt=""
                  src="/payment-icons-62@2x.png"
                />
              </div>
              <div className="copyright-group">
                <img className="copyright-icon4" alt="" src="/copyright.svg" />
                <div className="netnook-wrapper11">
                  <div className="netnook17">2024 NetNook</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Cart;
