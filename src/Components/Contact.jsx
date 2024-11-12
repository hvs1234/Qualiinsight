// import React from 'react'
import Navbar from "./Navbar";
import "../css/contact.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      {/* Navbar */}

      <Navbar />

      {/* Contact More */}

      <section className="section-contactmore">
        <div className="container">
          <div className="contact-main grid grid-two-columns">
            <div className="contact-data">
              <h2 className="inner-heading">
                Learn more about how Qualiinsight can help your Business and
                Quality teams
              </h2>
            </div>
            <div className="contact-form-part">
              <form
                action="https://formspree.io/f/xeojkllk"
                className="form"
                method="POST"
              >
                <div className="input-main grid grid-two-columns">
                  <div className="input-part">
                    <label htmlFor="Name">First Name *</label>
                    <input
                      type="text"
                      name="First Name: "
                      placeholder=""
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="input-part">
                    <label htmlFor="Name">Last Name</label>
                    <input
                      type="text"
                      name="Last Name: "
                      placeholder=""
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="input-main grid grid-one-columns">
                  <div className="input-part">
                    <label htmlFor="Email">Email *</label>
                    <input
                      type="email"
                      name="Email: "
                      placeholder=""
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="input-main grid grid-one-columns">
                  <div className="input-part">
                    <label htmlFor="Message">How can we help you? *</label>
                    <textarea
                      rows={5}
                      cols={30}
                      name="Message: "
                      placeholder=""
                      required
                      autoComplete="off"
                    ></textarea>
                  </div>
                </div>
                <div className="input-main grid grid-one-columns">
                  <div className="input-part">
                    <input
                      type="submit"
                      value={"Submit"}
                      className="btn form-btn"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Contact;
