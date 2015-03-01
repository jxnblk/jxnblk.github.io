
var React = require('react');
var Router = require('react-router-component');
var Link = Router.Link;

module.exports = React.createClass({

  renderLink: function(link) {
    var href = this.props.baseUrl + link.link;
    console.log('social nework link', link.link, link.name);
    return (
      <a href={href}
        key={'footer-' + link.name}
        className="button button-transparent">
        {link.name}
      </a>
    )
  },

  render: function() {
    console.log('footer props', this.props.social_networks);
    return (
      <footer className="px2">
        <div className="py2 border-top border-thick border-aqua">
          <div className="flex flex-baseline flex-wrap mxn2">
            <h1 className="h5 mt0 mb0 mr1">
              <Link href="/" className="button button-transparent">{this.props.title}</Link>
            </h1>
            <div className="flex-auto" />
            <div>
              {this.props.social_networks.map(this.renderLink)}
            </div>
          </div>
        </div>
      </footer>
    )
  }

});

