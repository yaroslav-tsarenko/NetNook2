import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Review.css";

export type ReviewType = {
  quoteUp?: string;
  quoteUp1?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const Review: FunctionComponent<ReviewType> = ({
  quoteUp,
  quoteUp1,
  propBackgroundColor,
  propColor,
  propColor1,
}) => {
  const reviewStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const iveBeenUsingStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const vibekNStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className="review" style={reviewStyle}>
      <div className="quote-up-parent">
        <img className="quote-up-icon" alt="" src={quoteUp} />
        <div
          className="ive-been-using"
          style={iveBeenUsingStyle}
        >{`I've been using the data package from [Your Company Name] for several months now, and I couldn't be happier with the service. The package offers excellent value for the price, with generous data allowances and lightning-fast speeds. `}</div>
        <img className="quote-up-icon1" alt="" src={quoteUp1} />
      </div>
      <b className="vibekn" style={vibekNStyle}>
        Vibek.N
      </b>
    </div>
  );
};

export default Review;
