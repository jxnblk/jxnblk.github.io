
import React from 'react'
import ProjectCard from './ProjectCard.jsx'
import clrs from 'colors.css'
import Col from './Col.jsx'
import BasscssLogo from 'basscss-logo'
import CssStatsLogo from './CssStatsLogo.jsx'
import MrsJxnLogo from './MrsJxnLogo.jsx'
import SkullcatLogo from './SkullcatLogo.jsx'
import Icon from 'react-geomicons'
import ColorableLogo from './ColorableLogo.jsx'
import ReactIconsLogo from './ReactIconsLogo.jsx'
import LoadingLogo from './LoadingLogo.jsx'
import GravitonsLogo from './GravitonsLogo.jsx'

class FeaturedProjects extends React.Component {

  render () {
    return (
      <section id="featured-projects"
        className="py2">
        <div className="flex flex-wrap mxn2">
          <ProjectCard
            {...this.props}
            name='Basscss'
            description='Low-level CSS toolkit'
            link='http://basscss.com'
            logo={<BasscssLogo size={96} />} />
          <ProjectCard
            {...this.props}
            name='CSS Stats'
            description='CSS parsing tool'
            link='http://cssstats.com'
            logo={<CssStatsLogo size={96} />} />
          <ProjectCard
            {...this.props}
            name='Geomicons'
            description='Open source icons for the web'
            link='http://geomicons.com'
            logo={<Icon name='heart' width={72} height={72} />} />
          <ProjectCard
            {...this.props}
            name='React Geomicons'
            description='React icon component for Geomicons Open'
            link='http://jxnblk.com/react-geomicons'
            logo={<Icon name='cloud' width={72} height={72} />} />
          <ProjectCard
            {...this.props}
            name='Colorable'
            description='Color palette contrast tester'
            link='http://jxnblk.com/colorable'
            logo={<ColorableLogo size={96} />} />
          <ProjectCard
            {...this.props}
            name='SVG Icons in React'
            description='How to create generative graphics with JavaScript'
            link='http://jxnblk.com/react-icons'
            logo={<ReactIconsLogo size={80} />} />
          <ProjectCard
            {...this.props}
            name='Paths'
            description='Edit SVGs in the browser'
            link='http://jxnblk.com/paths'
            logo={<Icon name='triangleUp' width={72} height={72} />} />
          <ProjectCard
            {...this.props}
            name='Gravitons'
            description='Virtually massless CSS layout microlibrary'
            link='http://jxnblk.com/gravitons'
            logo={<GravitonsLogo size={96} />} />
          <ProjectCard
            {...this.props}
            name='Loading'
            description='Animated SVG loading indicators'
            link='http://jxnblk.com/loading'
            logo={<LoadingLogo />} />
          <ProjectCard
            {...this.props}
            name='Writing'
            description='Thoughts on minimalism and design'
            link='http://jxnblk.com/writing' />
          <ProjectCard
            {...this.props}
            name='Shade'
            description='Mathematically-derived gradients'
            link='http://jxnblk.com/shade' />
          <ProjectCard
            {...this.props}
            name='Rgx'
            description='Constraint-based React grid system'
            link='http://jxnblk.com/rgx' />
          <ProjectCard
            {...this.props}
            name='Fitter Happier Text'
            description='Performant, fully fluid headings'
            link='http://jxnblk.com/fitter-happier-text' />
          <ProjectCard
            {...this.props}
            name='React Fitter Happier Text'
            description='React component for fully fluid headings'
            link='http://jxnblk.com/react-fitter-happier-text' />
          <ProjectCard
            {...this.props}
            name='Spectral'
            description='Click the rainbox'
            link='http://jxnblk.com/Spectral' />
          <ProjectCard
            {...this.props}
            name='VHS'
            description='Post-future CSS animations'
            link='http://jxnblk.com/vhs' />
          <ProjectCard
            {...this.props}
            name='MrsJxn'
            description='Post-future beats'
            link='http://mrsjxn.com'
            logo={<MrsJxnLogo size={128} />} />
          <ProjectCard
            {...this.props}
            name='Skullcat'
            description='Avatar and web audio experiment'
            link='http://jxnblk.com/skullcat'
            logo={<SkullcatLogo size={128} />} />
        </div>
      </section>
    )
  }

}

export default FeaturedProjects

