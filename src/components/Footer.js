
import React from 'react'
import { NavItem } from 'rebass'
import Robox from 'robox'
import Grid from './Grid'

const Box = Robox('div')

const Footer = ({ nav }) => (
  <footer>
    <Box py={6}>
      {nav.map((link, i) => (
        <Grid key={i} small>
          <NavItem px={0} href={link.href}>
            {link.title}
          </NavItem>
        </Grid>
      ))}
      <div>
        <Grid>
          <p>© MMXVI Brent Jackson</p>
        </Grid>
      </div>
    </Box>
  </footer>
)

export default Footer

