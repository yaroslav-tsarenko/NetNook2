import { FunctionComponent } from "react";
import FrameComponent20 from "../components/FrameComponent20";
import FrameComponent19 from "../components/FrameComponent19";
import Footer from "../components/Footer";
import "./BuyCredits.css";

const BuyCredits: FunctionComponent = () => {
  return (
    <div className="buy-credits">
      <FrameComponent20 />
      <FrameComponent19 />
      <Footer />
    </div>
  );
};

export default BuyCredits;
