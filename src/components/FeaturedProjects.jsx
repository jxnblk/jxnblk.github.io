
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
            name='Basscss'
            description='Low-level CSS toolkit'
            link='http://basscss.com'
            logo={<BasscssLogo size={96} />} />
          <ProjectCard
            name='CSS Stats'
            description='CSS parsing tool'
            link='http://cssstats.com'
            logo={<CssStatsLogo size={96} />} />
          <ProjectCard
            name='Geomicons'
            description='Open source icons for the web'
            link='http://geomicons.com'
            logo={<Icon name='heart' width={72} height={72} />} />
          <ProjectCard
            name='React Geomicons'
            description='React icon component for Geomicons Open'
            link='http://jxnblk.com/react-geomicons'
            logo={<Icon name='cloud' width={72} height={72} />} />
          <ProjectCard
            name='Colorable'
            description='Color palette contrast tester'
            link='http://jxnblk.com/colorable'
            logo={<ColorableLogo size={96} />} />
          <ProjectCard
            name='SVG Icons in React'
            description='How to create generative graphics with JavaScript'
            link='http://jxnblk.com/react-icons'
            logo={<ReactIconsLogo size={80} />} />
          <ProjectCard
            name='Paths'
            description='Edit SVGs in the browser'
            link='http://jxnblk.com/paths'
            logo={<Icon name='triangleUp' width={72} height={72} />} />
          <ProjectCard
            name='Gravitons'
            description='Virtually massless CSS layout microlibrary'
            link='http://jxnblk.com/gravitons'
            logo={<GravitonsLogo size={96} />} />
          <ProjectCard
            name='Loading'
            description='Animated SVG loading indicators'
            link='http://jxnblk.com/loading'
            logo={<LoadingLogo />} />
          <ProjectCard
            name='Writing'
            description='Thoughts on minimalism and design'
            link='http://jxnblk.com/writing' />
          <ProjectCard
            name='Shade'
            description='Mathematically-derived gradients'
            link='http://jxnblk.com/shade' />
          <ProjectCard
            name='Rgx'
            description='Constraint-based React grid system'
            link='http://jxnblk.com/rgx' />
          <ProjectCard
            name='Fitter Happier Text'
            description='Performant, fully fluid headings'
            link='http://jxnblk.com/fitter-happier-text' />
          <ProjectCard
            name='React Fitter Happier Text'
            description='React component for fully fluid headings'
            link='http://jxnblk.com/react-fitter-happier-text' />
          <ProjectCard
            name='Spectral'
            description='Click the rainbox'
            link='http://jxnblk.com/Spectral' />
          <ProjectCard
            name='VHS'
            description='Post-future CSS animations'
            link='http://jxnblk.com/vhs' />
          <ProjectCard
            name='MrsJxn'
            description='Post-future beats'
            link='http://mrsjxn.com'
            logo={<MrsJxnLogo size={128} />} />
          <ProjectCard
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

