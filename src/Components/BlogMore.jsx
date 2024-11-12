import { useState } from "react";
import "../css/blog.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BlogMoreData from "../API/BlogMoreAPI";

const BlogMore = () => {
  // API
  //---------------------------------------------BLog More API---------------------------------------------------

  const [blogmoredata] = useState(BlogMoreData);

  return (
    <>
      {/* Navbar */}

      <Navbar />

      {/* Blog More */}

      <section className="section-blogmore">
        <div className="container">
          <div className="blogmore-content">
            <h2 className="main-heading">
              Mastering Multi-Vendor Complexity with the QualiInsights QaaS
              Framework
            </h2>
            <p className="main-para">
              In today’s competitive landscape, managing multiple vendors can be
              a daunting task. Businesses often face challenges such as
              inconsistent customer experiences, biased audits, slow learning
              processes, ineffective change management, and increased costs. At
              QualiInsight, we understand these complexities and are proud to
              introduce our Quality as a Service (QaaS) framework, designed to
              streamline and optimize multi-vendor management across various
              geographies and languages. Let’s explore how our QaaS solution can
              transform your business operations for greater efficiency and
              effectiveness.
            </p>
            <h2 className="inner-heading">
              The Challenges of Multi-Vendor Management
            </h2>
            {blogmoredata.map((e) => {
              return (
                <div className="blogmore-main" key={e.id}>
                  <h2 className="inner-heading">{e.title}</h2>
                  <div className="blogmore-para-part">
                    <p className="inner-para">{e.desc1}</p>
                    <p className="inner-para">
                      <span>{e.desc_span}: </span>
                      {e.desc2}
                    </p>
                    <p className="inner-para">
                      <span>{e.desc_span2}: </span>
                      {e.desc3}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="blogmore-main">
              <h2 className="inner-heading">
                Qualiinsight QaaS - A Profit Center For Clients
              </h2>
              <p className="main-para">
                Our centralized and independent QaaS framework not only resolve
                these challenges but also acts as a profit center for our
                clients:
              </p>
              <div className="blogmore-para-part">
                <p className="inner-para">
                  <span>X-Utilization & Fungibility: </span>Improved
                  cross-training and utilization of quality analysts across
                  workflows and languages lead to a 30% reduction in TCO.
                </p>
                <p className="inner-para">
                  <span>Optimized Total Cost of Ownership: </span>Enhanced
                  efficiency, revenue generation, and customer experience
                  contribute to a 10% improvement in revenue.
                </p>
                <p className="inner-para">
                  <span>Centralized Learning & Best Practices: </span>Achieve a
                  30% increase in speed to competency through centralized
                  learning and best practice sharing.
                </p>
                <p className="inner-para">
                  <span>Uniform Data Analytics, Reporting, and Insights: </span>
                  Gain 15% efficiency through consistent data analytics and
                  reporting.
                </p>
                <p className="inner-para">
                  <span>Efficient Change Management: </span>Experience a 25%
                  improvement in customer satisfaction (C-Sat).
                </p>
                <p className="inner-para">
                  <span>Independent/Unbiased Quality Results: </span>Realize a
                  30%+ improvement in overall quality outcomes.
                </p>
              </div>
            </div>
            <div className="blogmore-conclusion">
              <h2 className="inner-heading">Conclusion</h2>
              <p className="inner-para">
                At QualiInsight, our QaaS framework is the cornerstone of
                effective multi-vendor management. By promoting best practice
                sharing, standardization, and consistent quality, we empower
                businesses to seamlessly manage multiple vendors across
                different geographies and languages, resulting in improved
                operational efficiency and reduced process variations.
              </p>
              <p className="inner-para">
                Are you ready to elevate your multi-vendor management strategy?
                Contact us today to learn how QualiInsight can help you achieve
                unparalleled success!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </>
  );
};

export default BlogMore;
