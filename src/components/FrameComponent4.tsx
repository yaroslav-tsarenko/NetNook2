import { FunctionComponent } from "react";
import DataPacks from "./DataPacks";
import "./FrameComponent4.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className="frame-parent35">
      <div className="select-available-countries-container">
        <h1 className="select-available-countries3">
          Select Available Countries
        </h1>
        <div className="search-datapacks-from-200-cou-container">
          <input
            className="search-datapacks-from3"
            placeholder="Search Datapacks from 200+ countires and regions"
            type="text"
          />
          <img className="search-normal-icon3" alt="" src="/searchnormal.svg" />
        </div>
      </div>
      <div className="frame-parent36">
        <div className="popular-countries-container">
          <div className="popular-countries3">Popular Countries</div>
          <div className="countries-container">
            <div className="countries15">
              <img className="flagsnepal-icon3" alt="" src="/flagsnepal.svg" />
              <b className="nepal13">Nepal</b>
            </div>
            <div className="countries16">
              <img
                className="flagsindia-icon3"
                loading="lazy"
                alt=""
                src="/flagsindia.svg"
              />
              <b className="india3">India</b>
            </div>
            <div className="countries17">
              <img className="flagsjapan-icon3" alt="" src="/flagsjapan.svg" />
              <b className="japan3">Japan</b>
            </div>
            <div className="countries18">
              <img
                className="flagsmaldives-icon3"
                loading="lazy"
                alt=""
                src="/flagsmaldives.svg"
              />
              <b className="maldives3">Maldives</b>
            </div>
            <div className="countries19">
              <img className="flagschina-icon3" alt="" src="/flagschina.svg" />
              <b className="china3">China</b>
            </div>
          </div>
        </div>
        <div className="frame-parent37">
          <div className="data-packs-group">
            <DataPacks
              line1="pending_I212:59848;2007:6391"
              gB="1 GB"
              days="30 Days"
              uS450="US $4.50"
            />
            <DataPacks
              line1="pending_I212:59849;2007:6391"
              gB="5 GB"
              days="30 Days"
              uS450="US $20.50"
              propWidth="342px"
              propMinWidth="342px"
              propMinWidth1="35px"
              propMinWidth2="58px"
              propMinWidth3="77px"
            />
            <DataPacks
              line1="pending_I212:59850;2007:6391"
              gB="15 GB"
              days="30 Days"
              uS450="US $60.50"
              propWidth="342px"
              propMinWidth="342px"
              propMinWidth1="45px"
              propMinWidth2="58px"
              propMinWidth3="77px"
            />
          </div>
          <div className="data-packs-container">
            <DataPacks
              line1="pending_I212:59852;2007:6391"
              gB="1 GB"
              days="7 Days"
              uS450="US $4.50"
              propWidth="332px"
              propMinWidth="332px"
              propMinWidth1="35px"
              propMinWidth2="49px"
              propMinWidth3="67px"
            />
            <DataPacks
              line1="pending_I212:59853;2007:6391"
              gB="1 GB"
              days="7 Days"
              uS450="US $4.50"
              propWidth="332px"
              propMinWidth="332px"
              propMinWidth1="35px"
              propMinWidth2="49px"
              propMinWidth3="67px"
            />
            <DataPacks
              line1="pending_I212:59854;2007:6391"
              gB="1 GB"
              days="7 Days"
              uS450="US $4.50"
              propWidth="332px"
              propMinWidth="332px"
              propMinWidth1="35px"
              propMinWidth2="49px"
              propMinWidth3="67px"
            />
          </div>
        </div>
      </div>
      <button className="button28">
        <img className="tag-icon28" alt="" src="/tag-icon3.svg" />
        <div className="button29">Show 200+ Countries</div>
        <img className="tag-icon29" alt="" src="/tag-icon3.svg" />
      </button>
    </section>
  );
};

export default FrameComponent4;
