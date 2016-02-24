
import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({ ...props }) => (
  <section id="featured-projects"
    className="py4">
    <div className="flex flex-wrap xjustify-between mxn2">
      <ProjectCard
        {...props}
        name='Basscss'
        description='Low-level CSS toolkit'
        href='http://basscss.com' />
      <ProjectCard
        {...props}
        name='CSS Stats'
        description='CSS parsing tool'
        href='http://cssstats.com' />
      <ProjectCard
        {...props}
        name='Geomicons'
        description='Open source icons for the web'
        href='http://geomicons.com' />
      <ProjectCard
        {...props}
        name='React Geomicons'
        description='React icon component for Geomicons Open'
        href='http://jxnblk.com/react-geomicons' />
      <ProjectCard
        {...props}
        name='Colorable'
        description='Color palette contrast tester'
        href='http://jxnblk.com/colorable' />
      <ProjectCard
        {...props}
        name='SVG Icons in React'
        description='How to create generative graphics with JavaScript'
        href='http://jxnblk.com/react-icons' />
      <ProjectCard
        {...props}
        name='Paths'
        description='Edit SVGs in the browser'
        href='http://jxnblk.com/paths' />
      <ProjectCard
        {...props}
        name='Gravitons'
        description='Virtually massless CSS layout microlibrary'
        href='http://jxnblk.com/gravitons' />
      <ProjectCard
        {...props}
        name='Loading'
        description='Animated SVG loading indicators'
        href='http://jxnblk.com/loading' />
      <ProjectCard
        {...props}
        name='Writing'
        description='Thoughts on minimalism and design'
        href='http://jxnblk.com/writing' />
      <ProjectCard
        {...props}
        name='Shade'
        description='Mathematically-derived gradients'
        href='http://jxnblk.com/shade' />
      <ProjectCard
        {...props}
        name='Reflexbox'
        description='React flexbox layout and grid system'
        href='http://jxnblk.com/reflexbox' />
      <ProjectCard
        {...props}
        name='Rgx'
        description='Constraint-based React grid system'
        href='http://jxnblk.com/rgx' />
      <ProjectCard
        {...props}
        name='Fitter Happier Text'
        description='Performant, fully fluid headings'
        href='http://jxnblk.com/fitter-happier-text' />
      <ProjectCard
        {...props}
        name='React Fitter Happier Text'
        description='React component for fully fluid headings'
        href='http://jxnblk.com/react-fitter-happier-text' />
      <ProjectCard
        {...props}
        name='Spectral'
        description='Click the rainbox'
        href='http://jxnblk.com/Spectral' />
      <ProjectCard
        {...props}
        name='VHS'
        description='Post-future CSS animations'
        href='http://jxnblk.com/vhs' />
      <ProjectCard
        {...props}
        name='MrsJxn'
        description='Post-future beats'
        href='http://mrsjxn.com' />
      <ProjectCard
        {...props}
        name='Skullcat'
        description='Avatar and web audio experiment'
        href='http://jxnblk.com/skullcat' />
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

