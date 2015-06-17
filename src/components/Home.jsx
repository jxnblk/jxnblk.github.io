
var React = require('react')

var FeaturedProjects = require('./FeaturedProjects.jsx')
var OtherProjects = require('./OtherProjects.jsx')
var About = require('./About.jsx')

var Home = React.createClass({

  render: function() {
    return (
      <main>
        <FeaturedProjects {...this.props} />
        <OtherProjects {...this.props} />
        <About {...this.props} />
      </main>
    )
  }

})

module.exports = Home

