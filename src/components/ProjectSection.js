
import React from 'react'
import { Heading, Divider } from 'rebass'
import Robox from 'robox'
import Grid from './Grid'
import ProjectLink from './ProjectLink'

const kebab = str => str.toLowerCase().replace(/\s/g, '-')
const Section = Robox('section')

const ProjectSection = ({ category, links }) => {
  return (
    <Section id={kebab(category)} py={4}>
      <Heading mx={3} size={4}>{category}</Heading>
      <Divider mx={3} />
      <div>
        {links.map((link, i) => (
          <Grid key={i}>
            <ProjectLink {...link} />
          </Grid>
        ))}
      </div>
    </Section>
  )
}

export default ProjectSection

