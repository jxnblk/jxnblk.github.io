
import React from 'react'
import classnames from 'classnames'
import cxs from 'cxs'
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
      <Grid span={2}>
        <Heading
          level={1}
          size={0}
          className={cx}
          style={sx.heading}>
          {title}
        </Heading>
        <Text>Brent Jackson</Text>
      </Grid>
    </header>
  </div>
)

const cx = classnames('sf', cxs({
  '@media screen and (min-width:40em)': {
    fontSize: '128px !important'
  },
  '@media screen and (min-width:64em)': {
    fontSize: '192px !important'
  },
}))

export default Header

