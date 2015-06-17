
import React from 'react'

class ColorableLogo extends React.Component {

  render () {
    let styles = {
      text: {
        fontFamily: 'Avenir Next, Helvetica Neue, Helvetica, sans-serif',
        fontSize: 20,
        fontWeight: 600,
        textAnchor: 'middle'
      }
    }
    return (
      <svg viewBox='0 0 32 32'
        width='64'
        height='64'
        fill='transparent'>
        <text x='16' y='22'
          width='32'
          fill='currentcolor'
          style={styles.text}>
          Aa 
        </text> 
      </svg>
    )
  }

}

export default ColorableLogo

