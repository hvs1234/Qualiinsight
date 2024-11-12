// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Components/Contact";
import Program from "./Components/Program";
import ServicesPage from "./Components/ServicesPage";
import ProductsPage from "./Components/ProductsPage";
import Blog from "./Components/Blog";
import Careers from "./Components/Careers";
import AboutPage from "./Components/AboutPage";
import BlogMore from "./Components/BlogMore";
import BlogMore2 from "./Components/BlogMore2";
import Service1 from "./Components/Services/Service1";
import Service2 from "./Components/Services/Service2";
import Service3 from "./Components/Services/Service3";
import Usecase from "./Components/Usecase";
import Usecase1 from "./Components/UsecasePart/Usecase1";
import Usecase2 from "./Components/UsecasePart/Usecase2";
import Usecase3 from "./Components/UsecasePart/Usecase3";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/program" element={<Program />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/service1" element={<Service1 />}></Route>
          <Route path="/service2" element={<Service2 />}></Route>
          <Route path="/service3" element={<Service3 />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/usecase" element={<Usecase />}></Route>
          <Route path="/usecase1" element={<Usecase1 />}></Route>
          <Route path="/usecase2" element={<Usecase2 />}></Route>
          <Route path="/usecase3" element={<Usecase3 />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blogmore" element={<BlogMore />}></Route>
          <Route path="/blogmore2" element={<BlogMore2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
