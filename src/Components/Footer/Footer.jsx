import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} style={{width:'100%'}} />

        <div className="f-content">

            <span>rajeevkushwaha1812@gmail.com</span>
            <div className="f-icons">
                <a href="https://www.instagram.com/rajjjeev.30/" target="_blank" rel="noopener noreferrer">
                    <Insta className='size' color='white' size='3rem' />
                </a>

                <a href="https://www.linkedin.com/in/rajeev-kumar-a24959226/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className='size' color='white' size='3rem'/>
                </a>

                <a href="https://github.com/rajeev-30" target="_blank" rel="noopener noreferrer">
                    <Github className='size' color='white' size='3rem'/>
                </a>
                
                
            </div>

        </div>

    </div>
  )
}

export default Footer