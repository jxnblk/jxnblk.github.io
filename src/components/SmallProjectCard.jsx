
import React from 'react'

class SmallProjectCard extends React.Component {

  render () {
    const { href, name, description, handleMouseEnter, handleMouseLeave } = this.props
    return (
      <div className='col-12 sm-col-6 md-col-4 lg-col-3 mb2'>
        <a href={href}
          className='block btn xlink-card inverse'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          title={'View ' + name}>
          <h2 className='h3 m0 xlink-underline'>
            {name}
          </h2>
          <p className='h5 regular m0'>
            {description}
          </p>
        </a>
      </div>
    )
  }

}

export default SmallProjectCard

