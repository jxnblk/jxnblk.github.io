
var React = require('react');

var FeaturedProjects = require('./featured-projects.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <main>
        <FeaturedProjects {...this.props} />
      </main>
    )
  }

});

