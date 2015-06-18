
import React from 'react'

import FeaturedProjects from './FeaturedProjects.jsx'
import OtherProjects from './OtherProjects.jsx'
import About from './About.jsx'

class Home extends React.Component {

  render() {
    return (
      <main>
        <FeaturedProjects {...this.props} />
        <OtherProjects {...this.props} />
        <About {...this.props} />
      </main>
    )
  }

}

export default Home

