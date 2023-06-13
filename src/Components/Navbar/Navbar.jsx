import React from 'react'
import './Navbar.css'
import Toogle from '../Toggle/Toggle'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
           <div className="n-name">Rajeev</div> 
           <Toogle/>
        </div>
        
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass= 'activeClass'>
                    <li className='h-effect'>Home</li>
                    </Link>

                    <Link spy={true} to='Skills' smooth={true} activeClass= 'activeClass'>
                    <li className='h-effect'>Skills</li>
                    </Link>

                    <Link spy={true} to='Experience' smooth={true} activeClass= 'activeClass'>
                    <li className='h-effect'>Experience</li>
                    </Link>
                    <Link spy={true} to='Work' smooth={true} activeClass= 'activeClass'>
                    <li className='h-effect'>Work</li>
                    </Link>

                    <Link spy={true} to='Portfolio' smooth={true} activeClass= 'activeClass'>
                    <li className='h-effect'>Portfolio</li>
                    </Link>

                    <Link spy={true} to='Testimonial' smooth={true} activeClass= 'activeClass'>
                    <li className='h-effect'>Testimonial</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true} activeClass= 'activeClass'>
                <button className="button n-button">
                    Contact Me
                </button>
            </Link>
        </div>

    </div>
  )
}

export default Navbar