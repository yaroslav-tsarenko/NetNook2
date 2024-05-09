import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent16.css";

export type FrameComponent16Type = {
  yourCart?: string;
  cart?: string;
  cartDetails?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivFlex?: CSSProperties["flex"];
  statementListWidth?: CSSProperties["width"];
  buttonAlignSelf?: CSSProperties["alignSelf"];
  cartMinWidth?: CSSProperties["minWidth"];
  cartFlex?: CSSProperties["flex"];
  cartDetailsFlex?: CSSProperties["flex"];
};

const FrameComponent16: FunctionComponent<FrameComponent16Type> = ({
  yourCart,
  cart,
  cartDetails,
  propWidth,
  propAlignSelf,
  propMinWidth,
  frameDivAlignSelf,
  frameDivFlex,
  statementListWidth,
  buttonAlignSelf,
  cartMinWidth,
  cartFlex,
  cartDetailsFlex,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const cartDetailsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      flex: cartDetailsFlex,
    };
  }, [propMinWidth, cartDetailsFlex]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      flex: frameDivFlex,
    };
  }, [frameDivAlignSelf, frameDivFlex]);

  const statementListStyle: CSSProperties = useMemo(() => {
    return {
      width: statementListWidth,
    };
  }, [statementListWidth]);

  const button1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: buttonAlignSelf,
    };
  }, [buttonAlignSelf]);

  const cartStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: cartMinWidth,
      flex: cartFlex,
    };
  }, [cartMinWidth, cartFlex]);

  return (
    <div className="frame-parent57" style={frameDiv4Style}>
      <div className="button-wrapper7" style={frameDiv3Style}>
        <div className="button50" style={buttonStyle}>
          <div className="arrow-left-wrapper">
            <img
              className="arrow-left-icon"
              loading="lazy"
              alt=""
              src="/arrowleft.svg"
            />
          </div>
          <div className="back">Back</div>
        </div>
      </div>
      <h1 className="your-cart">{yourCart}</h1>
      <div className="statement-list" style={statementListStyle}>
        <div className="button51" style={button1Style}>
          <div className="cart7" style={cartStyle}>
            {cart}
          </div>
          <div className="function-definition">
            <img
              className="arrow-right-icon"
              loading="lazy"
              alt=""
              src="/arrowright.svg"
            />
          </div>
          <div className="cart-details" style={cartDetailsStyle}>
            {cartDetails}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent16;
