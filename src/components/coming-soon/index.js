import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { MailIconDark, PhoneIconDark, PinIconDark } from '../icons'
import Section from '../section'
import {
  container,
  contactInfo,
  contactImage,
  contactLink,
  heading,
  subText,
  icon,
} from './coming-soon.module.css'

import ComingSoonImg from '../../images/coming-soon.svg'

const ComingSoon = () => {
  return (
    <Section>
      <div className={container}>
        <div className={contactInfo}>
          <div className={heading}>
            Coming Soon...
          </div>
          <div className={subText}>
            We are currently working hard building this page. Want to be the first one to work with us?
          </div>
          <div className={contactLink}>
            <Link to="/contact">Get in touch</Link>
          </div>
        </div>
        <div className={contactImage}>
          {/* <StaticImage
            alt="group of people"
            src="../../images/coming-soon.svg"
          /> */}
          <img src={ComingSoonImg} alt="Coming Soon" />
        </div>
      </div>
    </Section>
  )
}

export default ComingSoon