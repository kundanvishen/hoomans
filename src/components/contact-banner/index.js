import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
  MailIcon,
} from '../../components/icons'

import {
  container,
  card,
  textContainer,
  left,
  right,
  heading,
  button,
  text,
  greenText,
} from './contact-banner.module.css'

import messageImgUrl from '../../images/message-card.svg'

const ContactBanner = () => {
  return (

    <div className={container}>
      <div className={card}>
        <div className={left}>
          <div className={textContainer}>
            <div className={heading}>
              <div>
                Enough Talk, Let's
              </div>
              <div>
                <span className={greenText}>Build</span> Something.
              </div>
            </div>
            <div className={text}>
              We’re here to help and answer any question you might have. We look forward to hearing from you.
            </div>
            <a href="mailto:contact@hoomans.tech" className={button}>
              <MailIcon /> &nbsp;contact@hoomans.com
            </a>
          </div>
        </div>
        <div className={right}>
          {/* <StaticImage
            src='../../images/message-card.svg'
          /> */}
          <img src={messageImgUrl} alt="Message Card" />
        </div>
      </div>
    </div>
  )
}

export default ContactBanner
