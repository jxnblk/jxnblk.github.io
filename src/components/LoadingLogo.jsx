
import React from 'react'

class LoadingLogo extends React.Component {

  render () {
    let style = {
      width: 96,
      height: 96,
      backgroundImage: 'url(src/loading-bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      //backgroundColor: 'currentcolor'
    }

    return (
      <div style={style} />
    )
  }

}

export default LoadingLogo

