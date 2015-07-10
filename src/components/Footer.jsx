
import React from 'react'

class Footer extends React.Component {

  constructor() {
    super()
    this.renderLink = this.renderLink.bind(this)
  }

  renderLink(link) {
    var href = link.link
    return (
      <a href={href}
        key={'footer-' + link.name}
        className="btn btn-narrow btn-link">
        {link.name}
      </a>
    )
  }

  render() {
    return (
      <footer className="py3">
        <div className="flex flex-baseline flex-wrap mxn1">
          <a href="/" className="btn btn-narrow btn-link">{this.props.title}</a>
          <div className="flex-auto" />
          <div>
            {this.props.social_networks.map(this.renderLink)}
          </div>
        </div>
      </footer>
    )
  }

}

export default Footer

