import { useState } from "react";
import Navbar from "./Navbar";
import "../css/about.css";
import "../css/productpage.css";
import Footer from "./Footer";
// import about_img from "/Images/img7.jpg";
import ProductPageData from "../API/ProductAPI";

const ProductsPage = () => {
  // API
  // -----------------------------------ProductPage API----------------------------------------------------------------

  const [productpagedata] = useState(ProductPageData);

  return (
    <>
      {/* Navbar Section */}

      <Navbar />

      {/* About Page */}

      <section className="section-aboutpage section-product">
        <div className="container">
          <h1 className="product-heading">Our Product Related Services</h1>
        </div>
      </section>

      <section className="about-more">
        <div className="container">
          <div className="about-content product-content">
            <p className="about-para main-para productpage-para">
              We help clients identify the best quality management products,
              train their teams for optimal use, and customize solutions to
              maximize effectiveness and benefits
            </p>
            {productpagedata.map((e) => {
              return (
                <div
                  className="servicepage-main grid grid-two-columns"
                  key={e.id}
                >
                  <div className={`servicepage-data ${e.dataclass}`}>
                    <h2 className="common-heading">{e.title}</h2>
                    <div className="servicepage-para-box">
                      <p className="common-para">{e.desc}</p>
                      <p className="common-para">{e.desc2}</p>
                      <p className="common-para">{e.desc3}</p>
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

export default ProductsPage;
