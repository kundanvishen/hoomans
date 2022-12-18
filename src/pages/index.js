import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import Hero from '../components/hero'
import Services from '../components/services'
import HomeDescription from '../components/home-description'
import ContactBanner from '../components/contact-banner'


const IndexPage = () => {
  return (
    <Layout pageTitle="Hoomans">
      <Hero />
      <Services />
      <HomeDescription />
      <ContactBanner />

      {/* <StaticImage
       alt="Hoomans Logo"
       src="../images/hoomans_logo_black.png"
      /> */}
    </Layout>
  )
}

export const Head = () => <Seo title="Hoomans" />

export default IndexPage