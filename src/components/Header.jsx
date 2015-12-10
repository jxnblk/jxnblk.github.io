
import React from 'react'
import Avatar from 'jxnblk-avatar'

class Header extends React.Component {

  render() {
    const { title, nav } = this.props

    return (
      <header className='py4'>
        <Avatar size={48} />
        <h1 className='h1 caps flex flex-center m0'>
          {title}
        </h1>
        <nav className='mxn1'>
          {nav.map(link => (
            <a href={link.href}
              key={link.title}
              className="btn btn-narrow btn-link">
              {link.title}
            </a>
          ))}
        </nav>
      </header>
    )
  }

}

export default Header

