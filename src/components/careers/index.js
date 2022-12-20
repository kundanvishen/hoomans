import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { MailIconDark, PhoneIconDark, PinIconDark } from '../icons'
import {
  container,
  description,
  descriptionText,
  descriptionImage,
  heading,
  text,
  greenText,
  title
} from './careers.module.css'

const Careers = () => {
  return (
    <div className={container}>
      <div className={title}>
        At Hoomans, we have a working environment that is supportive, collaborative, and fosters open communication. It is a place where team members feel valued and respected, and where they are able to do their best work.
        Overall, we aim for the working environment that is positive, productive, and energizing, and where everyone feels supported and valued.

      </div>
      <div className={description}>
        <div className={descriptionText}>
          <div className={heading}>Our <span className={greenText}>Culture</span></div>
          <div className={text}>
            We encourage everyone to share ideas, ask questions, and seek help when needed. We want all members to have a sense of trust and mutual respect among team members, and everyone is able to contribute their unique skills and expertise to the team.
            Everyone is given the necessary resources and support to do their work effectively, and there is a clear sense of purpose and direction. We want folks to work at a pace that is comfortable for them, and there is a balance between the demands of the job and the need for rest and relaxation.
            
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
          <div className={heading}>Our <span className={greenText}>Benefits</span></div>
          <div className={text}>
            Apart from a great working environment, we also will provide you with a great Health and Dental Insurance, Vacation time. An annual health & fitness stipend of 1000 USD to keep you fit, 100% reimbursement of your Internet cost, an annual 1500 USD reimbursement to upgrade your home office. We also try to gather all our folks to a team retreat twice a year at great locations. You get to choose and pick your favorite hardware best suited for your role. Our standard kit has following: Fully specd Macbook Pro, 27" 4K Monitor, MX Series Keyboard and Mouse, ergonomic chair, standing desk, 1 pair of noise cancelling headphones.
            We hire across the globe and don't discriminate the pay on the basis of your location.
            
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
          <div className={heading}>Hiring <span className={greenText}>Process</span></div>
          <div className={text}>
            Our hiring process is a learning opportunity for you and us. We try to make it enjoyable for both of us.
            We offer honest communication and timely feedback, and expect the same from you during our interview process.
            After applying and getting successful application review, we invite you on an introductory call to explain the role, timeline, and to understand you more in detail. After a successful review, we would offer you a take home challenge to be completed by you. After submission of your challenge, we get on a call and discuss your approach and problem solving. At last stage, we would initiate the offer and joining date.
          </div>
        </div>
        <div className={descriptionImage}>
          <StaticImage
            alt="User Research Illustration"
            src="../../images/user-research.svg"
          />
        </div>
      </div>
    </div>
  )
}

export default Careers