import * as React from 'react'
import { Link } from 'gatsby'
import {
  heroBackground,
  heroText,
  heroContainer,
  subText,
  contactLink,
} from './hero.module.css'

const Hero = () => {
  return (
    <div className={heroContainer}>
      <div className={heroText}>
        Crafted Digital Experiences...
      </div>
      <div className={subText}>
        From thoughts and inception to delivery and beyond.
      </div>
      <div className={contactLink}>
        <Link to="/contact">Get Started</Link>
      </div>
      <div className={heroBackground}></div>
    </div>
  )
}

export default Hero