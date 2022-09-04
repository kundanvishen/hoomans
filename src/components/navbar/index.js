import * as React from 'react'
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
  contactUsButton
} from './navbar.module.css'

const Navbar = () => {
  return (

    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
             {/* <StaticImage
                alt="Hoomans Logo"
                src="../../images/header-logo.png"
                className={logoImage}
              /> */}
              <Logo className={logoImage} color='black' />
            </Link>
          </li>
          <li><Link to="/about" className={navLinkText}>About</Link></li>
          {/* <li><Link to="/blog" className={navLinkText}>Blogs</Link></li> */}
          <li><Link to="/contact" className={navLinkText}>Contact Us</Link></li>
        </ul>
      </nav>
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
