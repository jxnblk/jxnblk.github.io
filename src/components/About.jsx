
import React from 'react'

class About extends React.Component {

  render () {
    return (
      <section id='about' className='mb4 md-col-10'>
        <p className='m0'>{this.props.byline}</p>
      </section>
    )
  }

}

export default About

