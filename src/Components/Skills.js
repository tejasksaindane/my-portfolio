import React from "react";
import "../Styles/Skills.css";
import Cpp from "../Lotties/icons/c++.png";
import Html from "../Lotties/icons/html.png";
import Css from "../Lotties/icons/css.png";
import Js from "../Lotties/icons/js.png";
import react from "../Lotties/icons/rn.png";
import node from "../Lotties/icons/node.png";
import firebase from "../Lotties/icons/firebase.png";
import mongo from "../Lotties/icons/mongodb.png";
import mysql from "../Lotties/icons/mysql.png";
import python from "../Lotties/icons/python.png";

const Skills = () => {
  return (
    <div className="Skills">
      <div className="skill-header">Skills</div>
      <div className="skills-img">
        <div className="skill-one">
          <img className="s-img" src={Cpp} alt="1" />
        </div>
        <div className="skill-two">
          <img className="s-img" src={Html} alt="2" />
        </div>
        <div className="skill-three">
          <img className="s-img" src={Css} alt="3" />
        </div>
        <div className="skill-four">
          <img className="s-img" src={Js} alt="4" />
        </div>
        <div className="skill-five">
          <img className="s-img" src={react} alt="5" />
        </div>
        <div className="skill-six">
          <img className="s-img" src={node} alt="6" />
        </div>
        <div className="skill-seven">
          <img className="s-img" src={firebase} alt="7" />
        </div>
        <div className="skill-eight"></div>
        <div className="skill-nine">
          <img className="s-img" src={mongo} alt="8" />
        </div>
        <div className="skill-ten">
          <img className="s-img" src={mysql} alt="9" />
        </div>
        <div className="skill-ten">
          <img className="s-img" src={python} alt="9" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
{
  /* <img className="s-img" src={Cpp} alt="1" />
        <img className="s-img" src={Html} alt="2" />
        <img className="s-img" src={Css} alt="3" />
        <img className="s-img" src={Js} alt="4" />
        <img className="s-img" src={react} alt="5" />
        <img className="s-img" src={node} alt="6" />
        <img className="s-img" src={firebase} alt="7" />
        <img className="s-img" src={mongo} alt="8" />
        <img className="s-img" src={mysql} alt="9" />
        <img className="s-img" src={python} alt="10" /> */
}
