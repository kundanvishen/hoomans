import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ComingSoon from '../components/coming-soon'

const ServicesPage = () => {
  return (
    <Layout pageTitle="Services">
      <ComingSoon />
    </Layout>
  )
}

export const Head = () => <Seo title="Services" />

export default ServicesPage