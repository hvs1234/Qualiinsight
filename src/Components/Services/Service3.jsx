// import React from 'react'

import Navbar from "../Navbar";
import "../../css/servicepart.css";
import Footer from "../Footer";

const Service3 = () => {
  return (
    <>
      {/* Navbar */}

      <Navbar />

      {/* Service Part */}

      <section className="section-servicepart">
        <div className="container">
          <h2 className="servicepart-heading">Advisory Support</h2>
          <p className="servicepart-para">
            Our Advisory Support service provides expert guidance to business
            stakeholders through global studies, training support, process
            optimization, and vendor onboarding initiatives.
          </p>
          <div className="servicepart-content">
            <h2 className="servicepart-content-inner-title">Key Areas</h2>
            <div className="servicepart-para-part">
              <p className="servicepart-content-para">
                <span>Global Studies: </span>Acting as the `ears` of the
                business, we review interactions and provide insights to
                optimize program strategies. This includes benchmarking,
                standardization, and implementing Hub & Spoke models.
              </p>
              <p className="servicepart-content-para">
                <span>Training Support: </span>We collaborate with global
                training management teams to advise on the creation and
                development of training content.
              </p>
              <p className="servicepart-content-para">
                <span>Vendor Onboarding: </span>We accelerate learning and
                ensure a smooth transition for new vendors by providing QA
                support during the onboarding process.
              </p>
            </div>
            <h2 className="servicepart-content-inner-title">
              Example Initiatives
            </h2>
            <div className="servicepart-para-part">
              <p className="servicepart-content-para">
                <span>Global Studies: </span>Offering insights that help
                stakeholders identify early opportunities for program
                optimization.
              </p>
              <p className="servicepart-content-para">
                <span>Training Content Development: </span>Advising on the
                creation of training materials that align with global standards.
              </p>
              <p className="servicepart-content-para">
                <span>Vendor Onboarding: </span>Enhancing the onboarding process
                for new vendors by addressing common challenges and sharing best
                practices.
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

export default Service3;
