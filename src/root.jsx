
var React = require('react');

var Html = require('react-html');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Home = require('./home.jsx');

var Root = React.createClass({

  getInitialState: function() {
    return {
      color: 'navy',
      backgroundColor: 'white',
      theme: 0,
    }
  },

  toggleTheme: function() {
    var i = this.state.theme;
    var themes = [
      { color: 'navy', backgroundColor: 'white' },
      { color: 'blue', backgroundColor: 'white' },
      { color: 'red', backgroundColor: 'white' },
      { color: 'maroon', backgroundColor: 'white' },
      { color: 'maroon', backgroundColor: 'teal' },
      { color: 'navy', backgroundColor: 'teal' },
    ];
    if (i < themes.length - 1) {
      i++;
    } else {
      i = 0;
    }
    console.log(i);
    this.setState({ theme: i });
    this.setState(themes[i]);
  },

  handleKeydown: function(e) {
    //console.log('keydown', e.keyCode);
    switch(e.keyCode) {
      case 90:
        e.preventDefault();
        this.toggleTheme();
        break;
    }
  },

  componentDidMount: function() {
    var self = this;
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', self.handleKeydown);
    }
  },

  render: function() {
    //var script = this.props.baseUrl + this.props.script;
    var path = this.props.baseUrl + this.props.path;
    var initialProps = {
      __html: safeStringify(this.props)
    };
    return (
      <Html {...this.props}>
        <div className={'flex flex-column ' + this.state.color + ' bg-' + this.state.backgroundColor}
          style={{ minHeight: '100vh' }}>
          <Header {...this.props} />
          <div className="flex-auto px2 sm-px3">
            <Home {...this.props} {...this.state} />
          </div>
          <Footer {...this.props} />
          {/*
          <script id="initial-props" type="application/json" dangerouslySetInnerHTML={initialProps} />
          <script src="bundle.js" />
          */}
          <script src="js/ga.js" />
        </div>
      </Html>
    )
  }

});

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

module.exports = Root;

