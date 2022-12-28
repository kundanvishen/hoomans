import * as React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Logo from '../logo'

import {
  header,
  logo,
  logoImage,
  mainNav,
  navLinkItem,
  navLinkText,
  contactUsButton,
  menubar,
  menuButton,
  sticky,
  open,
  changeMenu,
  bar1,
  bar2,
  bar3,
} from './navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollDirection = currentScrollPos > prevScrollPos ? "down" : "up";
      setPrevScrollPos(currentScrollPos);

      console.log(currentScrollPos);

      // if (scrollDirection === "down" && currentScrollPos > 350 && currentScrollPos < document.documentElement.scrollHeight - window.innerHeight-300) {
      if (scrollDirection === "down" && currentScrollPos > 350) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (

    <header>
      {isSticky ? (
        <nav className={`${menubar} ${isSticky ? sticky : null}`}>
          <div className={menuButton} onClick={() => setIsOpen(!isOpen)}>
            <div className={`${isOpen ? changeMenu : null}`}>
              <div className={bar1}></div>
              <div className={bar2}></div>
              <div className={bar3}></div>
            </div>
          </div>
          <div className={logo}>
            <Link to="/">
              <Logo className={logoImage} color='black' />
            </Link>
          </div>
          <ul className={isOpen ? open : ""}>
            {/* <li>
              <Link to="/">
                <Logo className={logoImage} color='black' />
              </Link>
            </li> */}
            <li className={navLinkItem}>
              <Link to="/careers" className={navLinkText}>Careers</Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/services" className={navLinkText}>Services</Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/projects" className={navLinkText}>Projects</Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>About</Link>
            </li>
            <li className={`${navLinkItem} ${contactUsButton}`}>
              <Link to="/contact" className={navLinkText}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      ) : null}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">
              <Logo className={logoImage} color='black' />
            </Link>
          </li>
          <li><Link to="/about" className={navLinkText}>About</Link></li>
          <li><Link to="/blog" className={navLinkText}>Blogs</Link></li>
          <li><Link to="/contact" className={navLinkText}>Contact Us</Link></li>
        </ul>
      </nav> */}
    </header>



    // Old Navbar
    // <header className={header}>
    //   <h1 className={logo}>
    //     <Link to="/">
    //       <StaticImage
    //         alt="Hoomans Logo"
    //         src="../../images/header-logo.png"
    //         className={logoImage}
    //       />
    //     </Link>
    //   </h1>
    //   <nav>
    //     <ul>
    //       <li className={navLinkItem}>
    //         <Link to="/" className={navLinkText}>Home</Link>
    //       </li>
    //       <li className={navLinkItem}>
    //         <Link to="/about" className={navLinkText}>About</Link>
    //       </li>
    //       <li className={navLinkItem}>
    //         <Link to="/blog" className={navLinkText}>Blogs</Link>
    //       </li>
          
    //       <li className={`${navLinkItem} ${contactUsButton}`}>
    //         <Link to="/contact" className={navLinkText}>Contact Us</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  )
}

export default Navbar
