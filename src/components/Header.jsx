
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
      <header className='py2 mt2 mb4'>
        <h1 className='h1 caps compact mt4 mb0'
          style={{ fontSize: '12vw', lineHeight: 1 }}>
          <a href='/' className='color-inherit'>
            {this.props.title}
          </a>
        </h1>
        <nav className='flex flex-center mt2 mxn1'>
          <a href='https://github.com/jxnblk/avatar'
            className='inline-block color-inherit'>
            <Avatar size={40} />
          </a>
          {this.props.headerLinks.map(this.renderLink)}
        </nav>
      </header>
    )
  }

}

export default Header

