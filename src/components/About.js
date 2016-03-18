
import React from 'react'

const sx = {
  byline: {
    fontFamily: 'Athelas, Georgia, serif',
    // letterSpacing: `-${1/32}em`,
    lineHeight: 1.125
  }
}

const About = ({ ...props }) => (
  <section id='about' className='mb3'>
    <p className='h0 m0' style={sx.byline}>
      Web designer-developer <br className='xs-hide' />
      specializing in <br className='xs-hide' />
      modular design systems <br className='xs-hide' />
      <i>&</i> front-end architecture.
    </p>
    <p className='h5 bold'>
      Currently at <a href='//bondstreet.com'>Bond Street</a>. <br className='sm-hide md-hide lg-hide' />
      Based in Brooklyn, NY.
    </p>
  </section>
)

export default About

