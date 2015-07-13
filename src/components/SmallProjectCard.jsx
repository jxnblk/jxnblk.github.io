
import React from 'react'

class SmallProjectCard extends React.Component {

  render () {
    let { href, name, description } = this.props
    return (
      <div className='sm-col-6 md-col-4 lg-col-3 mb2'>
        <a href={href}
          className='block btn link-card'
          title={'View ' + name}>
          <h2 className='h3 m0 link-underline'>
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

