
var React = require('react');

var FeaturedProjects = require('./featured-projects.jsx');
var About = require('./about.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <main>
        <FeaturedProjects {...this.props} />
        <About {...this.props} />
      </main>
    )
  }

});

