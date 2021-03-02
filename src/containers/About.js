import React from 'react'
import Header from '../components/about/Header'
import Bio from '../components/about/Bio'


const About = (prop) => {
    return (
      <>
      <div id="about" className={prop.prop} />
      <Header prop={prop.prop} />
      <div className={prop.prop} />
      <Bio />
      <div className={prop.prop} />
      </>
      )
  }

export default About
