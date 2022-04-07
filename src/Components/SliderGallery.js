import React, { useState, useEffect } from "react";
import "../Styles/SliderGallery.css";
import { Preloader, TailSpin } from "react-preloader-icon";
import Certification from "../Layouts/Certification";

const SliderGallery = () => {
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
  }, [<SliderGallery />]);

  return (
    <>
      <div className="">
        <div class="slider">
          <div class="slide-track">
            {loading ? <div class="slide"></div> : Loader()}
            {loading ? <div class="slide"></div> : Loader()}
            {loading ? <div class="slide"></div> : Loader()}
            {loading ? <div class="slide"></div> : Loader()}
            {loading ? <div class="slide"></div> : Loader()}
            {loading ? <div class="slide"></div> : Loader()}
            {loading ? <div class="slide"></div> : Loader()}
            {loading ? <div class="slide"></div> : Loader()}
            {loading ? <div class="slide"></div> : Loader()}
            {loading ? <div class="slide"></div> : Loader()}
            {loading ? <div class="slide"></div> : Loader()}
            {loading ? <div class="slide"></div> : Loader()}
            {loading ? <div class="slide"></div> : Loader()}
            {/* <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div> */}
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SliderGallery;
