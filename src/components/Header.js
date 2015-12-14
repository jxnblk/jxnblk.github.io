
import React from 'react'
import Avatar from 'jxnblk-avatar'

const Header = ({ title, nav, ...props }) => (
  <header className='flex flex-center py4'>
    <div className='flex-auto'>
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
    </div>
    <Avatar size={48} />
  </header>
)

export default Header

