import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./DataPacks.css";

export type DataPacksType = {
  line1?: string;
  gB?: string;
  days?: string;
  uS450?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propMinWidth3?: CSSProperties["minWidth"];
};

const DataPacks: FunctionComponent<DataPacksType> = ({
  line1,
  gB,
  days,
  uS450,
  propWidth,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
}) => {
  const dataPacksStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const gBStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const daysStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const uS450Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className="data-packs9" style={dataPacksStyle}>
      <b className="nepal-ntc9">Nepal-NTC</b>
      <img className="data-packs-child4" alt="" src={line1} />
      <div className="frame-parent33">
        <div className="frame-parent34">
          <div className="global-parent6">
            <img className="global-icon9" alt="" src="/global.svg" />
            <div className="coverage9">Coverage</div>
          </div>
          <div className="tablermobiledata-parent5">
            <img
              className="tablermobiledata-icon9"
              loading="lazy"
              alt=""
              src="/tablermobiledata.svg"
            />
            <div className="data9">Data</div>
          </div>
          <div className="calendar-add-parent6">
            <img className="calendar-add-icon9" alt="" src="/calendaradd.svg" />
            <div className="validity9">Validity</div>
          </div>
          <div className="buy-crypto-parent5">
            <img className="buy-crypto-icon9" alt="" src="/buycrypto.svg" />
            <div className="price9">Price</div>
          </div>
        </div>
        <div className="nepal-parent5">
          <div className="nepal12">Nepal</div>
          <div className="gb9" style={gBStyle}>
            {gB}
          </div>
          <div className="days9" style={daysStyle}>
            {days}
          </div>
          <div className="us-4509" style={uS450Style}>
            {uS450}
          </div>
        </div>
      </div>
      <button className="button26">
        <img className="tag-icon26" alt="" src="/tag-icon2.svg" />
        <div className="button27">Buy Now</div>
        <img className="tag-icon27" alt="" src="/tag-icon2.svg" />
      </button>
    </div>
  );
};

export default DataPacks;
