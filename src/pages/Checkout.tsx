import { FunctionComponent } from "react";
import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent18 from "../components/FrameComponent18";
import FrameComponent17 from "../components/FrameComponent17";
import FrameComponent9 from "../components/FrameComponent9";
import "./Checkout.css";

const Checkout: FunctionComponent = () => {
  return (
    <div className="checkout">
      <section className="checkout-container">
        <header className="navigation5">
          <div className="logo21">
            <img
              className="logologo-symbol-icon13"
              loading="lazy"
              alt=""
              src="/logologo-symbol.svg"
            />
            <div className="f-a-q-list">
              <b className="netnook18">NetNook</b>
            </div>
          </div>
          <div className="company-data">
            <div className="partner-with-us5">Partner with Us</div>
            <div className="about-us15">About Us</div>
            <div className="blog11">Blog</div>
            <div className="community5">Community</div>
          </div>
          <div className="frame-parent26">
            <div className="profile-group">
              <img
                className="profile-icon2"
                loading="lazy"
                alt=""
                src="/profile.svg"
              />
              <div className="sign-in2">Sign in</div>
            </div>
            <div className="fluentcart-20-regular-group">
              <img
                className="fluentcart-20-regular-icon2"
                loading="lazy"
                alt=""
                src="/fluentcart20regular.svg"
              />
              <div className="cart3">Cart</div>
            </div>
          </div>
        </header>
        <FrameComponent16
          yourCart="Your Cart"
          cart="Card"
          cartDetails="Card Checkout"
          propWidth="200px"
          propAlignSelf="stretch"
          propMinWidth="106px"
          frameDivAlignSelf="stretch"
          frameDivFlex="unset"
          statementListWidth="unset"
          buttonAlignSelf="unset"
          cartMinWidth="34px"
          cartFlex="unset"
          cartDetailsFlex="unset"
        />
      </section>
      <section className="cart-content-container">
        <div className="checkout-button">
          <FrameComponent18 />
          <FrameComponent17 />
        </div>
      </section>
      <section className="footer8">
        <div className="logo-parent9">
          <div className="logo22">
            <img className="vector-icon8" alt="" src="/vector-1.svg" />
            <div className="giftglyph8">GiftGlyph</div>
          </div>
          <div className="logo-parent10">
            <div className="logo23">
              <img
                className="logologo-symbol-icon14"
                alt=""
                src="/logologo-symbol-2.svg"
              />
              <div className="netnook-wrapper12">
                <b className="netnook19">NetNook</b>
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
        <footer className="footer-inner2">
          <div className="frame-parent27">
            <div className="information-parent2">
              <div className="information10">
                <div className="information11">Learn</div>
                <div className="faq5">Our Story</div>
                <div className="blog12">Sourcing</div>
                <div className="support10">Blog</div>
                <div className="support11">News Room</div>
              </div>
              <div className="company20">
                <div className="company21">Partner with us</div>
                <div className="about-us16">NetNook Partners Platform</div>
                <div className="careers10">Affiliate Partners</div>
                <div className="contact-us11">Distribution Partners</div>
                <div className="hutteio25">API Partners</div>
                <div className="hutteio26">NetNook for Corporation</div>
              </div>
              <div className="company22">
                <div className="company23">Support</div>
                <div className="about-us17">Contact</div>
                <div className="careers11">FAQ</div>
                <div className="contact-us12">Careers</div>
                <div className="hutteio27">COVID-19 Safety Plan</div>
                <div className="hutteio28">Privacy Policy</div>
                <div className="hutteio29">Terms of Service</div>
              </div>
            </div>
            <div className="frame-parent28">
              <div className="terms-of-service-parent2">
                <div className="terms-of-service5">{`Terms of Service `}</div>
                <div className="line-wrapper6">
                  <div className="frame-child8" />
                </div>
                <div className="privacy-policy8">Privacy Policy</div>
                <div className="line-wrapper7">
                  <div className="frame-child9" />
                </div>
                <div className="cookies5">Cookies</div>
              </div>
              <div className="payment-icons-group">
                <img
                  className="payment-icons35"
                  alt=""
                  src="/payment-icons@2x.png"
                />
                <img
                  className="payment-icons36"
                  alt=""
                  src="/payment-icons-1.svg"
                />
                <img
                  className="payment-icons37"
                  alt=""
                  src="/payment-icons-22@2x.png"
                />
                <img
                  className="payment-icons38"
                  alt=""
                  src="/payment-icons-32@2x.png"
                />
                <img
                  className="payment-icons39"
                  alt=""
                  src="/payment-icons-4.svg"
                />
                <img
                  className="payment-icons40"
                  alt=""
                  src="/payment-icons-5.svg"
                />
                <img
                  className="payment-icons41"
                  alt=""
                  src="/payment-icons-62@2x.png"
                />
              </div>
              <div className="copyright-container">
                <img className="copyright-icon5" alt="" src="/copyright.svg" />
                <div className="netnook-wrapper13">
                  <div className="netnook20">2024 NetNook</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Checkout;
