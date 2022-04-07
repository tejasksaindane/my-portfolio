import React, { useState, useEffect } from "react";
import Hulu from "../Lotties/hulu.png";
import Netflix from "../Lotties/netflix.png";
import Airbnb from "../Lotties/airbnb.png";
import Portfolio from "../Lotties/portfolio-one.png";
import Whatsapp from "../Lotties/whatsapp.png";
import "../Styles/Certification.css";
import { Preloader, TailSpin } from "react-preloader-icon";

const Certification = () => {
  const [loading, setLoading] = useState(false);
  const Loader = () => (
    <Preloader
      use={TailSpin}
      size={40}
      strokeWidth={10}
      strokeColor="#3498db"
      duration={2000}
    />
  );
  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      //TODO one
      {loading ? (
        <div className="wrapper">
          <div className="card">
            <img src={Hulu} alt="" />
            <div className="info">
              <h1>Hulu-Clone</h1>
              <p>Made Using Nextjs, TMDB Api.</p>
            </div>
          </div>
        </div>
      ) : (
        Loader()
      )}
      //TODO two
      <div className="wrapper">
        <div className="card">
          <img src={Netflix} alt="" />
          <div className="info">
            <h1>Netflix-Clone</h1>
            <p>Made using ReactJs,Styled components and TMDB Api</p>
          </div>
        </div>
      </div>
      //TODO three
      <div className="wrapper">
        <div className="card">
          <img src={Airbnb} alt="" />
          <div className="info">
            <h1>AirBnB-Clone</h1>
            {/* <p>ReadMore</p> */}
          </div>
        </div>
      </div>
      //TODO FOUR
      <div className="wrapper">
        <div className="card">
          <img src={Whatsapp} alt="" />
          <div className="info">
            <h1>WhatsApp-clone</h1>
            {/* <p>ReadMore</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
