// Step 1: Import React
import { Link } from 'gatsby'
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

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Us">
      <div style={pageStyles}>
        <p style={paragraphStyles}>
          Reach us at ✍️ <Link to="mailto:team@hoomans.tech">
            team@hoomans.tech</Link>
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Us" />

export default ContactPage