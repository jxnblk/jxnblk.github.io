
import React from 'react'
import {
  NavItem,
  Heading,
  Text
} from 'rebass'

const sx = {
  display: 'block',
  color: 'inherit',
  textDecoration: 'none'
}

const ProjectLink = ({ href, name, description }) => {
  const Comp = href ? 'a' : 'div'
  return (
    <Comp
      className='ProjectLink'
      style={sx}
      href={href}>
      <Heading
        size={2}
        level={3}>
        {name}
      </Heading>
      <Text>
        {description}
      </Text>
    </Comp>
  )
}

export default ProjectLink

