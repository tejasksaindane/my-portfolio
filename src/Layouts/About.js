import React from "react";
import "../Styles/About.css";
import Footer from "../Components/Footer";
import Resume from "../Lotties/My-Resume4.pdf";
import "animate.css";

const About = () => {
  return (
    <>
      <div className="About">
        <div className="About-container">
          <div className="About-container-left">
            <h1>About Me</h1>
          </div>
          <div className="About-container-right">
            <div className="About-container-top">
              <label> About Me</label>
              <p className="animate__animated animate__fadeInUp animate__slower animate__delay-2s">
                I was born in Jalgaon, MH. Completed the primary and secondary
                education from Jalgaon,MH
              </p>
              <label>Education</label>
              <p className="animate__animated animate__fadeInUp animate_slower animate__delay-2s">
                I completed My 10th from St.Teresa's Convent Eng Med School,
                Jalgaon, MH in 2016. I studied science at The K.C.E Society's
                Swami Vivekanand Junior College, in Jalgaon, MH for two years
                before moving to Kaviyitri Bahinabai Chaudhari North Maharashtra
                University , MH for completeing graduation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact-left">
          <label>Name:</label>
          <address>Tejas Kailas Saindane</address>
          <br />
          <label>Mobile No :</label>
          <address>9156403419</address>
          <br />
          <label>Email :</label>
          <address>tejassaindane99@gmail.com</address>
        </div>
        <div className="contact-right">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="resume">
        <a href={Resume} download="Tejas_Resume">
          Download Resume
        </a>
      </div>
      <Footer />
    </>
  );
};

export default About;
