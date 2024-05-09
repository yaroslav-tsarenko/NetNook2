import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomePage1 from "./pages/HomePage1";
import ProductListing from "./pages/ProductListing";
import Blogs from "./pages/Blogs";
import Credit from "./pages/Credit";
import TermsAndServices from "./pages/TermsAndServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BuyCredits from "./pages/BuyCredits";
import InnerBlog from "./pages/InnerBlog1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/product-listing":
        title = "";
        metaDescription = "";
        break;
      case "/blogs":
        title = "";
        metaDescription = "";
        break;
      case "/inner-blog":
        title = "";
        metaDescription = "";
        break;
      case "/credit":
        title = "";
        metaDescription = "";
        break;
      case "/terms-and-services":
        title = "";
        metaDescription = "";
        break;
      case "/privacy-policy":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/checkout":
        title = "";
        metaDescription = "";
        break;
      case "/buy-credits":
        title = "";
        metaDescription = "";
        break;
      case "/inner-blog1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home-page" element={<HomePage1 />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/inner-blog" element={<InnerBlog />} />
      <Route path="/credit" element={<Credit />} />
      <Route path="/terms-and-services" element={<TermsAndServices />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/buy-credits" element={<BuyCredits />} />
      <Route path="/inner-blog1" element={<InnerBlog />} />
    </Routes>
  );
}
export default App;
