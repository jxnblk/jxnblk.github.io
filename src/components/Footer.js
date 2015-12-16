
import React from 'react'

const Footer = ({ title, nav }) => (
  <footer className='py4'>
    <div className='flex flex-baseline flex-wrap mxn1'>
      <a href='/' className='btn px1 btn-link'>{title}</a>
      <div className='flex-auto' />
      <div className='flex flex-baseline'>
        {nav.map(link => (
          <a href={link.href}
            key={link.href}
            className='btn px1 btn-link'>
            {link.title}
          </a>
          ))}
        </div>
      </div>
    </footer>
)

export default Footer

