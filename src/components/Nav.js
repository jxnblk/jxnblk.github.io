
import React from 'react'
import { NavItem } from 'rebass'
import Grid from './Grid'

const Nav = ({ nav }) => (
  <nav>
    {nav.map((link, i) => (
      <Grid key={i} small>
        <NavItem px={0} href={link.href}>
          {link.title}
        </NavItem>
      </Grid>
    ))}
  </nav>
)

export default Nav

