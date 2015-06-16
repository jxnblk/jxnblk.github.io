
var React = require('react')

var Header = require('./Header.jsx')
var Footer = require('./Footer.jsx')
var Home = require('./Home.jsx')
var css = require('../style.css')

var Root = React.createClass({

  getInitialState: function() {
    return {
      color: 'navy',
      backgroundColor: 'white',
      theme: 0,
    }
  },

  toggleTheme: function() {
    var i = this.state.theme
    var themes = [
      { color: 'navy', backgroundColor: 'white' },
      { color: 'blue', backgroundColor: 'white' },
      { color: 'red', backgroundColor: 'white' },
      { color: 'maroon', backgroundColor: 'white' },
      { color: 'maroon', backgroundColor: 'teal' },
      { color: 'navy', backgroundColor: 'teal' },
    ]
    if (i < themes.length - 1) {
      i++
    } else {
      i = 0
    }
    this.setState({ theme: i })
    this.setState(themes[i])
  },

  handleKeydown: function(e) {
    switch(e.keyCode) {
      case 90:
        e.preventDefault()
        this.toggleTheme()
        break
    }
  },

  componentDidMount: function() {
    var self = this
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', self.handleKeydown)
    }
  },

  render: function() {
    var path = this.props.baseUrl + this.props.path
    var initialProps = {
      __html: safeStringify(this.props)
    }
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{this.props.title}</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <div className={'flex flex-column ' + this.state.color + ' bg-' + this.state.backgroundColor}
            style={{ minHeight: '100vh' }}>
            <Header {...this.props} />
            <div className="flex-auto px2 sm-px3">
              <Home {...this.props} {...this.state} />
            </div>
            <Footer {...this.props} />
            <script dangerouslySetInnerHTML={{ __html: this.props.scripts.ga }} />
          </div>
        </body>
      </html>
    )
  }

})

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

module.exports = Root

