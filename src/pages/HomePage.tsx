import { FunctionComponent } from "react";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import ImageTexts from "../components/ImageTexts";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className="home-page">
      <FrameComponent7 />
      <section className="home-page-inner">
        <div className="frame-parent">
          <FrameComponent6 />
          <FrameComponent5 />
        </div>
      </section>
      <FrameComponent4 />
      <section className="image-texts">
        <img
          className="image-texts-child"
          loading="lazy"
          alt=""
          src="/rectangle-23@2x.png"
        />
        <div className="image-texts-inner">
          <div className="empowering-connectivity-for-ev-parent">
            <h1 className="empowering-connectivity-for">
              Empowering Connectivity for Every Need
            </h1>
            <div className="we-understand-the">
              We understand the importance of staying connected in today's
              digital age. That's why we offer a diverse range of data packages
              designed to cater to the unique needs of every individual and
              business. Whether you're a casual user browsing social media, a
              streaming enthusiast devouring the latest shows and movies, or a
              remote worker relying on a stable internet connection, we have the
              perfect solution for you.
            </div>
          </div>
        </div>
      </section>
      <ImageTexts />
      <FrameComponent1
        smartphone1="/smartphone-1@2x.png"
        location1="/location-1@2x.png"
        qrCode11="/qrcode-1-1@2x.png"
        checked11="/checked-1-1@2x.png"
      />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
