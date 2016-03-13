
import React from 'react'

const Footer = ({ title, nav }) => (
  <footer className='py3'>
    <div className='flex flex-baseline flex-wrap mxn1'>
      <a href='/' className='h6 btn px1 btn-link'>{title}</a>
      <div className='flex-auto' />
      <div className='flex flex-baseline'>
        {nav.map(link => (
          <a href={link.href}
            key={link.href}
            className='h6 btn px1 btn-link'>
            {link.title}
          </a>
          ))}
        </div>
      </div>
    </footer>
)

export default Footer

