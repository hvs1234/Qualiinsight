import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../css/about.css";
import "../css/hero.css";
// import about_img from "/Images/img8.jpg";
import UsecaseData from "../API/UsecaseAPI";
import { Link } from "react-router-dom";

const Usecase = () => {
  // API
  // ------------------------------------Service Page API-------------------------------------

  const [usecasedata] = useState(UsecaseData);

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

      {/* About Page */}

      <section className="section-aboutpage section-servicepage">
        <div className="container">
          <h1 className="servicepage-heading">
            UseCase
          </h1>
        </div>
      </section>

      <section className="service-more">
        <div className="container">
          <div className="about-content servicepage-content">
            {usecasedata.map((e) => {
              return (
                <div
                  className="servicepage-main grid grid-two-columns"
                  key={e.id}
                >
                  <div className={`servicepage-data ${e.dataclass}`}>
                    <h2 className="common-heading">{e.title}</h2>
                    <div className="servicepage-para-box">
                      <p className="common-para">{e.desc}</p>
                    </div>
                    <div className="servicepage-link-btn">
                      <Link
                        to={e.to}
                        onClick={handleOnClick(e.to)}
                        className="servicepage-link"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                  <div className={`servicepage-img ${e.imgclass}`}>
                    <img src={e.img} alt="img" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Usecase;
