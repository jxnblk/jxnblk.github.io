
import React from 'react'

class Footer extends React.Component {

  constructor() {
    super()
  }

  render() {
    const { title, nav } = this.props

    console.log(nav)

    return (
      <footer className='py3'>
        <div className='flex flex-baseline flex-wrap mxn1'>
          <a href='/' className='btn btn-narrow btn-link'>{title}</a>
          <div className='flex-auto' />
          <div>
            {nav.map(link => (
              <a href={link.href}
                key={link.href}
                className='btn btn-narrow btn-link'>
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </footer>
    )
  }

}

export default Footer

