import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import "./ImageTexts.css";

const ImageTexts: FunctionComponent = () => {
  return (
    <section className="image-texts2">
      <div className="image-texts-inner1">
        <div className="shop-our-best-sellers-parent">
          <h1 className="shop-our-best">Shop Our Best Sellers</h1>
          <div className="whether-youre-looking">
            Whether you're looking for flexibility, value, or heavy usage
            options, our best-selling data packs offer something for everyone.
          </div>
        </div>
      </div>
      <div className="rectangle-parent1">
        <div className="frame-child11" />
        <div className="listing-single-block-deskt-group">
          <div className="listing-single-block-deskt">
            <div className="nepal-card-group">
              <div className="nepal-card1">
                <div className="nepal-card-item" />
                <img
                  className="lets-rebuild-nepal-11"
                  alt=""
                  src="/lets-rebuild-nepal-1@2x.png"
                />
                <img
                  className="image-1-icon1"
                  loading="lazy"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
              <button className="tag1">
                <img className="tag-icon33" alt="" src="/tag-icon4.svg" />
                <div className="tag-label1">5GB</div>
              </button>
            </div>
            <FrameComponent3 />
          </div>
          <div className="listing-single-block-deskt1">
            <FrameComponent2 />
            <FrameComponent3 />
          </div>
          <div className="listing-single-block-deskt2">
            <FrameComponent2
              propAlignSelf="unset"
              propWidth="363px"
              propWidth1="402px"
              propBottom="0px"
            />
            <div className="gb-group">
              <div className="gb11">5GB</div>
              <div className="div6">$3.37</div>
              <div className="button-frame">
                <div className="button32">
                  <img className="tag-icon34" alt="" src="/tag-icon3.svg" />
                  <div className="button33">Add to Cart</div>
                  <img className="tag-icon35" alt="" src="/tag-icon3.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTexts;
