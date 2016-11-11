
import React from 'react'
import cxs from 'cxs'
import { ThemeProvider } from 'rebass'
import Avatar from 'jxnblk-avatar'
import Grid from './Grid'
import Header from './Header'
import Nav from './Nav'
import About from './About'
import ProjectList from './ProjectList'
import Footer from './Footer'

const theme = {
  fontSizes: [
    96,
    64,
    16,
    16,
    16,
    16,
    16
  ],
  bold: 600,
  Heading: {
    lineHeight: 1.5
  },
  Divider: {
    borderColor: 'currentcolor'
  }
}

class Body extends React.Component {
  render() {
    const { scripts } = this.props

    const cx = cxs({
      maxWidth: '90em',
      margin: 'auto',
      '@media screen and (min-width: 56em)': {
        padding: 48
      }
    })

    return (
      <div className={cx}>
        <ThemeProvider theme={theme}>
          <Header {...this.props} />
          <About {...this.props} />
          <Nav {...this.props} />
          <Grid>
            <Avatar size={64} />
          </Grid>
          <ProjectList {...this.props} />
          <Footer {...this.props} />
        </ThemeProvider>
        <script dangerouslySetInnerHTML={{ __html: scripts.ga }} />
      </div>
    )
  }
}

export default Body

