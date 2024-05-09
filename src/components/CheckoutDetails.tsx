import { FunctionComponent } from "react";
import "./CheckoutDetails.css";

const CheckoutDetails: FunctionComponent = () => {
  return (
    <div className="checkout-details">
      <input
        className="checkout-details-child"
        placeholder="Checkout Details"
        type="text"
      />
      <div className="checkout-details-inner">
        <div className="cart-subtotal-parent">
          <div className="cart-subtotal">Cart Subtotal</div>
          <div className="div25">$360.00</div>
        </div>
      </div>
      <div className="checkout-details-inner1">
        <div className="frame-parent61">
          <div className="shipping-handling-parent">
            <div className="shipping-handling">{`Shipping & Handling`}</div>
            <div className="other-taxes">Other Taxes</div>
          </div>
          <div className="parent6">
            <div className="div26">$0.00</div>
            <div className="div27">$0.00</div>
          </div>
        </div>
      </div>
      <div className="checkout-details-inner2">
        <div className="frame-child22" />
      </div>
      <div className="checkout-details-inner3">
        <div className="grand-total-parent">
          <b className="grand-total">Grand Total</b>
          <b className="b7">$360.00</b>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
