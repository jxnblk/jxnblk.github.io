
import React from 'react'
import cx from 'classnames'
import { other } from '../projects'

class OtherProjects extends React.Component {

  constructor() {
    super()
    this.renderProject = this.renderProject.bind(this)
  }

  renderProject(project, i) {
    var colClass = cx('sm-col-6 md-col-4 lg-col-3 mb2')
    return (
      <div className={colClass} key={'other-' + i}>
        <a href={project.link} className='block btn link-card' title={'View ' + project.name}>
          <h2 className='h3 m0 link-underline'>{project.name}</h2>
          <p className='h5 regular m0'>{project.description}</p>
        </a>
      </div>
    )
  }

  render() {
    return (
      <section id='other-projects'
        className='py3'>
        <div className='sm-flex flex-wrap mxn2'>
          {other.map(this.renderProject)}
        </div>
      </section>
    )
  }

}

export default OtherProjects

