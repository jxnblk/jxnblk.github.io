
import React from 'react'

class CssStatsLogo extends React.Component {

  render () {
    return (
      <svg viewBox='0 0 16 16'
        width='64'
        height='64'
        fill='currentcolor'>
        <g fontFamily='Helvetica' fontSize='12px' fontWeight='bold'>
          <text x='0.5' y='11'>{'{'}</text>
          <text x='15.5' y='11' textAnchor='end'>{'}'}</text>
        </g>
        <rect x='4.5' y='7' width='2.5' height='4'/>
        <rect x='8.5' y='5' width='2.5' height='6'/>
      </svg>
    )
  }

}

export default CssStatsLogo

