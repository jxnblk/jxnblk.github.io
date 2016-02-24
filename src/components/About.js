
import React from 'react'

const About = ({ ...props }) => (
  <section id='about' className='max-width-3 mb3'>
    <p className='h3 m0'>{props.byline}</p>
  </section>
)

export default About

