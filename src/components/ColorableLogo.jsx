
import React from 'react'

class ColorableLogo extends React.Component {

  render () {
    let size = this.props.size
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
        width={size}
        height={size}
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

ColorableLogo.defaultProps = {
  size: 48
}

export default ColorableLogo

