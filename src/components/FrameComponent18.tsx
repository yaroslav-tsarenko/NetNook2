import { FunctionComponent } from "react";
import "./FrameComponent18.css";

const FrameComponent18: FunctionComponent = () => {
  return (
    <div className="header-title-container-parent">
      <div className="header-title-container">
        <h3 className="checkout1">Checkout</h3>
        <input className="header1" placeholder="Billing Details" type="text" />
        <div className="form-field-block">
          <div className="row-1">
            <div className="block-1">
              <input
                className="first-name"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="block-2">
              <input
                className="last-name"
                placeholder="Last Name"
                type="text"
              />
            </div>
          </div>
          <div className="row-2">
            <div className="block-11">
              <input
                className="company-name"
                placeholder="Company Name"
                type="text"
              />
            </div>
            <div className="block-21">
              <div className="country">Country</div>
              <img className="icon" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="row-3">
            <div className="block-12">
              <input
                className="street-address"
                placeholder="Street Address"
                type="text"
              />
            </div>
          </div>
          <div className="block-22">
            <input
              className="apartment-suite"
              placeholder="Apartment / Suite / Unit / etc. (Optional)"
              type="text"
            />
          </div>
          <div className="row-4">
            <div className="block-13">
              <input
                className="town-city"
                placeholder="Town / City"
                type="text"
              />
            </div>
          </div>
          <div className="block-23">
            <input
              className="email-address2"
              placeholder="Email Address"
              type="text"
            />
          </div>
          <div className="row-5">
            <div className="block-14">
              <input className="zip" placeholder="ZIP" type="text" />
            </div>
            <div className="block-24">
              <input className="phone" placeholder="Phone" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-details-parent">
        <div className="checkout-details1">
          <div className="company-boxes-container">
            <div className="header2">
              <b className="checkout-details2">Checkout Details</b>
            </div>
          </div>
          <div className="f-a-q-title-container">
            <div className="support-title-container">
              <div className="cart-subtotal1">Cart Subtotal</div>
              <div className="social-media-icon">$360.00</div>
            </div>
          </div>
          <div className="search-bar-icon">
            <div className="menu-option-title">
              <div className="checkout-progress-container">
                <div className="shipping-handling1">{`Shipping & Handling`}</div>
                <div className="other-taxes1">Other Taxes</div>
              </div>
              <div className="checkout-progress-container1">
                <div className="div28">$0.00</div>
                <div className="div29">$0.00</div>
              </div>
            </div>
          </div>
          <div className="figma-design-header">
            <div className="figma-design-header-child" />
          </div>
          <div className="f-a-q-title-container1">
            <div className="grand-total-group">
              <b className="grand-total1">Grand Total</b>
              <b className="b8">$360.00</b>
            </div>
          </div>
        </div>
        <div className="transfer-options">
          <input
            className="header3"
            placeholder="Transfer Options"
            type="text"
          />
          <div className="checkout-details3">
            <div className="logos-block">
              <div className="block-15">
                <button className="logo-block">
                  <img className="image-1-icon4" alt="" src="/image-1@2x.png" />
                </button>
                <div className="bank-transfer">
                  <p className="bank">Bank</p>
                  <p className="transfer">Transfer</p>
                </div>
              </div>
              <div className="block-25">
                <button className="logo-block1">
                  <img className="image-2-icon" alt="" src="/image-2@2x.png" />
                </button>
                <div className="google-pay">
                  <p className="google">Google</p>
                  <p className="pay">Pay</p>
                </div>
              </div>
              <div className="block-3">
                <button className="logo-block2">
                  <img className="image-3-icon" alt="" src="/image-3@2x.png" />
                </button>
                <div className="apple-pay">
                  <p className="apple">Apple</p>
                  <p className="pay1">Pay</p>
                </div>
              </div>
              <div className="block-4">
                <button className="logo-block3">
                  <img className="image-4-icon" alt="" src="/image-4@2x.png" />
                </button>
                <div className="paypal">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent18;
