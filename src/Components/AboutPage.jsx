// import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../css/about.css";
import "../css/hero.css";
import about_img from "/Images/img5.jpg";

const AboutPage = () => {
  return (
    <>
      {/* Navbar Section */}

      <Navbar />

      {/* About Page */}

      <section className="section-aboutpage">
        <div className="container">
          <h1 className="about-heading">Our Mission</h1>
        </div>
      </section>

      <section className="about-more">
        <div className="container">
          <div className="about-content">
            <p className="about-para main-para">
              At QualiInsight, we envision a future where quality, insights,
              innovation, and research are the cornerstones of every business
              decision
            </p>
            <div className="about-content-info grid grid-two-columns">
              <div className="about-info1 about-info">
                <p className="about-inner-para">
                  Our mission is to redefine the perception of quality from a
                  mere cost center to a powerful transformation engine that
                  provides a competitive edge in today’s dynamic market. We are
                  committed to equipping businesses with the right data and
                  insights, empowering them to make informed, strategic choices
                  that foster excellence and sustainable growth.
                </p>
                <p className="about-inner-para">
                  Our focus extends beyond immediate challenges; we aim to
                  cultivate a culture of continuous improvement that paves the
                  way for long-term success and innovation.
                </p>
              </div>
              <div className="about-info2 about-info">
                <p className="about-inner-para">
                  In our pursuit of excellence, we are dedicated to accelerating
                  the responsible advancement and deployment of Artificial
                  General Intelligence (AGI) through our Quality as a Service
                  (QaaS) framework. By integrating expert human feedback, we
                  ensure that AGI outputs meet the highest quality standards,
                  promoting fairness, inclusivity, and alignment with human
                  values.
                </p>
                <p className="about-inner-para">
                  Together, we strive to revolutionize decision-making
                  processes, ensuring that quality remains at the heart of every
                  choice. At QualiInsight, we are committed to driving
                  innovation, enriching lives, and empowering organizations to
                  thrive in an ever-evolving landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about-more-img">
        <img src={about_img} alt="img" />
      </div>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default AboutPage;
