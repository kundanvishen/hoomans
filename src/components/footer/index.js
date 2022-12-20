import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Logo from '../logo'
import { BehanceIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon, TwitterIcon } from '../icons'

import {
  footerContainer,
  right,
  left,

  logoContainer,
  linksContainer,
  logo,
  contactsInfo,
  socialLinks,

  row,
  footerLogo,
  hzLine,
  construct,
  icon,
} from './footer.module.css'

const Footer = () => {
  return (
    <footer className={footerContainer}>
      <div className={left}>
        <div className={logoContainer}>
          <div className={logo}>
            <div>
              <Logo color='white' height='1.2rem' />
            </div>
            <div>Copyright © 2022. All rights reserved</div>
            <div>Terms of Use & Privacy Policy</div>
          </div>
        </div>
        <div className={linksContainer}>
          <div>Quick Links</div>
          <div><Link to="/">Home</Link></div>
          {/* <div>Blogs</div> */}
          {/* <div>Projects</div> */}
          <div>Services</div>
          <div><Link to="/careers">Careers</Link></div>
          <div><Link to="/contact">Contact Us</Link></div>

        </div>
      </div>
      <div className={right}>
        <div className={contactsInfo}>
          <div>Get in touch with us</div>
          <div>
            <span className={icon}><PhoneIcon /></span>
              +971-505424451
          </div>
          <div>
            <Link to="mailto:contact@hoomans.tech">
              <span className={icon}><MailIcon /></span>
              contact@hoomans.tech
            </Link>
          </div>
          <div>
            <span className={icon}><PinIcon /></span>
            Dubai & Delhi
          </div>
        </div>
        <div className={socialLinks}>
          <div>Follow us</div>
          <div>
            <Link to="/">
              <span className={icon}><BehanceIcon /></span>
            </Link>
            <Link to="/">
              <span className={icon}><InstagramIcon /></span>
            </Link>
            <Link to="/">
              <span className={icon}><FacebookIcon /></span>
            </Link>
            <Link to="/">
              <span className={icon}><TwitterIcon /></span>
            </Link>
            <Link to="/">
              <span className={icon}><LinkedinIcon /></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer