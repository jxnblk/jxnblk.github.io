
import React from 'react'
import ProjectSection from './ProjectSection'

const ProjectList = ({
  projects
}) => {
  return (
    <main>
      {projects.map((project, i) => (
        <ProjectSection key={i} {...project} />
      ))}
    </main>
  )
}

export default ProjectList

