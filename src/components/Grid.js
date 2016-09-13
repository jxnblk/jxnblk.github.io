
import React from 'react'
import cxs from 'cxs'

const breakpoints = {
  small: '@media screen and (min-width: 40em)',
  medium: '@media screen and (min-width: 64em)'
}

const Grid = ({
  span = 1,
  small,
  align = 'top',
  ...props
}) => {
  const cx = cxs({
    display: 'inline-block',
    verticalAlign: align,
    padding: 32,
    width: '100%',
    [breakpoints.small]: {
      width: `${span / 2 * 100}%`
    },
    [breakpoints.medium]: {
      width: `${span / 5 * 100}%`
    }
  })

  const sx = {
    width: small ? `${span / 5 * 100}%` : null
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

export default Grid

