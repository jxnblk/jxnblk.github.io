
import React from 'react'
import cxs from 'cxs'
import Header from './Header'
import Nav from './Nav'
import About from './About'
import ProjectList from './ProjectList'
import Footer from './Footer'

class Body extends React.Component {
  getChildContext () {
    return {
      rebass: {
        fontSizes: [
          96,
          32,
          24,
          20,
          16,
          14,
          12
        ],
        NavItem: {
          fontSize: 16
        },
        Divider: {
          borderWidth: 1,
          borderColor: 'currentcolor'
        }
      }
    }
  }

  render() {
    const { scripts } = this.props

    const cx = cxs({
      maxWidth: '88em',
      margin: 'auto',
      '@media screen and (min-width: 56em)': {
        padding: 48
      }
    })

    return (
      <div className={cx}>
        <Header {...this.props} />
        <About {...this.props} />
        <Nav {...this.props} />
        <ProjectList {...this.props} />
        <Footer {...this.props} />
        <script dangerouslySetInnerHTML={{ __html: scripts.ga }} />
      </div>
    )
  }
}

Body.childContextTypes = {
  rebass: React.PropTypes.context
}

export default Body

