
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
      heading: {
        fontSize: props.big ? '12vw' : null,
        //lineHeight: props.big ? 1 : null
      },
      card: {
        minHeight: '12vh'
      }
    }

    return (
      <section className={props.big ? 'col-12' : 'col-12 sm-col-6 lg-col-4'}
        style={styles.card}>
        <a href={props.link}
          className='block btn btn-link py3'>
          <div className=''>
            {/*this.renderLogo(props.logo)*/}
            <h1 className='h1 m0'
              style={styles.heading}>
              {props.name}
            </h1>
            <p className='regular m0'>{props.description}</p>
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

