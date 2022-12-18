import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import {
  descriptionContainer,
  descriptionHeading,
  description,
  descriptionText,
  descriptionImage,
  heading,
  text,
  greenText,
} from './home-description.module.css'

const HomeDescription = () => {
  return (

    <div className={descriptionContainer}>
      <div className={descriptionHeading}>
        Solving your problems by
      </div>
      <div className={description}>
        <div className={descriptionText}>
          <div className={heading}>User <span className={greenText}>Research</span></div>
          <div className={text}>
            Hoomans is an interactive, data-backed solution for qualitative research. The platform simplifies and automates the process, from participant recruitment and scheduling to data collection and analysis. We combine the best of qualitative research with the latest technology in order to give you actionable insights you need to make smarter decisions in your business.
          </div>
        </div>
        <div className={descriptionImage}>
          <StaticImage
            alt="User Research Illustration"
            src="../../images/user-research.svg"
          />
        </div>
      </div>
      <div className={description}>
        <div className={descriptionText}>
          <div className={heading}>Clear <span className={greenText}>Strategy</span></div>
          <div className={text}>
            Hoomans is an interactive, data-backed solution for qualitative research. The platform simplifies and automates the process, from participant recruitment and scheduling to data collection and analysis. We combine the best of qualitative research with the latest technology in order to give you actionable insights you need to make smarter decisions in your business.
          </div>
        </div>
        <div className={descriptionImage}>
          <StaticImage
            alt="User Research Illustration"
            src="../../images/strategy.svg"
          />
        </div>
      </div>
      <div className={description}>
        <div className={descriptionText}>
          <div className={heading}>Delightful <span className={greenText}>Products</span></div>
          <div className={text}>
            Hoomans is an interactive, data-backed solution for qualitative research. The platform simplifies and automates the process, from participant recruitment and scheduling to data collection and analysis. We combine the best of qualitative research with the latest technology in order to give you actionable insights you need to make smarter decisions in your business.
          </div>
        </div>
        <div className={descriptionImage}>
          <StaticImage
            alt="User Research Illustration"
            src="../../images/delightful-products.svg"
          />
        </div>
      </div>
      <div className={description}>
        <div className={descriptionText}>
          <div className={heading}>Scaling & <span className={greenText}>Beyond</span></div>
          <div className={text}>
            Hoomans is an interactive, data-backed solution for qualitative research. The platform simplifies and automates the process, from participant recruitment and scheduling to data collection and analysis. We combine the best of qualitative research with the latest technology in order to give you actionable insights you need to make smarter decisions in your business.
          </div>
        </div>
        <div className={descriptionImage}>
          <StaticImage
            alt="User Research Illustration"
            src="../../images/scaling.svg"
          />
        </div>
      </div>
      <div className={description}>
        <div className={descriptionText}>
          <div className={heading}>Talent <span className={greenText}>Scout</span></div>
          <div className={text}>
            Hoomans is an interactive, data-backed solution for qualitative research. The platform simplifies and automates the process, from participant recruitment and scheduling to data collection and analysis. We combine the best of qualitative research with the latest technology in order to give you actionable insights you need to make smarter decisions in your business.
          </div>
        </div>
        <div className={descriptionImage}>
          <StaticImage
            alt="User Research Illustration"
            src="../../images/talent-scout.svg"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeDescription
