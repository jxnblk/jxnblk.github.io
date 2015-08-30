
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
    let props = this.props
    return (
      <header className='py2 mt4 mb4'>
        <a href='https://github.com/jxnblk/avatar'
          className='block color-inherit'>
          <Avatar size={72} />
        </a>
        {/*
        <button
          className='btn link-card'
          onClick={props.toggleTheme}>
          <Avatar size={72} />
        </button>
        */}
        <h1 className='h1 caps compact m0'
          style={{ fontSize: '12vw', lineHeight: 1 }}>
          {props.title}
        </h1>
        <div className='mxn1'>
          {props.headerLinks.map(this.renderLink)}
        </div>
      </header>
    )
  }

}

export default Header

