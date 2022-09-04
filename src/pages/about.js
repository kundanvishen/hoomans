import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const pageStyles = {
  color: "#232129",
  padding: "96px",
}

const paragraphStyles = {
  marginBottom: 48,
}

const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
      <div style={pageStyles}>
        <p style={paragraphStyles}>
          Hi 👋, we are Hoomans, and we create awesome things!.
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />

export default AboutPage