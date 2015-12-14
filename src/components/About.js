
import React from 'react'

const About = ({ ...props }) => (
  <section id='about' className='mb4 md-col-10'>
    <p className='h3 m0'>{props.byline}</p>
  </section>
)

export default About

