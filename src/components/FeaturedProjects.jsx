
import React from 'react'
import ProjectCard from './ProjectCard.jsx'
import cx from 'classnames'
import clrs from 'colors.css'

import Col from './Col.jsx'
//import BasscssLogo from './BasscssLogo.jsx'
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
            logo={<BasscssLogo />}
            className='white bg-blue' />
          <ProjectCard
            name='CSS Stats'
            description='CSS parsing tool'
            link='http://cssstats.com'
            logo={<CssStatsLogo />}
            className='bg-darken-1' />
          <ProjectCard
            name='Geomicons'
            description='Open source icons for the web'
            link='http://geomicons.com'
            logo={<Icon name='heart' width={48} height={48} fill={clrs.blue} />}
            className='white bg-slate' />
          <ProjectCard
            name='React Geomicons'
            description='React icon component for Geomicons Open'
            link='http://jxnblk.com/react-geomicons'
            logo={<Icon name='cloud' width={48} height={48} />}
            className='white bg-blue' />
          <ProjectCard
            name='Colorable'
            description='Color palette contrast tester'
            link='http://jxnblk.com/colorable'
            logo={<ColorableLogo />}
            className='aqua bg-navy' />
          <ProjectCard
            name='Building SVG Icons with React'
            description='How to create mathematically-generated graphics using JavaScript and React'
            link='http://jxnblk.com/react-icons'
            logo={<ReactIconsLogo />}
            className='navy border' />
          <ProjectCard
            name='Writing'
            description='Thoughts on minimalism and design'
            link='http://jxnblk.com/writing'
            className='border xbg-darken-1' />
          <ProjectCard
            name='Loading'
            description='Animated SVG loading indicators'
            link='http://jxnblk.com/loading'
            logo={<LoadingLogo />}
            className='white bg-purple' />
          <ProjectCard
            name='Shade'
            description='Mathematically-derived gradients'
            link='http://jxnblk.com/shade'
            className='white bg-fuchsia' />
          <ProjectCard
            name='Fitter Happier Text'
            description='Performant, fully fluid headings'
            link='http://jxnblk.com/fitter-happier-text'
            className='white bg-red' />
          <ProjectCard
            name='React Fitter Happier Text'
            description='React component for fully fluid headings'
            link='http://jxnblk.com/react-fitter-happier-text'
            className='white bg-blue' />
          <ProjectCard
            name='Spectral'
            description='Click the rainbox'
            link='http://jxnblk.com/Spectral'
            className='white bg-brightblue' />
          <ProjectCard
            name='Gravitons'
            description='Virtually massless CSS layout microlibrary'
            link='http://jxnblk.com/gravitons'
            logo={<GravitonsLogo />}
            className='navy border' />
          <ProjectCard
            name='Plangular'
            description='Angular directive for custom SoundCloud players'
            link='http://jxnblk.com/plangular'
            logo={<Icon name='play' width={48} height={48} />}
            className='red bg-slate' />
          <ProjectCard
            name='VHS'
            description='Post-future CSS animations'
            link='http://jxnblk.com/vhs'
            className='white bg-blue' />
          <ProjectCard
            name='MrsJxn'
            description='Post-future beats'
            link='http://mrsjxn.com'
            logo={<MrsJxnLogo />}
            className='white bg-black' />
          <ProjectCard
            name='Skullcat'
            description='Avatar and web audio experiment'
            link='http://jxnblk.com/skullcat'
            logo={<SkullcatLogo />}
            className='white bg-black' />
        </div>
      </section>
    )
  }

}

export default FeaturedProjects

