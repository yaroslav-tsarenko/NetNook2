import { FunctionComponent } from "react";
import "./BlogSingleBlockDesktop.css";

const BlogSingleBlockDesktop: FunctionComponent = () => {
  return (
    <div className="blog-single-block-desktop">
      <img className="blog-image" alt="" src="/blog--image@2x.png" />
      <div className="april-29-2024">April 29, 2024</div>
      <h3 className="top-10-data1">Top 10 Data Packages for Travelers:</h3>
      <div className="highlight-the-best">
        Highlight the best data packages suitable for travelers, including
        options with international coverage and flexible durations.
      </div>
      <button className="tag5">
        <img className="tag-icon52" alt="" src="/tag-icon5.svg" />
        <div className="tag-label5">Read More</div>
      </button>
    </div>
  );
};

export default BlogSingleBlockDesktop;
