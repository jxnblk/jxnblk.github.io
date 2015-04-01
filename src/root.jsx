
var React = require('react');

var Html = require('react-html');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Home = require('./home.jsx');

module.exports = React.createClass({

  render: function() {
    var script = this.props.baseUrl + this.props.script;
    var path = this.props.baseUrl + this.props.path;
    return (
      <Html {...this.props} script={script}>
        <div className="flex flex-column"
          style={{ minHeight: '100vh' }}>
          <Header {...this.props} />
          <div className="flex-auto px3">
            <Home {...this.props} />
          </div>
          <Footer {...this.props} />
          <script src="js/ga.js" />
        </div>
      </Html>
    )
  }

});

