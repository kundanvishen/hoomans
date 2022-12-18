import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Logo from '../logo'
import { BehanceIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon, TwitterIcon } from '../icons'

import {
  footerContainer,
  row,
  footerLogo,
  hzLine,
  construct,
  icon,
} from './footer.module.css'

const Footer = () => {
  return (
    <footer className={footerContainer}>
      <div className={row}>
        <div  className={footerLogo} >
          <Link to="/">
            {/* <StaticImage
              alt="Hoomans Logo"
              src="../../images/hoomans.svg"
              className={footerLogo}
            /> */}
            <Logo color='white' height='1.2rem' />
          </Link>
        </div>
      </div>
      <div className={row}>
        <div><Link to="/">Home</Link></div>
        {/* <div>Blogs</div> */}
        {/* <div>Projects</div> */}
        {/* <div>Services</div> */}
        <div><Link to="/">Careers</Link></div>
        <div><Link to="/contact">Contact Us</Link></div>
      </div>
      <div className={row}>
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
      <div className={row}>
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
          Located in Dubai & Delhi
        </div>
      </div>
      <div className={hzLine}></div>
      <div className={construct}>
        Made with &nbsp;<span>❤️ </span>&nbsp; in India
      </div>
    </footer>
  )
}

export default Footer