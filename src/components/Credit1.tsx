import { FunctionComponent } from "react";
import "./Credit1.css";

export type Credit1Type = {
  gameIconsnestEggs?: string;
};

const Credit1: FunctionComponent<Credit1Type> = ({ gameIconsnestEggs }) => {
  return (
    <div className="credit1">
      <div className="parent2">
        <b className="b6">100</b>
        <img
          className="game-iconsnest-eggs"
          loading="lazy"
          alt=""
          src={gameIconsnestEggs}
        />
      </div>
      <div className="credits">100 Credits</div>
      <div className="div14">$100</div>
      <button className="button-wrapper5">
        <div className="button48">
          <img className="tag-icon53" alt="" src="/tag-icon3.svg" />
          <div className="button-wrapper6">
            <div className="button49">Add to Cart</div>
          </div>
          <img className="tag-icon54" alt="" src="/tag-icon3.svg" />
        </div>
      </button>
    </div>
  );
};

export default Credit1;
