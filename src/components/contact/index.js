import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { MailIcon, PhoneIcon } from '../icons'
import {
  contactContainer,
  pageStyles,
  col,
  contactCard,
  subHeading,
  greenText,
  icon,
} from './contact.module.css'

const Contact = () => {
  return (
    <div className={contactContainer}>
      <div className={pageStyles}>
        <div className={{...col, ...contactCard}}>
          <div className={subHeading}>Get in <span className={greenText}>touch</span> with us</div>
          <div>
          <span className={icon}><PhoneIcon color="black" /></span>
            +971-505424451
        </div>
        <div>
          <Link to="mailto:contact@hoomans.tech">
            <span className={icon}><MailIcon color="black" /></span>
            contact@hoomans.tech
          </Link>
        </div>
        </div>
        <div className={col}>
          <StaticImage
            alt="group of people"
            src="../../images/contact_page.png"
          />
        </div>

      {/* <div className={pageStyles}>
        <p style={paragraphStyles}>
          Reach us at ✍️ <Link to="mailto:team@hoomans.tech">
            team@hoomans.tech</Link>
        </p>
      </div> */}
      </div>
    </div>
  )
}

export default Contact