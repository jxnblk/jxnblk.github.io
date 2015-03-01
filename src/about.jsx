
var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <section id="about"
        className="py4 border-bottom border-aqua">
        <h1 className="h4 caps mt0">About</h1>
        {this.props.byline}
      </section>
    )
  }

});
