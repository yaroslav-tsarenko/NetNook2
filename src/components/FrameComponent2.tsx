import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent2.css";

export type FrameComponent2Type = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propBottom?: CSSProperties["bottom"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  propAlignSelf,
  propWidth,
  propWidth1,
  propBottom,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const nepalCardStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      bottom: propBottom,
    };
  }, [propWidth1, propBottom]);

  return (
    <div className="nepal-card-parent" style={frameDivStyle}>
      <div className="nepal-card" style={nepalCardStyle}>
        <div className="nepal-card-child" />
        <img
          className="lets-rebuild-nepal-1"
          alt=""
          src="/lets-rebuild-nepal-1@2x.png"
        />
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      </div>
      <button className="tag">
        <div className="tag-icon-wrapper">
          <img className="tag-icon32" alt="" src="/tag-icon4.svg" />
        </div>
        <div className="tag-label">crypto</div>
      </button>
    </div>
  );
};

export default FrameComponent2;
