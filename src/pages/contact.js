// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Us">
      <p>Reach us at <a href="mailto:team@hoomans.tech">team@hoomans.tech</a>!</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Us" />

export default ContactPage