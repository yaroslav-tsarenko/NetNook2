import { FunctionComponent } from "react";
import "./FunctionSplitter.css";

const FunctionSplitter: FunctionComponent = () => {
  return (
    <div className="function-splitter">
      <div className="data-comparer">
        <img
          className="profile-icon4"
          loading="lazy"
          alt=""
          src="/profile.svg"
        />
        <div className="sign-in4">Sign in</div>
      </div>
      <div className="data-comparer1">
        <img
          className="fluentcart-20-regular-icon4"
          loading="lazy"
          alt=""
          src="/fluentcart20regular.svg"
        />
        <div className="cart5">Cart</div>
      </div>
    </div>
  );
};

export default FunctionSplitter;
