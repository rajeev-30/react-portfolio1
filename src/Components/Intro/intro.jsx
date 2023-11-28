import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/rajeev.jpg";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
// import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const intro = () => {
  const transition = { duration: 1.5, type: "spring" };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Rajeev Kushwaha</span>
          <span>
            Strong in design and problem-solving skills. I've been designing
            websites from past 3 years and have developed numerous websites that
            reflect my commitment to excellence. Whether you're looking for 
            a stunning ecommerce website that generates profit or a
            responsive website or portfolio, I have the skills to bring your
            Vision to Life. Let's start the journey to transform your ideas into
            Remarkable Digital Experiences.
          </span>
        </div>

        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          <button className="button i-button">Hire Me</button>
        </Link>

        <div className="i-icons">
          <a href="https://github.com/rajeev-30" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/rajeev-kumar-a24959226/"
            target="_blank"
          >
            <img src={Linkedin} alt="" />{" "}
          </a>
          <a href="https://www.instagram.com/rajjjeev.30/" target="_blank">
            <img src={Instagram} alt="" />{" "}
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div className="floating-div1"
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
        >
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div 
          className="floating-div2"
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
        >
          <FloatingDiv image={thumbup} txt1="Problem" txt2="Solver" />
        </motion.div>

        {/* Blur Div  */}
        <div className="blur" style={{ background: "rgb(238 210 255" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default intro;
