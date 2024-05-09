import { FunctionComponent } from "react";
import BlogSingleBlockDesktop from "./BlogSingleBlockDesktop";
import "./ComparisonOperator.css";

const ComparisonOperator: FunctionComponent = () => {
  return (
    <section className="comparison-operator">
      <div className="logical-operator">
        <div className="arithmetic-operator1">
          <BlogSingleBlockDesktop />
          <BlogSingleBlockDesktop />
          <BlogSingleBlockDesktop />
          <BlogSingleBlockDesktop />
          <BlogSingleBlockDesktop />
          <BlogSingleBlockDesktop />
        </div>
        <div className="pagination-container">
          <div className="pagination1">
            <img
              className="pagination-block-icon2"
              loading="lazy"
              alt=""
              src="/pagination-block.svg"
            />
            <div className="pagination-block3">
              <div className="pagination-block-child1" />
              <div className="div11">1</div>
            </div>
            <div className="pagination-block4">
              <div className="pagination-block-child2" />
              <div className="div12">2</div>
            </div>
            <div className="pagination-block5">
              <div className="pagination-block-child3" />
              <div className="div13">3</div>
            </div>
            <img
              className="pagination-block-icon3"
              alt=""
              src="/pagination-block-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonOperator;
