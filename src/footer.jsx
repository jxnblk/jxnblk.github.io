
var React = require('react');
var Router = require('react-router-component');
var Link = Router.Link;

module.exports = React.createClass({

  renderLink: function(link) {
    var href = this.props.baseUrl + link.link;
    return (
      <a href={href}
        key={'footer-' + link.name}
        className="button button-transparent">
        {link.name}
      </a>
    )
  },

  render: function() {
    return (
      <footer className="px3 py3">
        <div className="flex flex-baseline flex-wrap mxn2">
          <h1 className="h4 mt0 mb0 mr1">
            <Link href="/" className="h4 button button-transparent">{this.props.title}</Link>
          </h1>
          <div className="flex-auto" />
          <div>
            {this.props.social_networks.map(this.renderLink)}
          </div>
        </div>
      </footer>
    )
  }

});

