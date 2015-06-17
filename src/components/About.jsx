
var React = require('react')

var About = React.createClass({

  render: function() {
    return (
      <section id="about"
        className="py4 border-bottom border-thick border-darken-1">
        <h1 className="h5 mt0">About</h1>
        <p className="h3 m0">{this.props.byline}</p>
      </section>
    )
  }

})

module.exports = About

