
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
      <header className="px3">
        <div className="border-bottom border-thick border-darken-1">
          <div className="flex flex-center flex-wrap py2 mxn1">
            <a href="/" className="flex-none h3 block px1 black">
              <Avatar />
            </a>
            <div className="flex-auto flex flex-baseline">
              <h1 className="h5 mt0 mb0 mr1">{this.props.title}</h1>
              <span>|</span>
              <p className="h5 bold m0 ml1">{this.props.name}</p>
            </div>
            <nav>
              {this.props.headerLinks.map(this.renderLink)}
            </nav>
          </div>
        </div>
      </header>
    )
  }

});

