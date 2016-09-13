
import React from 'react'
import {
  Heading,
  Text
} from 'rebass'
import Avatar from 'jxnblk-avatar'
import Robox from 'robox'
import Grid from './Grid'
import Box from './Box'

const sx = {
  header: {
    overflow: 'hidden'
  },
  heading: {
    fontWeight: 800
  }
}

const Header = ({ title, ...props }) => (
  <div>
    <header style={sx.header}>
      <Box py={6}>
        <Grid span={2}>
          <Heading
            level={1}
            size={0}
            style={sx.heading}>
            {title}
          </Heading>
          <Text bold>Brent Jackson</Text>
        </Grid>
        <Grid span={2} />
        <Grid>
          <Avatar />
        </Grid>
      </Box>
    </header>
  </div>
)

export default Header

