import { FunctionComponent } from "react";
import Logo from "./Logo";
import "./Footer.css";

const Footer: FunctionComponent = () => {
  return (
    <section className="footer9">
      <div className="logo-parent11">
        <div className="logo26">
          <img className="vector-icon10" alt="" src="/vector-1.svg" />
          <div className="giftglyph9">GiftGlyph</div>
        </div>
        <div className="logo-parent12">
          <Logo logoLogoSymbol="/logologo-symbol-2.svg" propColor="#fff" />
          <div className="frame-parent39">
            <div className="stay-in-touch-parent">
              <h1 className="stay-in-touch">Stay in Touch</h1>
              <div className="be-the-first">
                Be the first to recieve special offers
              </div>
            </div>
            <div className="email-address-parent">
              <div className="email-address">Email Address</div>
              <img
                className="line-arrow-right-icon"
                alt=""
                src="/line-arrowright.svg"
              />
            </div>
            <img
              className="social-icon"
              loading="lazy"
              alt=""
              src="/social@2x.png"
            />
          </div>
        </div>
      </div>
      <footer className="footer-inner3">
        <div className="frame-parent40">
          <div className="information-parent3">
            <div className="information12">
              <div className="information13">Learn</div>
              <div className="faq6">Our Story</div>
              <div className="blog14">Sourcing</div>
              <div className="support12">Blog</div>
              <div className="support13">News Room</div>
            </div>
            <div className="company24">
              <div className="company25">Partner with us</div>
              <div className="about-us19">NetNook Partners Platform</div>
              <div className="careers12">Affiliate Partners</div>
              <div className="contact-us13">Distribution Partners</div>
              <div className="hutteio30">API Partners</div>
              <div className="hutteio31">NetNook for Corporation</div>
            </div>
            <div className="company26">
              <div className="company27">Support</div>
              <div className="about-us20">Contact</div>
              <div className="careers13">FAQ</div>
              <div className="contact-us14">Careers</div>
              <div className="hutteio32">COVID-19 Safety Plan</div>
              <div className="hutteio33">Privacy Policy</div>
              <div className="hutteio34">Terms of Service</div>
            </div>
          </div>
          <div className="frame-parent41">
            <div className="terms-of-service-parent3">
              <div className="terms-of-service6">{`Terms of Service `}</div>
              <div className="line-wrapper8">
                <div className="frame-child12" />
              </div>
              <div className="privacy-policy9">Privacy Policy</div>
              <div className="line-wrapper9">
                <div className="frame-child13" />
              </div>
              <div className="cookies6">Cookies</div>
            </div>
            <div className="payment-icons-parent1">
              <img
                className="payment-icons42"
                alt=""
                src="/payment-icons@2x.png"
              />
              <img
                className="payment-icons43"
                alt=""
                src="/payment-icons-1.svg"
              />
              <img
                className="payment-icons44"
                alt=""
                src="/payment-icons-2@2x.png"
              />
              <img
                className="payment-icons45"
                alt=""
                src="/payment-icons-3@2x.png"
              />
              <img
                className="payment-icons46"
                alt=""
                src="/payment-icons-4.svg"
              />
              <img
                className="payment-icons47"
                alt=""
                src="/payment-icons-5.svg"
              />
              <img
                className="payment-icons48"
                alt=""
                src="/payment-icons-6@2x.png"
              />
            </div>
            <div className="copyright-parent1">
              <img className="copyright-icon6" alt="" src="/copyright.svg" />
              <div className="netnook-wrapper16">
                <div className="netnook23">2024 NetNook</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
