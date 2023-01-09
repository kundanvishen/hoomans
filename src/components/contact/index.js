import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { MailIconDark, PhoneIconDark, PinIconDark } from '../icons'
import {
  container,
  contactInfo,
  contactImage,
  heading,
  greenText,
  icon,
} from './contact.module.css'

import ContactsPageImg from  '../../images/contact_page.png'

const Contact = () => {
  return (
    <div className={container}>
      <div className={contactInfo}>
        <div className={heading}>
          Get in <span className={greenText}>touch</span> with us
        </div>
        <div>
          <span className={icon}><PhoneIconDark /></span>
            +971-505424451
        </div>
        <div>
          <Link to="mailto:contact@hoomans.tech">
            <span className={icon}><MailIconDark /></span>
            contact@hoomans.tech
          </Link>
        </div>
        <div>
          <span className={icon}><PinIconDark /></span>
          Walk in to our office in Dubai or Delhi
        </div>
      </div>
      <div className={contactImage}>
        {/* <StaticImage
          alt="group of people"
          src="../../images/contact_page.png"
        /> */}
        <img src={ContactsPageImg} alt="Group of Hoomans" />
      </div>

    </div>
  )
}

export default Contact