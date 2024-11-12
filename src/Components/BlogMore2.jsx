import { useState } from "react";
import "../css/blog.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BlogMoreData2 from "../API/BlogMore2API";

const BlogMore2 = () => {
  // API
  //---------------------------------------------BLog More API---------------------------------------------------

  const [blogmoredata2] = useState(BlogMoreData2);

  return (
    <>
      {/* Navbar */}

      <Navbar />

      {/* Blog More */}

      <section className="section-blogmore">
        <div className="container">
          <div className="blogmore-content">
            <h2 className="main-heading">
              Mastering AI solutions and to transforming AI Journey with
              QualiInsights’ Game-Changing QaaS
            </h2>
            <p className="main-para">
              In today`s rapidly evolving technological landscape, businesses
              are constantly seeking ways to stay ahead of the curve. At
              QualiInsights, we understand the unique challenges and
              opportunities presented by AI. Our Quality as a Service (QaaS)
              framework is designed to help businesses not only implement and
              adopt AI but also optimize and enhance existing AI solutions.
              Here`s how we can help you achieve unparalleled success with your
              AI initiatives.
            </p>
            <h2 className="inner-heading">
              Enhancing Existing AI Implementations
            </h2>
            <p className="main-para">
              For clients who already have tools and technology in place and
              prefer not to introduce new systems, our QaaS framework offers a
              comprehensive solution to ensure these resources deliver maximum
              value.
            </p>
            {blogmoredata2.map((e) => {
              return (
                <div className="blogmore-main" key={e.id}>
                  <h2 className="inner-heading">{e.title}</h2>
                  <div className="blogmore-para-part">
                    <p className="inner-para">{e.desc1}</p>
                    <p className="inner-para">
                      <span>{e.desc_span} </span>
                      {e.desc2}
                    </p>
                    <p className="inner-para">
                      <span>{e.desc_span2} </span>
                      {e.desc3}
                    </p>
                  </div>
                </div>
              );
            })}
            <h2 className="inner-heading">Implementing New AI Solutions</h2>
            <p className="main-para">
              For clients aspiring to implement new AI tools or technologies,
              our QaaS framework provides a structured approach to process
              assessment and solution recommendation.
            </p>
            {blogmoredata2.map((e) => {
              return (
                <div className={`blogmore-main ${e.mainclass}`} key={e.id}>
                  <h2 className="inner-heading">{e.title2}</h2>
                  <div className="blogmore-para-part">
                    <p className="inner-para">{e.desc2}</p>
                  </div>
                </div>
              );
            })}
            <div className="blogmore-main">
              <h2 className="inner-heading">Expected Benefits</h2>
              <p className="main-para">
                By leveraging our QaaS framework, businesses can expect
                significant improvements in various areas:
              </p>
              <div className="blogmore-para-part">
                <p className="inner-para">
                  <span>Enhanced ROI: </span>Our solutions typically result in a
                  20-30% increase in ROI by optimizing existing AI
                  implementations and ensuring new AI investments are
                  strategically aligned with business goals.
                </p>
                <p className="inner-para">
                  <span>Cost Reduction: </span>Clients can achieve up to 25%
                  reduction in operational costs by streamlining processes and
                  implementing efficient AI solutions.
                </p>
                <p className="inner-para">
                  <span>Improved Customer Experience: </span>AI-driven
                  enhancements can lead to a 15-20% improvement in customer
                  satisfaction and engagement.
                </p>
              </div>
            </div>
            <div className="blogmore-conclusion">
              <h2 className="inner-heading">Conclusion</h2>
              <p className="inner-para">
                At QualiInsights, we are committed to helping you harness the
                power of AI to drive business transformation. Our expertise and
                innovative QaaS framework ensure that your AI initiatives are
                not only successfully implemented but also continually optimized
                for maximum impact.
              </p>
              <p className="inner-para">
                Ready to transform your business with AI? Contact us today to
                learn how QualiInsights can help you achieve your goals.
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

export default BlogMore2;
