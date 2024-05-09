import { FunctionComponent } from "react";
import Logo from "./Logo";
import "./FrameComponent7.css";

const FrameComponent7: FunctionComponent = () => {
  return (
    <section className="ticker-parent">
      <div className="ticker2">
        <div className="get-100-off2">
          Get $100 off on purchases over $30. Add Voucher
        </div>
      </div>
      <header className="navigation6">
        <Logo logoLogoSymbol="/logologo-symbol.svg" />
        <div className="partner-with-us-container">
          <div className="partner-with-us6">Partner with Us</div>
          <div className="about-us18">About Us</div>
          <div className="blog13">Blog</div>
          <div className="community6">Community</div>
        </div>
        <div className="frame-parent29">
          <div className="profile-container">
            <img
              className="profile-icon3"
              loading="lazy"
              alt=""
              src="/profile.svg"
            />
            <div className="sign-in3">Sign in</div>
          </div>
          <div className="fluentcart-20-regular-container">
            <img
              className="fluentcart-20-regular-icon3"
              loading="lazy"
              alt=""
              src="/fluentcart20regular.svg"
            />
            <div className="cart4">Cart</div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent7;
