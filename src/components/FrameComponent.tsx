import { FunctionComponent } from "react";
import Review from "./Review";
import "./FrameComponent.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className="home-page-child">
      <div className="review-parent">
        <Review quoteUp="/quoteup.svg" quoteUp1="/quoteup-1.svg" />
        <Review
          quoteUp="/quoteup-2.svg"
          quoteUp1="/quoteup-3.svg"
          propBackgroundColor="#fff"
          propColor="#262626"
          propColor1="#262626"
        />
        <Review
          quoteUp="/quoteup-2.svg"
          quoteUp1="/quoteup-3.svg"
          propBackgroundColor="#605f4b"
          propColor="#262626"
          propColor1="#262626"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
