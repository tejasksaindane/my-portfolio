import React from "react";
import "../Styles/Footer.css";
import twitter from "../Lotties/twitter.png";
import linkedin from "../Lotties/linkedin.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-header">
        <h1>Get In Touch</h1>
      </div>
      <div className="footer-container">
        <div className="footer-left">
          <h1>Hello Friends.</h1>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas , or opportunities to be part of your
            vision.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-follow">
            <h1>Follow me on : </h1>
          </div>
          <div className="footer-media">
            <img src={twitter} alt="" width="40vw" />
            <img src={linkedin} alt="" width="40vw" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
