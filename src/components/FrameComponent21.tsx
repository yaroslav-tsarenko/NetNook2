import { FunctionComponent } from "react";
import "./FrameComponent21.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className="frame-parent72">
      <div className="get-in-touch-with-us-parent">
        <h1 className="get-in-touch">Get In Touch With Us</h1>
        <div className="were-here-to">
          We're here to assist you on every step of your Topup journey. If you
          have questions, need technical support, or want to explore partnership
          opportunities, don't hesitate to get in touch with our dedicated team.
        </div>
      </div>
      <div className="frame-parent73">
        <div className="input-parent">
          <div className="input">
            <input
              className="enter-your-email"
              placeholder="First Name"
              type="text"
            />
            <img
              className="arrow-narrow-right-icon"
              alt=""
              src="/arrownarrowright.svg"
            />
          </div>
          <div className="input1">
            <input
              className="enter-your-email1"
              placeholder="Last Name"
              type="text"
            />
            <img
              className="arrow-narrow-right-icon1"
              alt=""
              src="/arrownarrowright.svg"
            />
          </div>
        </div>
        <div className="input2">
          <input
            className="enter-your-email2"
            placeholder="Enter your email"
            type="text"
          />
          <img
            className="arrow-narrow-right-icon2"
            alt=""
            src="/arrownarrowright1.svg"
          />
        </div>
        <div className="input3">
          <input
            className="enter-your-email3"
            placeholder="Phone"
            type="text"
          />
          <img
            className="arrow-narrow-right-icon3"
            alt=""
            src="/arrownarrowright.svg"
          />
        </div>
        <textarea
          className="input4"
          placeholder="Message"
          rows={10}
          cols={36}
        />
        <button className="button60">
          <img className="tag-icon59" alt="" src="/tag-icon2.svg" />
          <div className="button61">Send Message</div>
          <img className="tag-icon60" alt="" src="/tag-icon2.svg" />
        </button>
      </div>
    </div>
  );
};

export default FrameComponent2;
