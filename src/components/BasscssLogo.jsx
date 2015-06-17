
import React from 'react'
import clrs from 'colors.css'

class BasscssLogo extends React.Component {

  render() {
    return (
      <svg viewBox='0 0 40 20'
        width='80'
        height='40'
        fill={clrs.aqua}>
        <path d='M20 0 L24 8 L40 6 L20 16 L16 8 L0 10 z' />
      </svg>
    )
  }

}

export default BasscssLogo

