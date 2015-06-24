
import React from 'react'
import ProjectCard from './ProjectCard.jsx'
import cx from 'classnames'
import clrs from 'colors.css'

import Col from './Col.jsx'
import BasscssLogo from './BasscssLogo.jsx'
import CssStatsLogo from './CssStatsLogo.jsx'
import MrsJxnLogo from './MrsJxnLogo.jsx'
import Icon from 'react-geomicons'
import ColorableLogo from './ColorableLogo.jsx'
import ReactIconsLogo from './ReactIconsLogo.jsx'
import LoadingLogo from './LoadingLogo.jsx'
import GravitonsLogo from './GravitonsLogo.jsx'

class FeaturedProjects extends React.Component {

  /*
  renderCard: function(card, i) {
    var colClass = cx(
      'flex flex-auto mb2 col-12 sm-col-6 px1',
      {
        'md-col-8': (i === 0),
        'md-col-4': (i === 1),
        'md-col-5': (i === 2),
        'md-col-7': (i === 3),
        'lg-col-4' : (i > 3)
      }
    )
    var style = {}
    if (i === 0) {
      style.minHeight = '40vh'
    } else if (i < 3) {
      style.minHeight = '30vh'
    } else {
      style.minHeight = '20vh'
    }

    return (
      <div className={colClass}
        style={style}
        key={'featured-' + i}>
        <ProjectCard {...this.props} {...card} index={i} />
      </div>
    )
  },
  */

  render () {
    return (
      <section id="featured-projects"
        className="py2 border-bottom border-thick border-darken-1">
        <div className="flex flex-wrap mxn1">
          <Col flex sm={6} md={8}>
            <ProjectCard
              name='Basscss'
              description='Low-level CSS toolkit'
              link='http://basscss.com'
              logo={<BasscssLogo />}
              style={{ minHeight: '32vh' }}
              className='white bg-blue' />
          </Col>
          <Col flex sm={6} md={4}>
            <ProjectCard
              name='CSS Stats'
              description='CSS parsing tool'
              link='http://cssstats.com'
              logo={<CssStatsLogo />}
              className='bg-darken-1' />
          </Col>
          <Col flex sm={6} md={7}>
            <ProjectCard
              name='Geomicons'
              description='Open source icons for the web'
              link='http://geomicons.com'
              logo={<Icon name='heart' width={48} height={48} fill={clrs.blue} />}
              className='white bg-slate' />
          </Col>
          <Col flex sm={6} md={5}>
            <ProjectCard
              name='React Geomicons'
              description='React icon component for Geomicons Open'
              link='http://jxnblk.com/react-geomicons'
              logo={<Icon name='cloud' width={48} height={48} />}
              className='white bg-blue' />
          </Col>
          <Col flex sm={6} md={5}>
            <ProjectCard
              name='Colorable'
              description='Color palette contrast tester'
              link='http://jxnblk.com/colorable'
              logo={<ColorableLogo />}
              className='aqua bg-navy' />
          </Col>
          <Col flex sm={6} md={7}>
            <ProjectCard
              name='Building SVG Icons with React'
              description='How to create mathematically-generated graphics using JavaScript and React'
              link='http://jxnblk.com/react-icons'
              logo={<ReactIconsLogo />}
              className='navy border' />
          </Col>
          <Col flex sm={6} md={4}>
            <ProjectCard
              name='Writing'
              description='Thoughts on minimalism and design'
              link='http://jxnblk.com/writing'
              className='border xbg-darken-1' />
          </Col>
          <Col flex sm={6} md={4}>
            <ProjectCard
              name='Loading'
              description='Animated SVG loading indicators'
              link='http://jxnblk.com/loading'
              logo={<LoadingLogo />}
              className='white bg-purple' />
          </Col>
          <Col flex sm={6} md={4}>
            <ProjectCard
              name='Shade'
              description='Mathematically-derived gradients'
              link='http://jxnblk.com/shade'
              className='white bg-fuchsia' />
          </Col>
          <Col flex sm={6} md={4}>
            <ProjectCard
              name='Fitter Happier Text'
              description='Performant, fully fluid headings'
              link='http://jxnblk.com/fitter-happier-text'
              className='white bg-red' />
          </Col>
          <Col flex sm={6} md={4}>
            <ProjectCard
              name='Spectral'
              description='Click the rainbox'
              link='http://jxnblk.com/Spectral'
              className='white bg-blue' />
          </Col>
          <Col flex sm={6} md={4}>
            <ProjectCard
              name='Gravitons'
              description='Virtually massless CSS layout microlibrary'
              link='http://jxnblk.com/gravitons'
              logo={<GravitonsLogo />}
              className='navy border' />
          </Col>
          <Col flex sm={6} md={4}>
            <ProjectCard
              name='Plangular'
              description='Angular directive for custom SoundCloud players'
              link='http://jxnblk.com/plangular'
              logo={<Icon name='play' width={48} height={48} />}
              className='red bg-slate' />
          </Col>
          <Col flex sm={6} md={4}>
            <ProjectCard
              name='VHS'
              description='Post-future CSS animations'
              link='http://jxnblk.com/vhs'
              className='red bg-slate' />
          </Col>
          {/*
          <Col flex sm={6} md={4}>
            <ProjectCard
              name='Work'
              description='The professional work of Brent Jackson'
              link='http://jxnblk.com/work'
              className='white bg-blue' />
          </Col>
          */}
          <Col flex sm={6} md={4}>
            <ProjectCard
              name='MrsJxn'
              description='Post-future beats'
              link='http://mrsjxn.com'
              logo={<MrsJxnLogo />}
              className='white bg-black' />
          </Col>
        </div>
      </section>
    )
  }

}

export default FeaturedProjects

