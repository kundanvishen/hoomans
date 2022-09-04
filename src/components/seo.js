import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const pageTitle = (title === 'Hoomans') ? title : `${title} - ${data.site.siteMetadata.title}`
  return (
    <title>{pageTitle}</title>
  )
}

export default Seo