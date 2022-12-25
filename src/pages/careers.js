// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Careers from '../components/careers'
import Seo from '../components/seo'



const CareersPage = () => {
  return (
    <Layout pageTitle="Join hoomans">
      <Careers />
    </Layout>
  )
}

export const Head = () => <Seo title="Join Us" />

export default CareersPage