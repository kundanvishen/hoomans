import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { MailIconDark, PhoneIconDark, PinIconDark } from '../icons'
import {
  container,
  contactInfo,
  contactImage,
  contactLink,
  heading,
  icon,
} from './coming-soon.module.css'

const ComingSoon = () => {
  return (
    <div className={container}>
      <div className={contactInfo}>
        <div className={heading}>
          Coming Soon...
        </div>
        <div>
          We are currently working hard building this page. Want to be the first one to work with us ?
        </div>
        <div className={contactLink}>
          <Link to="/contact">Get in touch</Link>
        </div>
      </div>
      <div className={contactImage}>
        <StaticImage
          alt="group of people"
          src="../../images/coming-soon.svg"
        />
      </div>

    </div>
  )
}

export default ComingSoon