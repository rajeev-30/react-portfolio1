import React from "react";
import "./services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/card";
import resume from "./resume.pdf";
import { motion } from "framer-motion";


const services = () => {
  const transition = { duration: 1, type: "spring" };
  return (
    <div className="services" id="Skills">
      {/* Left side */}

      <div className="awesome awesome2">
        <span> My</span>
        <span>Skills</span>
            <span>
            Are you  looking for a person that convert you idea into reality, well i'm your man <br />
            i've all the skills required for a website design, what are you waiting for <br />Let's build a brand together.
            </span>

        <a href={resume} download>
          <button className="button s-button"> Download CV </button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right side */}

      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frontend"}
            detail={"HTML, CSS, Javascript, ReactJS"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Programming Languages"}
            detail={"Java, Python, C, C++"}
          />
        </motion.div>

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Backend"}
            detail={"NodeJS, PHP, MySQL, MongoDB"}
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default services;
