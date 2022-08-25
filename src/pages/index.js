import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import Hero from '../components/hero'


const IndexPage = () => {
  return (
    <Layout pageTitle="Hoomans">
      <Hero />
      {/* <StaticImage
       alt="Hoomans Logo"
       src="../images/hoomans_logo_black.png"
      /> */}
    </Layout>
  )
}

export const Head = () => <Seo title="Hoomans" />

export default IndexPage