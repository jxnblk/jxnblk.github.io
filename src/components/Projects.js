
import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({ ...props }) => (
  <section id="featured-projects"
    className="py2">
    <div className="flex flex-wrap mxn2">
      <ProjectCard
        {...props}
        name='Basscss'
        description='Low-level CSS toolkit'
        link='http://basscss.com' />
      <ProjectCard
        {...props}
        name='CSS Stats'
        description='CSS parsing tool'
        link='http://cssstats.com' />
      <ProjectCard
        {...props}
        name='Geomicons'
        description='Open source icons for the web'
        link='http://geomicons.com' />
      <ProjectCard
        {...props}
        name='React Geomicons'
        description='React icon component for Geomicons Open'
        link='http://jxnblk.com/react-geomicons' />
      <ProjectCard
        {...props}
        name='Colorable'
        description='Color palette contrast tester'
        link='http://jxnblk.com/colorable' />
      <ProjectCard
        {...props}
        name='SVG Icons in React'
        description='How to create generative graphics with JavaScript'
        link='http://jxnblk.com/react-icons' />
      <ProjectCard
        {...props}
        name='Paths'
        description='Edit SVGs in the browser'
        link='http://jxnblk.com/paths' />
      <ProjectCard
        {...props}
        name='Gravitons'
        description='Virtually massless CSS layout microlibrary'
        link='http://jxnblk.com/gravitons' />
      <ProjectCard
        {...props}
        name='Loading'
        description='Animated SVG loading indicators'
        link='http://jxnblk.com/loading' />
      <ProjectCard
        {...props}
        name='Writing'
        description='Thoughts on minimalism and design'
        link='http://jxnblk.com/writing' />
      <ProjectCard
        {...props}
        name='Shade'
        description='Mathematically-derived gradients'
        link='http://jxnblk.com/shade' />
      <ProjectCard
        {...props}
        name='Rgx'
        description='Constraint-based React grid system'
        link='http://jxnblk.com/rgx' />
      <ProjectCard
        {...props}
        name='Fitter Happier Text'
        description='Performant, fully fluid headings'
        link='http://jxnblk.com/fitter-happier-text' />
      <ProjectCard
        {...props}
        name='React Fitter Happier Text'
        description='React component for fully fluid headings'
        link='http://jxnblk.com/react-fitter-happier-text' />
      <ProjectCard
        {...props}
        name='Spectral'
        description='Click the rainbox'
        link='http://jxnblk.com/Spectral' />
      <ProjectCard
        {...props}
        name='VHS'
        description='Post-future CSS animations'
        link='http://jxnblk.com/vhs' />
      <ProjectCard
        {...props}
        name='MrsJxn'
        description='Post-future beats'
        link='http://mrsjxn.com' />
      <ProjectCard
        {...props}
        name='Skullcat'
        description='Avatar and web audio experiment'
        link='http://jxnblk.com/skullcat' />
      <ProjectCard
        {...props}
        href='/work'
        name='Work'
        description='Professional Work' />
      <ProjectCard
        {...props}
        href='/principles'
        name='Principles'
        description='Web Design Principles' />
      <ProjectCard
        {...props}
        href='/reading-list'
        name='Reading List'
        description='Recommended Reading' />
      <ProjectCard
        {...props}
        href='/Ashley'
        name='Ashley'
        description='Readable Tumblr Theme' />
      <ProjectCard
        {...props}
        href='/Heather'
        name='Heather'
        description='Hyperminimal Jekyll Theme' />
      <ProjectCard
        {...props}
        href='/Twipster'
        name='Twipster'
        description='Simpler, Readabler Twitter' />
      <ProjectCard
        {...props}
        href='//microbeats.cc'
        name='Microbeats'
        description='Beats Created in Under an Hour' />
      <ProjectCard
        {...props}
        href='/gifolio'
        name='Gifolio'
        description='GIF Portfolio' />
      <ProjectCard
        {...props}
        href='/papercraft'
        name='Papercraft'
        description='Hand-Coded SVG Lettering' />
      <ProjectCard
        {...props}
        href='/stepkit'
        name='Stepkit'
        description='Web Audio Step Sequencer' />
    </div>
  </section>
)

export default Projects

