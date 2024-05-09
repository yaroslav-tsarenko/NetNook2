import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";
import "./InnerBlog1.css";

const InnerBlog: FunctionComponent = () => {
  return (
    <div className="inner-blog1">
      <Navigation1 />
      <FrameComponent3 />
      <section className="inner-blog-inner">
        <FrameComponent2 />
      </section>
      <Footer />
    </div>
  );
};

export default InnerBlog;
