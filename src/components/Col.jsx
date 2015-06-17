
import React from 'react'
import cx from 'classnames'

class Col extends React.Component {

  render() {
    let classNames = []

    if (this.props.xs) {
      classNames.push('col-' + this.props.xs)
    }
    if (this.props.sm) {
      classNames.push('sm-col-' + this.props.sm)
    }
    if (this.props.md) {
      classNames.push('md-col-' + this.props.md)
    }
    if (this.props.lg) {
      classNames.push('lg-col-' + this.props.lg)
    }
    if (this.props.fl) {
      if (this.props.xs) {
        classNames.push('col')
      } else if (this.props.sm) {
        classNames.push('sm-col')
      } else if (this.props.md) {
        classNames.push('md-col')
      } else if (this.props.lg) {
        classNames.push('lg-col')
      }
    }
    if (this.props.flex) {
      classNames.push('flex flex-auto col-12 px1')
    }
    classNames.push('mb2')
    classNames.push(this.props.className)

    return (
      <div {...this.props}
        className={classNames.join(' ')}>
        {this.props.children}
      </div>
    )
  }

}

export default Col

