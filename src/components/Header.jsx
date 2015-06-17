
var React = require('react')
var Avatar = require('jxnblk-avatar')

var Header = React.createClass({

  renderLink: function(link) {
    var href = link.href
    return (
      <a href={href}
        key={link.title}
        className="m1 btn btn-link">
        {link.title}
      </a>
    )
  },

  render: function() {
    return (
      <header className="px2 sm-px3">
        <div className="flex flex-center flex-wrap py2 mxn1">
          <a href="/" className="block mr1">
            <Avatar size={40} />
          </a>
          <div className="flex-auto">
            <h1 className="h4 m0">{this.props.title}</h1>
          </div>
          <nav>
            {this.props.headerLinks.map(this.renderLink)}
          </nav>
        </div>
      </header>
    )
  }

})

module.exports = Header

