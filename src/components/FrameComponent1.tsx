import { FunctionComponent } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  smartphone1?: string;
  location1?: string;
  qrCode11?: string;
  checked11?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  smartphone1,
  location1,
  qrCode11,
  checked11,
}) => {
  return (
    <section className="how-netnook-works-parent">
      <h1 className="how-netnook-works">How NetNook Works</h1>
      <div className="frame-parent38">
        <div className="smartphone-1-parent">
          <img className="smartphone-1-icon" alt="" src={smartphone1} />
          <h3 className="download-the-app">Download the app</h3>
          <div className="logo25">
            <img
              className="logologo-symbol-icon16"
              alt=""
              src="/logologo-symbol-1.svg"
            />
            <div className="netnook-wrapper15">
              <b className="netnook22">NetNook</b>
            </div>
          </div>
        </div>
        <div className="location-1-parent">
          <img
            className="location-1-icon"
            loading="lazy"
            alt=""
            src={location1}
          />
          <h3 className="choose-your-destination">
            Choose your destination and package
          </h3>
        </div>
        <div className="qr-code-1-1-parent">
          <img className="qr-code-1-1" loading="lazy" alt="" src={qrCode11} />
          <h3 className="install-your-esim">Install your eSIM</h3>
        </div>
        <div className="checked-1-1-parent">
          <img className="checked-1-1" loading="lazy" alt="" src={checked11} />
          <h3 className="activate-your-esim">Activate your eSIM</h3>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
