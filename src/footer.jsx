
var React = require('react');

module.exports = React.createClass({

  renderLink: function(link) {
    var href = link.link;
    return (
      <a href={href}
        key={'footer-' + link.name}
        className="m1 button button-link">
        {link.name}
      </a>
    )
  },

  render: function() {
    return (
      <footer className="px3 py3">
        <div className="flex flex-baseline flex-wrap mxn1">
          <a href="/" className="m1 button button-link">{this.props.title}</a>
          <div className="flex-auto" />
          <div>
            {this.props.social_networks.map(this.renderLink)}
          </div>
        </div>
      </footer>
    )
  }

});

