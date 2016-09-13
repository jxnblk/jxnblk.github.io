
import React from 'react'
import { Text } from 'rebass'
import Grid from './Grid'
import Box from './Box'

const About = ({ byline, ...props }) => (
  <section id='about'>
    <Box py={0}>
      <Grid span={2}>
        <Text bold>{byline}</Text>
      </Grid>
      <Grid span={2}>
        <Text bold>Based in Brooklyn, NY.</Text>
      </Grid>
    </Box>
  </section>
)

export default About

