import { FunctionComponent } from "react";
import Navigation1 from "./Navigation1";
import "./FrameComponent20.css";

const FrameComponent20: FunctionComponent = () => {
  return (
    <section className="navigation-parent">
      <Navigation1 />
      <div className="frame-parent64">
        <div className="button-wrapper8">
          <div className="button56">
            <div className="arrow-left-container">
              <img
                className="arrow-left-icon1"
                loading="lazy"
                alt=""
                src="/arrowleft.svg"
              />
            </div>
            <div className="back1">Back</div>
          </div>
        </div>
        <h1 className="your-cart1">Your Cart</h1>
        <div className="button-wrapper9">
          <div className="button57">
            <div className="card">Card</div>
            <div className="arrow-right-wrapper">
              <img
                className="arrow-right-icon1"
                loading="lazy"
                alt=""
                src="/arrowright.svg"
              />
            </div>
            <div className="card-details">Card Details</div>
            <div className="arrow-right-container">
              <img className="arrow-right-icon2" alt="" src="/arrowright.svg" />
            </div>
            <div className="card-checkout">Card Checkout</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent20;
