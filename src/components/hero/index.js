import * as React from 'react'
import { Link } from 'gatsby'
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
          Crafting
        </div>
        <div>
          Digital Experiences...
        </div>
      </div>
      <div className={subText}>
        From thoughts and inception to delivery and beyond.
      </div>
      <div className={contactLink}>
        <Link to="/contact">Contact Us</Link>
      </div>
      {/* <div className={heroBackground}></div> */}
    </div>
  )
}

export default Hero