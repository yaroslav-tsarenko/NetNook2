import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent8.css";

export type FrameComponent8Type = {
  paymentIcons?: string;
  paymentIcons2?: string;
  paymentIcons3?: string;
  paymentIcons6?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  paymentIcons,
  paymentIcons2,
  paymentIcons3,
  paymentIcons6,
  propHeight,
  propPadding,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  return (
    <footer className="footer-inner4">
      <div className="frame-parent53">
        <div className="information-parent4">
          <div className="information14">
            <div className="information15">Learn</div>
            <div className="faq7">Our Story</div>
            <div className="blog15">Sourcing</div>
            <div className="support14">Blog</div>
            <div className="support15">News Room</div>
          </div>
          <div className="company28">
            <div className="company29">Partner with us</div>
            <div className="about-us21">NetNook Partners Platform</div>
            <div className="careers14">Affiliate Partners</div>
            <div className="contact-us15">Distribution Partners</div>
            <div className="hutteio35">API Partners</div>
            <div className="hutteio36">NetNook for Corporation</div>
          </div>
          <div className="company30">
            <div className="company31">Support</div>
            <div className="about-us22">Contact</div>
            <div className="careers15">FAQ</div>
            <div className="contact-us16">Careers</div>
            <div className="hutteio37">COVID-19 Safety Plan</div>
            <div className="hutteio38">Privacy Policy</div>
            <div className="hutteio39">Terms of Service</div>
          </div>
        </div>
        <div className="frame-parent54" style={frameDiv2Style}>
          <div className="terms-of-service-parent4">
            <div className="terms-of-service7">{`Terms of Service `}</div>
            <div className="line-wrapper11">
              <div className="frame-child15" />
            </div>
            <div className="privacy-policy10">Privacy Policy</div>
            <div className="line-wrapper12">
              <div className="frame-child16" />
            </div>
            <div className="cookies7">Cookies</div>
          </div>
          <div className="payment-icons-parent2">
            <img className="payment-icons49" alt="" src={paymentIcons} />
            <img
              className="payment-icons50"
              alt=""
              src="/payment-icons-1.svg"
            />
            <img className="payment-icons51" alt="" src={paymentIcons2} />
            <img className="payment-icons52" alt="" src={paymentIcons3} />
            <img
              className="payment-icons53"
              alt=""
              src="/payment-icons-4.svg"
            />
            <img
              className="payment-icons54"
              alt=""
              src="/payment-icons-5.svg"
            />
            <img className="payment-icons55" alt="" src={paymentIcons6} />
          </div>
          <div className="data-aggregator2">
            <img className="copyright-icon7" alt="" src="/copyright.svg" />
            <div className="value-mapper">
              <div className="netnook24">2024 NetNook</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent8;
