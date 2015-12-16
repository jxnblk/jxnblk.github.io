
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Projects from './Projects'
import About from './About'
import css from '../style.css'

class Root extends React.Component {

  constructor() {
    super()
  }

  render() {
    const { title } = this.props

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{title}</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body className='px2 sm-px2 lg-px4'>
          <div className='flex flex-column '
            style={{ minHeight: '100vh' }}>
            <Header {...this.props} />
            <main className="flex-auto">
              <About {...this.props} />
              <Projects {...this.props} />
            </main>
            <Footer {...this.props} />
            <script dangerouslySetInnerHTML={{ __html: this.props.scripts.ga }} />
          </div>
        </body>
      </html>
    )
  }
}

export default Root

