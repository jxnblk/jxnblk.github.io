
import React from 'react'

import FeaturedProjects from './FeaturedProjects.jsx'
import OtherProjects from './OtherProjects.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

class Home extends React.Component {

  render() {
    return (
      <main>
        <About {...this.props} />
        <hr className='hrb' />
        <FeaturedProjects {...this.props} />
        <hr className='hrb' />
        <OtherProjects {...this.props} />
        <hr className='hrb' />
        <Contact {...this.props} />
        <hr className='hrb' />
      </main>
    )
  }

}

export default Home

