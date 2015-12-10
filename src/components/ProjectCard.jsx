
import React from 'react'

class ProjectCard extends React.Component {

  constructor() {
    super()
    this.renderLogo = this.renderLogo.bind(this)
  }

  renderLogo(logo) {
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
    const props = this.props
    const styles = {
      card: {
        minHeight: '12vh'
      },
      logo: {
        width: props.logo ? 96 : null,
        height: 96
      }
    }

    const { handleMouseEnter, handleMouseLeave } = props

    return (
      <section className='flex col-12 sm-col-6 lg-col-4'
        style={styles.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <a href={props.link}
          className='flex col-12 btn py3 inverse'>
          <div className='flex flex-center'>
            {/*
            <div className='flex-none flex flex-center mr1'
              style={styles.logo}>
              {this.renderLogo(props.logo)}
            </div>
            */}
            <div className='flex-auto'>
              <h1 className='h3 m0'
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
  handleMouseEnter: function () {},
  handleMouseLeave: function () {},
}

export default ProjectCard

