import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'
import Footer from './footer'

import { 
  container,
  heading,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = (pageTitle === 'Hoomans') ? pageTitle: `${pageTitle} | ${data.site.siteMetadata.title}`

  return (
    <div className={container}>
      {console.log(title)}
      <title>
        {title}
      </title>
      {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
      <Navbar />
      <main>
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        <div className={container}>
          {children}
        </div>
      </main>
      <Footer />

    </div>
  )
}

export default Layout
