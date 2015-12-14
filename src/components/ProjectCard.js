
import React from 'react'

const ProjectCard = ({ href, name, description, handleMouseEnter, handleMouseLeave, ...props }) => (
  <div className='col-12 sm-col-6 md-col-4 lg-col-3 mb2'>
    <a href={href}
      className='block btn inverse'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={'View ' + name}>
      <h2 className='h3 m0'>
        {name}
      </h2>
      <p className='regular m0'>
        {description}
      </p>
    </a>
  </div>
)


export default ProjectCard

