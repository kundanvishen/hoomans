import * as React from 'react'

import { useState, useEffect, useRef } from 'react'

import {visible, invisible} from './section.module.css'

const Section = (props) => {

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(sectionRef.current)
        }
      })
    })

    observer.observe(sectionRef.current);
    return () => {
      if(sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      return null
    };
  }, [])

  return (
    <section ref={sectionRef} className={`${isVisible ? visible : invisible}`}>
      {props.children}
    </section>
  )

}

export default Section;