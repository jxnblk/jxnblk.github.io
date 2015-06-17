
var React = require('react')

var About = React.createClass({

  render: function() {
    return (
      <section id="about" className="py3">
        <p className="h3 m0">{this.props.byline}</p>
      </section>
    )
  }

})

module.exports = About

