import React from 'react'
import './works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { motion } from 'framer-motion';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import { Link } from "react-scroll";

const works = () => {
  const transition = {duration: 2.5, type: 'spring'}
  return (
    <div className="works" id='Work'>

      <div className="awesome">
          <span>Work for all these</span>
          <span>Bands & Clients</span>
           {/* <span>I've been working as a freelancer from last 2+ years. and have worked with 20+  <br/>clients across these freelancing websites, and social media till now, <br /> and continues...<br /> </span> */}
          <span>I have established myself as a seasoned freelancer with a track record spanning over<br/> 2+ years, during which I have successfully collaborated with a diverse range of 20+ <br/>clients across various freelancing platforms and social media channels.</span>
          <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
            <button className="button s-button"> Hire Me </button>
          </Link>
          <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
      </div>


      <div className="w-right">

        <motion.div className="w-mainCircle" 
          initial={{ rotate: 180 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 2.5, type: "spring" }}

        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>

          <div className="w-secCircle">
          <Linkedin className='size' color='#0A66C2' size='3rem'/>
          </div>

          <div className="w-secCircle">
          <Insta className='size' color='red' size='3rem'/>
          </div>

          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>

         

        </motion.div>

         {/* Background Circle */}
         <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>

      </div>
    </div>
  );
};

export default works