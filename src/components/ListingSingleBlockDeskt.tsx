import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ListingSingleBlockDeskt.css";

export type ListingSingleBlockDesktType = {
  letsRebuildNepal1?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
};

const ListingSingleBlockDeskt: FunctionComponent<
  ListingSingleBlockDesktType
> = ({ letsRebuildNepal1, propTop, propBottom }) => {
  const pngtreetechnologySenseChipStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div className="listing-single-block-deskt4">
      <div className="cards-group">
        <div className="cards2">
          <div className="india-card1">
            <div className="india-card-item" />
            <img
              className="lets-rebuild-nepal-14"
              alt=""
              src={letsRebuildNepal1}
            />
            <img
              className="pngtreetechnology-sense-chip-1"
              loading="lazy"
              alt=""
              src="/pngtreetechnology-sense-chip-5403566-11@2x.png"
              style={pngtreetechnologySenseChipStyle}
            />
          </div>
        </div>
        <button className="tag4">
          <img className="tag-icon49" alt="" src="/tag-icon4.svg" />
          <b className="tag-label4">5G</b>
        </button>
      </div>
      <div className="nepal19">Nepal</div>
      <h3 className="durbarcomm1">Durbarcomm</h3>
      <div className="netnook-offers-a1">
        {" "}
        NetNook offers a comprehensive solution to meet your internet needs,
        whether you're a casual browser or a heavy data user. Discover the
        features and benefits that make this package an essential addition to
        your digital arsenal.
      </div>
      <div className="div10">$3.37</div>
      <button className="button-wrapper3">
        <div className="button46">
          <img className="tag-icon50" alt="" src="/tag-icon3.svg" />
          <div className="button-wrapper4">
            <div className="button47">Add to Cart</div>
          </div>
          <img className="tag-icon51" alt="" src="/tag-icon3.svg" />
        </div>
      </button>
    </div>
  );
};

export default ListingSingleBlockDeskt;
