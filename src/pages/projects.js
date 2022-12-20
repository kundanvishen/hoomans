import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ComingSoon from '../components/coming-soon'

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <ComingSoon />
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectsPage