
import React from 'react'

const ProjectCard = ({ href, name, description, ...props }) => (
  <div
    style={{
      flex: '1 0 320px'
    }}
    className='mb2'>
    <a href={href}
      className='block btn inverse'
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

