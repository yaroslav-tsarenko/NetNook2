import { FunctionComponent } from "react";
import FunctionSplitter from "../components/FunctionSplitter";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent8 from "../components/FrameComponent8";
import "./HomePage1.css";

const HomePage1: FunctionComponent = () => {
  return (
    <div className="home-page1">
      <div className="ticker">
        <div className="get-100-off">
          Get $100 off on purchases over $30. Add Voucher
        </div>
      </div>
      <header className="navigation">
        <div className="logo">
          <img
            className="logologo-symbol-icon"
            loading="lazy"
            alt=""
            src="/logologo-symbol.svg"
          />
          <div className="loop-controller">
            <b className="netnook">NetNook</b>
          </div>
        </div>
        <div className="data-filter">
          <div className="partner-with-us">Partner with Us</div>
          <div className="about-us">About Us</div>
          <div className="blog">Blog</div>
          <div className="community">Community</div>
        </div>
        <FunctionSplitter />
      </header>
      <FrameComponent9 />
      <FrameComponent10 />
      <FrameComponent1
        smartphone1="/smartphone-1@2x.png"
        location1="/location-11@2x.png"
        qrCode11="/qrcode-1-11@2x.png"
        checked11="/checked-1-11@2x.png"
      />
      <FrameComponent11 />
      <section className="footer">
        <div className="logo-parent">
          <div className="logo1">
            <img className="vector-icon" alt="" src="/vector-1.svg" />
            <div className="giftglyph">GiftGlyph</div>
          </div>
          <div className="logo-group">
            <div className="logo2">
              <img
                className="logologo-symbol-icon1"
                alt=""
                src="/logologo-symbol-2.svg"
              />
              <div className="netnook-wrapper">
                <b className="netnook1">NetNook</b>
              </div>
            </div>
            <FrameComponent9 social="/social1@2x.png" />
          </div>
        </div>
        <FrameComponent8
          paymentIcons="/payment-icons@2x.png"
          paymentIcons2="/payment-icons-21@2x.png"
          paymentIcons3="/payment-icons-31@2x.png"
          paymentIcons6="/payment-icons-61@2x.png"
        />
      </section>
    </div>
  );
};

export default HomePage1;
