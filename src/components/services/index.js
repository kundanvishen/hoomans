import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
  ProductDesignIcon,
  ProductDevIcon,
  SocialMediaIcon,
  CyberSecurityIcon,
  StaffingSolutionsIcon,
  ArtificialIntelIcon
} from '../../components/icons'

import {
  servicesContainer,
  servicesHeading,
  servicesLabel,
  greenText,
  servicesBannerContainer,
  servicesBannerRow,
  serviceBanner,
  bannerLogo,
  bannerHeading,
  bannerDescription,
} from './services.module.css'

const Services = () => {
  return (

    <div className={servicesContainer}>
      <div className={servicesHeading}>
        {/* We Create Amazing Digital Experiences */}
        <div>We Create an Amazing</div>
        <div>Digital Experience</div>
      </div>
      <div className={servicesLabel}>
        Our <span className={greenText}>Services</span>
      </div>
      <div className={servicesBannerContainer}>
        <div className={servicesBannerRow}>
          <div className={serviceBanner}>
            <div className={bannerLogo}>
              <ProductDesignIcon />
            </div>
            <div className={bannerHeading}>
              Product Designing
            </div>
            <div className={bannerDescription}>
            At Hoomans, we will work with you to understand your needs and goals, and use a combination of research, analysis, and design expertise to develop concepts for new products or improve existing ones.
            </div>
          </div>
          <div className={serviceBanner}>
            <div className={bannerLogo}>
              <SocialMediaIcon />
            </div>
            <div className={bannerHeading}>
              Social Media Management
            </div>
            <div className={bannerDescription}>
            We will help you to build and maintain a strong presence on social media platforms to connect with your customers, build brand awareness, and drive engagement and conversions on social media.
            </div>
          </div>
          <div className={serviceBanner}>
            <div className={bannerLogo}>
              <ProductDevIcon />
            </div>
            <div className={bannerHeading}>
              Product Development
            </div>
            <div className={bannerDescription}>
            We will help you to stay competitive in today's rapidly-changing market and bring high-quality, innovative products to your customers.
            Our team is committed to providing comprehensive product development services, from initial concept development to production and launch.
            </div>
          </div>
          <div className={serviceBanner}>
            <div className={bannerLogo}>
              <CyberSecurityIcon />
            </div>
            <div className={bannerHeading}>
              Cyber Security
            </div>
            <div className={bannerDescription}>
              We provide a range of cybersecurity services to help protect businesses and organizations from online threats. These services include network security assessments, penetration testing, security incident response, and security awareness training for employees.
            </div>
          </div>
          <div className={serviceBanner}>
            <div className={bannerLogo}>
              <StaffingSolutionsIcon />
            </div>
            <div className={bannerHeading}>
              Staffing Solutions
            </div>
            <div className={bannerDescription}>
              We provide staffing solutions to businesses and organizations in need of temporary or permanent employees. We would work with you to understand your staffing needs and goals, and we use our extensive network of qualified candidates to match you with the right talent.
            </div>
          </div>
          <div className={serviceBanner}>
            <div className={bannerLogo}>
              <ArtificialIntelIcon />
            </div>
            <div className={bannerHeading}>
              Artificial Intelligence
            </div>
            <div className={bannerDescription}>
              We provide a range of AI services to help businesses and organizations leverage the power of AI to improve their operations. These services include the development of custom AI solutions, integration of AI into existing systems and processes, and training and support to help clients get the most out of their AI investments.
            </div>
          </div>
        </div>
        <div className={servicesBannerRow}>

        </div>
      </div>
    </div>
  )
}

export default Services
