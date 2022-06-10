import React from "react";
import "../Styles/Home.css";
import FirstPage from "./FirstPage";
import Skills from "./Skills";
import Rotate from "./Rotate";
import SliderGallery from "./SliderGallery";
import Footer from "./Footer";
import Resume from "../Lotties/My-Resume4.pdf";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="Home-container">
          <div className="Home-Heading">
            <h1 className="Home-bg" data-text="Portfolio">
              Portfolio
            </h1>
          </div>
          <div className="Home-left">
            <h1>Hello ,</h1>
            <p data-text="">
              I am <br />
              <span data-text="Tejas Saindane">&nbsp; Tejas Saindane</span>.
            </p>
            <p className="Home-txt">
              <span className="letter">F</span>rontend{" "}
              <span className="letter">&nbsp;D</span>eveloper.
            </p>
          </div>
          <div className="Home-right">
            {/* <a href={Resume} download="Tejas_Resume">
            Download
          </a> */}
          </div>
        </div>
      </div>
      <FirstPage />
      <Skills />
      <Rotate />
      <SliderGallery />
      <Footer />
    </>
  );
};

export default Home;
