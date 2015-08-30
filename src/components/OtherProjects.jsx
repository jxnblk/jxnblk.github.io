
import React from 'react'
import { other } from '../projects'
import SmallProjectCard from './SmallProjectCard.jsx'

class OtherProjects extends React.Component {

  render() {
    return (
      <section id='other-projects'
        className='py3'>
        <div className='sm-flex flex-wrap mxn2'>
          <SmallProjectCard
            href='/work'
            name='Work'
            description='Professional Work' />
          <SmallProjectCard
            href='/principles'
            name='Principles'
            description='Web Design Principles' />
          <SmallProjectCard
            href='/reading-list'
            name='Reading List'
            description='Recommended Reading' />
          <SmallProjectCard
            href='/Ashley'
            name='Ashley'
            description='Readable Tumblr Theme' />
          <SmallProjectCard
            href='/Heather'
            name='Heather'
            description='Hyperminimal Jekyll Theme' />
          <SmallProjectCard
            href='/Twipster'
            name='Twipster'
            description='Simpler, Readabler Twitter' />
          <SmallProjectCard
            href='//soundrad.com'
            name='SoundRad'
            description='Simple, Fast SoundCloud Player' />
          <SmallProjectCard
            href='//microbeats.cc'
            name='Microbeats'
            description='Beats Created in Under an Hour' />
          <SmallProjectCard
            href='/gifolio'
            name='Gifolio'
            description='GIF Portfolio' />
          <SmallProjectCard
            href='/papercraft'
            name='Papercraft'
            description='Hand-Coded SVG Lettering' />
          <SmallProjectCard
            href='/stepkit'
            name='Stepkit'
            description='Web Audio Step Sequencer' />
        </div>
      </section>
    )
  }

}

export default OtherProjects

