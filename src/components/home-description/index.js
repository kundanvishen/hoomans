import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Section from '../section'

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
    <Section>
      <div className={descriptionContainer}>
        <div className={descriptionHeading}>
          Solving your problems by
        </div>
        <div className={description}>
          <div className={descriptionText}>
              <div className={heading}>User <span className={greenText}>Research</span></div>
              <div className={text}>
                <Section>
                  User research is an essential part of the problem-solving process, as it helps to ensure that solutions are grounded in a deep understanding of the needs and behaviors of the people who will be using them.
                  <br />
                  By involving users in the problem-solving process, it is possible to create solutions that are more effective, efficient, and user-friendly, and that better meet the needs and expectations of the target audience.
                </Section>
              </div>
          </div>
          <Section className={descriptionImage}>
            <StaticImage
              alt="User Research Illustration"
              src="../../images/user-research.svg"
            />
          </Section>
        </div>
        <div className={description}>
          <div className={descriptionText}>
            <div className={heading}>Clear <span className={greenText}>Strategy</span></div>
            <div className={text}>
              <Section>
                Having a clear strategy for problem-solving is essential for finding effective and efficient solutions. A clear strategy helps to define the problem, identify the root cause, and outline a plan of action for addressing it.
                One key aspect of a clear problem-solving strategy is setting specific and measurable goals for the solution. This helps to ensure that progress can be tracked and that the solution is actually addressing the problem in a meaningful way.
              </Section>
            </div>
          </div>
          <div className={descriptionImage}>
            <Section>
              <StaticImage
                alt="User Research Illustration"
                src="../../images/strategy.svg"
                />
            </Section>
          </div>
        </div>
        <div className={description}>
          <div className={descriptionText}>
            <div className={heading}>Delightful <span className={greenText}>Products</span></div>
            <div className={text}>
              <Section>
                Making delightful products involves creating products that are not only functional and effective, but that also provide a positive and enjoyable user experience.
                By focusing on usability and simplicity and adding value through innovation and uniqueness, we create products which are delightful and solve complex problems in a beautiful and intuitive way.
              </Section>
            </div>
          </div>
          <div className={descriptionImage}>
            <Section>
              <StaticImage
                alt="User Research Illustration"
                src="../../images/delightful-products.svg"
                />
            </Section>
          </div>
        </div>
        <div className={description}>
          <div className={descriptionText}>
            <div className={heading}>Scaling & <span className={greenText}>Beyond</span></div>
            <div className={text}>
              <Section>
                We help you in expanding the reach and adoption of your product to a larger market or audience. We can identify and target a specific market or audience on your behalf, develop a clear value proposition for your product, build a strong brand, help you in marketing and sales efforts and help you plan for scalability.
              </Section>
            </div>
          </div>
          <div className={descriptionImage}>
            <Section>
              <StaticImage
                alt="User Research Illustration"
                src="../../images/scaling.svg"
                />
            </Section>
          </div>
        </div>
        <div className={description}>
          <div className={descriptionText}>
            <div className={heading}>Talent <span className={greenText}>Scout</span></div>
            <div className={text}>
              <Section>
                We offer ongoing support and management of the staffing process to ensure a smooth and successful experience for both our clients and our talent. With our staffing solutions, our clients can find the talent they need to grow and succeed, while our talent can find fulfilling and rewarding employment opportunities.
              </Section>
            </div>
          </div>
          <div className={descriptionImage}>
            <Section>
              <StaticImage
                alt="User Research Illustration"
                src="../../images/talent-scout.svg"
                />
            </Section>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default HomeDescription
