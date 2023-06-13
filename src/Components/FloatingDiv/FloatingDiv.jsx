import React from 'react'
import './FloatingDiv.css'
import { motion } from 'framer-motion';

const FloatingDiv = ({image, txt1,txt2}) => {
  const transition = {duration: 1, type: 'spring'}
  return (
   <motion.div className="floatingdiv">
        <img src={image} alt="" />
        <span>
            {txt1} <br />
            {txt2}
        </span>
   </motion.div>
  )
}

export default FloatingDiv