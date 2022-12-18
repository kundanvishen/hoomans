import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { RightArrowIcon } from '../../components/icons'
import {
  heroBackground,
  heroText,
  heroContainer,
  subText,
  contactLink,
  corners,
  top,
  left,
  right,
  bottom,
  rectangle,
  heroImage,
  servicesContainer,
  servicesHeading
} from './hero.module.css'

const Hero = () => {
  return (
    <div className={heroContainer}>
      <div className={heroText}>
        <div className={corners}>
          <div className={`${top} ${left}`}></div>
          <div className={`${top} ${right}`}></div>
          <div className={`${bottom} ${right}`}></div>
          <div className={`${bottom} ${left}`}></div>
          Crafted
        </div>
        <div>
          Digital Experiences
        </div>
        <div className={subText}>
          From thoughts and inception to delivery and beyond.
        </div>
        <div className={contactLink}>
          <Link to="/contact">Get Started &nbsp;&nbsp; <RightArrowIcon /></Link>
        </div>
      </div>
      <div className={heroBackground}>
        <div className={rectangle}></div>
        <StaticImage
          alt="Hero background"
          src="../../images/icons/hero-bg.svg"
          className={heroImage}
        />
      </div>
    </div>
  )
}

export default Hero