
import React from 'react'
import Avatar from 'jxnblk-avatar'

class Header extends React.Component {

  constructor() {
    super()
    this.renderLink = this.renderLink.bind(this)
  }

  renderLink(link) {
    var href = link.href
    return (
      <a href={href}
        key={link.title}
        className="btn btn-narrow btn-link">
        {link.title}
      </a>
    )
  }

  render() {
    return (
      <header className="px2 sm-px3">
        <div className="flex flex-center flex-wrap py2 mxn1">
          <a href="/" className="block mr1 color-inherit">
            <Avatar size={40} />
          </a>
          <div className="flex-auto">
            <h1 className="h5 caps compact m0">
              <a href='/' className='color-inherit'>
                {this.props.title}
              </a>
            </h1>
          </div>
          <nav>
            {this.props.headerLinks.map(this.renderLink)}
          </nav>
        </div>
      </header>
    )
  }

}

export default Header

