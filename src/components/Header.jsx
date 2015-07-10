
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
      <header className='py2 mt4 mb4'>
        <a href='https://github.com/jxnblk/avatar'
          className='block color-inherit'>
          <Avatar size={72} />
        </a>
        <h1 className='h1 caps compact m0'
          style={{ fontSize: '12vw', lineHeight: 1 }}>
          {this.props.title}
        </h1>
        {this.props.headerLinks.map(this.renderLink)}
      </header>
    )
  }

}

export default Header

