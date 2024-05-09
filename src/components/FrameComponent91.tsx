import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent91.css";

export type FrameComponent9Type = {
  social?: string;

  /** Style props */
  propLineHeight?: CSSProperties["lineHeight"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propLineHeight1?: CSSProperties["lineHeight"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  social,
  propLineHeight,
  propAlignSelf,
  propFlex,
  propLineHeight1,
  propWidth,
  propDisplay,
}) => {
  const beTheFirstStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const emailAddressStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      lineHeight: propLineHeight1,
      width: propWidth,
      display: propDisplay,
    };
  }, [propFlex, propLineHeight1, propWidth, propDisplay]);

  return (
    <div className="frame-parent52">
      <div className="stay-in-touch-group">
        <h1 className="stay-in-touch1">Stay in Touch</h1>
        <div className="be-the-first1" style={beTheFirstStyle}>
          Be the first to recieve special offers
        </div>
      </div>
      <div className="email-address-group" style={frameDiv1Style}>
        <div className="email-address1" style={emailAddressStyle}>
          Email Address
        </div>
        <img
          className="line-arrow-right-icon1"
          alt=""
          src="/line-arrowright.svg"
        />
      </div>
      <img className="social-icon1" loading="lazy" alt="" src={social} />
    </div>
  );
};

export default FrameComponent9;
