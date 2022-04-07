import React from "react";
import Lottie from "react-lottie";
import animationData from "../Lotties/portfolio.json";
import "../Styles/FirstPage.css";

const FirstPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div className="Firstpage">
      <div className="firstpage-left">
        <Lottie className="Home-lottie" options={defaultOptions} />
      </div>
      <div className="firstpage-right">
        <div className="firstpage-text">
          <h1>
            <span>About Me</span>
          </h1>
          <p>
            My speciality is front-end web design and developement, making pixel
            magic in photoshop and turning it into beautiful , semantic HTML &
            CSS . My interest , however , extend beyond the web and i love
            helping people with branding, print design and marketing strategy. I
            even love making designs move by creating professional motion
            graphics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
