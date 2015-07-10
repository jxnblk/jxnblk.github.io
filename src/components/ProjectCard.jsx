
import React from 'react'

class ProjectCard extends React.Component {

  constructor() {
    super()
    this.renderLogo = this.renderLogo.bind(this)
  }

  renderLogo(logo) {
    let width = (this.props.index < 2) ? 96 : 64
    let height = width
    if (this.props.logoSvg) {
      let svg = { __html: this.props.logoSvg }
      return ( <div dangerouslySetInnerHTML={svg} /> )
    } else if (this.props.logo) {
      return logo
    } else if (!logo) {
      return false
    }
  }

  render() {
    let props = this.props
    let styles = {
      card: {
        minHeight: '12vh'
      },
      logo: {
        width: props.logo ? 96 : null,
        height: 96
      }
    }

    return (
      <section className='flex xflex-auto col-12 sm-col-6 lg-col-4'
        style={styles.card}>
        <a href={props.link}
          className='flex xflex-end col-12 btn link-card py3'>
          <div className='flex flex-center'>
            <div className='flex-none flex flex-center mr1'
              style={styles.logo}>
              {this.renderLogo(props.logo)}
            </div>
            <div className='flex-auto'>
              <h1 className='h1 m0 link-underline'
                style={styles.heading}>
                {props.name}
              </h1>
              <p className='regular m0'>{props.description}</p>
            </div>
          </div>
        </a>
      </section>
    )
  }

}

ProjectCard.defaultProps = {
  name: '',
  description: '',
  link: '/',
}

export default ProjectCard

