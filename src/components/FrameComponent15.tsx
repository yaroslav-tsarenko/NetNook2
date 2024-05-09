import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent15.css";

export type FrameComponent15Type = {
  /** Style props */
  propBorderTop?: CSSProperties["borderTop"];
};

const FrameComponent15: FunctionComponent<FrameComponent15Type> = ({
  propBorderTop,
}) => {
  const lineDivStyle: CSSProperties = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  return (
    <div className="line-parent">
      <div className="frame-child17" style={lineDivStyle} />
      <button className="button52">
        <img className="tag-icon55" alt="" src="/tag-icon2.svg" />
        <div className="button53">Checkout</div>
        <img className="tag-icon56" alt="" src="/tag-icon2.svg" />
      </button>
    </div>
  );
};

export default FrameComponent15;
