// Step 1: Import React
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import Contact from '../components/contact'
import Seo from '../components/seo'



const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Us">
      <Contact />
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Us" />

export default ContactPage