
import React from 'react'

import FeaturedProjects from './FeaturedProjects.jsx'
import OtherProjects from './OtherProjects.jsx'
import About from './About.jsx'

class Home extends React.Component {

  render() {
    return (
      <main>
        <About {...this.props} />
        <FeaturedProjects {...this.props} />
        <OtherProjects {...this.props} />
      </main>
    )
  }

}

export default Home

