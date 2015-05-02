
var React = require('react');
var Avatar = require('./avatar.jsx');

module.exports = React.createClass({

  renderLink: function(link) {
    var href = link.href;
    return (
      <a href={href}
        key={link.title}
        className="button button-transparent">
        {link.title}
      </a>
    )
  },

  render: function() {
    return (
      <header className="px3">
        <div className="border-bottom border-thick border-aqua">
          <div className="flex flex-center flex-wrap py2 mxn2">
            <a href="/" className="flex-none h2 block px2 black">
              <Avatar />
            </a>
            <div className="flex-auto flex flex-baseline">
              <h1 className="h3 mt0 mb0 mr1">{this.props.title}</h1>
              <p className="h5 bold m0">{this.props.name}</p>
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

