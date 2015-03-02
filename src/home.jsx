
var React = require('react');

var FeaturedProjects = require('./featured-projects.jsx');
var OtherProjects = require('./other-projects.jsx');
var About = require('./about.jsx');
var Writing = require('./writing.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <main>
        <FeaturedProjects {...this.props} />
        <Writing {...this.props} />
        <OtherProjects {...this.props} />
        <About {...this.props} />
      </main>
    )
  }

});

