
import React from 'react'
import { padLeft } from 'lodash'
import hello from 'hello-color'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import css from '../style.css'

function randomHex () {
  let hex = Math.floor(Math.random() * 16777215).toString(16)
  return '#' + padLeft(hex, 6, 0)
}

class Root extends React.Component {

  constructor() {
    super()
    this.state = {
      color: 'black',
      backgroundColor: 'white',
      psychedelic: false,
      theme: 0
    }
    this.toggleTheme = this.toggleTheme.bind(this)
    this.handleKeydown = this.handleKeydown.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  toggleTheme () {
    const color = randomHex()
    const theme = hello({
      color,
      contrast: 3,
      saturation: .5,
    })
    this.setState({
      color: theme.color,
      backgroundColor: theme.base
    })
  }

  handleKeydown (e) {
    switch(e.keyCode) {
      case 90:
        e.preventDefault()
        this.toggleTheme()
        this.setState({ psychedelic: true })
        break
    }
  }

  handleMouseEnter (e) {
    if (this.state.psychedelic) {
      this.toggleTheme()
    }
  }

  handleMouseLeave (e) {
    /*
    this.setState({
      color: '#111',
      backgroundColor: '#fff'
    })
    */
  }

  componentDidMount () {
    var self = this
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', self.handleKeydown)
    }
  }

  render() {
    const initialProps = {
      __html: safeStringify(this.props)
    }

    const { color, backgroundColor } = this.state

    const inverse = `
      .inverse:hover {
        color: ${backgroundColor};
        background-color: ${color};
      }
    `

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{this.props.title}</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <style dangerouslySetInnerHTML={{ __html: css }} />
          <style dangerouslySetInnerHTML={{ __html: inverse }} />
        </head>
        <body
          style={{
            color,
            backgroundColor,
            transition: 'color .1s ease-out, background-color .3s ease-out'
          }}
          className={[
            'px2 sm-px2 lg-px4'
          ].join(' ')}>
          <div className='flex flex-column '
            style={{ minHeight: '100vh' }}>
            <Header {...this.props}
              toggleTheme={this.toggleTheme} />
            <div className="flex-auto">
              <Home
                {...this.props}
                {...this.state}
                handleMouseEnter={this.handleMouseEnter}
                handleMouseLeave={this.handleMouseLeave} />
            </div>
            <Footer {...this.props} />
            <script id='initial-props'
              type='application/json'
              dangerouslySetInnerHTML={initialProps} />
            <script src='bundle.js' />
            <script dangerouslySetInnerHTML={{ __html: this.props.scripts.ga }} />
          </div>
        </body>
      </html>
    )
  }

}

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

export default Root

