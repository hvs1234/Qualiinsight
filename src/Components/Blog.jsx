// import React from 'react'

import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import about_img from "/Images/img8.jpg";
import "../css/blog.css";
import Footer from "./Footer";

const Blog = () => {
  // Reload

  const handleOnClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Navbar Section */}

      <Navbar />

      {/* Blog Page */}
      <section className="section-aboutpage section-blogpage">
        <div className="container">
          <h1 className="about-heading blog-heading">The Quality Chronicles</h1>
        </div>
      </section>

      <section className="about-more">
        <div className="container">
          <div className="about-content blog-content">
            <p className="blog-para">
              ARTICLES AND STORIES ABOUT QUALITY AS A SERVICE
            </p>
          </div>
        </div>
      </section>

      <section className="section-blog-more">
        <div className="container">
          <div className="blog-main grid grid-two-columns">
            <div className="">
              <Link
                to={"/blogmore"}
                onClick={handleOnClick("/blogmore")}
                className="blog-part"
              >
                <div className="blog-btns">
                  <Link
                    to={"/blogmore"}
                    onClick={handleOnClick("/blogmore")}
                    className="blog-btn btn"
                  >
                    Insights
                  </Link>
                </div>
                <h2 className="main-heading">
                  Mastering Multi-Vendor Complexity with the QualiInsights QaaS
                  Framework
                </h2>
                <p className="inner-para">
                  In today`s competitive landscape, managing multiple vendors
                  can be a daunting task. Businesses often face challenges such
                  as inconsistent customer experiences, biased audits, slow
                  learning processes, ineffective change management, and
                  increased costs.
                </p>
              </Link>
            </div>
            <div className="">
              <Link
                to={"/blogmore2"}
                onClick={handleOnClick("/blogmore2")}
                className="blog-part"
              >
                <div className="blog-btns">
                  <Link
                    to={"/blogmore2"}
                    onClick={handleOnClick("/blogmore2")}
                    className="blog-btn btn"
                  >
                    Insights
                  </Link>
                </div>
                <h2 className="main-heading">
                  Mastering AI solutions and to transforming AI Journey with
                  QualiInsights Game-Changing QaaS
                </h2>
                <p className="inner-para">
                  In today`s rapidly evolving technological landscape,
                  businesses are constantly seeking ways to stay ahead of the
                  curve. At QualiInsights, we understand the unique challenges
                  and opportunities presented by AI.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Blog;
