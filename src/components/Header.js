
import React from 'react'
import Avatar from 'jxnblk-avatar'

const Header = ({ title, nav, ...props }) => (
  <div>
    <nav className='xs-hide right-align mxn1 mt1'>
      {nav.map(link => (
        <a href={link.href}
          key={link.title}
          className="h6 btn px1 btn-link">
          {link.title}
        </a>
      ))}
    </nav>
    <header className='flex items-center py3'>
      <Avatar size={48} />
      <div className='ml2'>
        <h1 className='h2 flex items-center m0' children={title} />
        <h2 className='h4 m0'>Brent Jackson</h2>
      </div>
    </header>
  </div>
)

export default Header

