// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
      <p>Hi, we are Hoomans, and we create awesome things!</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />

export default AboutPage