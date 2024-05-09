import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Logo.css";

export type LogoType = {
  logoLogoSymbol?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
};

const Logo: FunctionComponent<LogoType> = ({ logoLogoSymbol, propColor }) => {
  const netNookStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="logo24">
      <img
        className="logologo-symbol-icon15"
        loading="lazy"
        alt=""
        src={logoLogoSymbol}
      />
      <div className="netnook-wrapper14">
        <b className="netnook21" style={netNookStyle}>
          NetNook
        </b>
      </div>
    </div>
  );
};

export default Logo;
