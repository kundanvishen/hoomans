import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ComingSoon from '../components/coming-soon'


const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
      <ComingSoon />
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />

export default AboutPage