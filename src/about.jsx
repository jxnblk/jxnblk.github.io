
var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <section id="about"
        className="py4 border-bottom border-thick border-aqua">
        <h1 className="h6 caps mt0">About</h1>
        <p className="h3 m0">{this.props.byline}</p>
      </section>
    )
  }

});
