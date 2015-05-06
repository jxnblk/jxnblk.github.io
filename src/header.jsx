
var React = require('react');
var Avatar = require('./avatar.jsx');

module.exports = React.createClass({

  renderLink: function(link) {
    var href = link.href;
    return (
      <a href={href}
        key={link.title}
        className="m1 button button-link">
        {link.title}
      </a>
    )
  },

  render: function() {
    return (
      <header className="px2 sm-px3">
        <div className="flex flex-center flex-wrap py2 mxn1">
          <a href="/" className="flex-none h3 block px1">
            <Avatar />
          </a>
          <div className="flex-auto xflex xflex-baseline">
            <h1 className="h3 m0">{this.props.title}</h1>
            <p className="h5 bold m0">{this.props.name}</p>
          </div>
          <nav>
            {this.props.headerLinks.map(this.renderLink)}
          </nav>
        </div>
      </header>
    )
  }

});

