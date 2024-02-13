import React from "react";
import "./Navbar.css";
import Toogle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import Bar from "@iconscout/react-unicons/icons/uil-bars";
import Cross from "@iconscout/react-unicons/icons/uil-times";
import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="n-name">Rajeev</div>
                <Toogle />
                <div className="menu-icon" onClick={handleMobileMenuToggle}>
                    <Bar color="orange" size="2.5rem" />
                </div>
            </div>

            <div
                className={`${isMobileMenuOpen ? "mobile-menu" : "n-right "}`}
            >
                <div className="n-list">
                    <ul>
                        <div className="cross-icon" onClick={handleMobileMenuToggle}>
                            <Cross color="orange" size="2.5rem" />
                        </div>

                        <Link
                            spy={true}
                            to="Navbar"
                            smooth={true}
                            activeClass="activeClass"
                        >
                            <li className="h-effect">Home</li>
                        </Link>

                        <Link
                            spy={true}
                            to="Skills"
                            smooth={true}
                            activeClass="activeClass"
                        >
                            <li className="h-effect">Skills</li>
                        </Link>

                        <Link
                            spy={true}
                            to="Experience"
                            smooth={true}
                            activeClass="activeClass"
                        >
                            <li className="h-effect">Experience</li>
                        </Link>
                        {/* <Link spy={true} to="Work" smooth={true} activeClass="activeClass">
                            <li className="h-effect">Work</li>
                        </Link> */}

                        <Link
                            spy={true}
                            to="Portfolio"
                            smooth={true}
                            activeClass="activeClass"
                        >
                            <li className="h-effect">Portfolio</li>
                        </Link>

                        {/* <Link
                            spy={true}
                            to="Testimonial"
                            smooth={true}
                            activeClass="activeClass"
                        >
                            <li className="h-effect">Testimonial</li>
                        </Link> */}
                        <Link
                            className="conactformobile"
                            spy={true}
                            to="Contact"
                            smooth={true}
                            activeClass="activeClass"
                        >
                            <li className="h-effect">Contact Me</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
                    <button className="button n-button">Contact Me</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
