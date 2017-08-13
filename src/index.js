import React from 'react'
import Header from './Header'
import LinkList from './LinkList'
import {
  ThemeProvider,
  Font,
  Container,
  Flex,
  Link
} from './ui'

export default () => (
  <ThemeProvider>
    <Font>
      <Header
        image='http://jxnblk.com/avatar/avatar.svg'
        heading='Jxnblk'
        subhead='Brent Jackson'
        text='Design systems developer. Based in Brooklyn, NY'
      />
      <Container>
        <Flex>
          <Link
            mr={4}
            href='https://twitter.com/jxnblk'
            children='Twitter'
          />
          <Link
            mr={4}
            href='https://github.com/jxnblk'
            children='GitHub'
          />
          <Link
            mr={4}
            href='http://jxnblk.com/writing'
            children='Writing'
          />
        </Flex>
      </Container>
      <LinkList
        links={[
          { href: 'http://jxnblk.com/rebass/', text: 'Rebass' },
          { href: 'http://jxnblk.com/grid-styled/', text: 'Grid Styled' },
          { href: 'https://github.com/jxnblk/styled-system', text: 'Styled System' },
          { href: 'http://jxnblk.com/cxs/', text: 'cxs' },
          { href: 'http://jxnblk.com/nano-component/', text: 'nano-component' },
          { href: 'http://basscss.com', text: 'Basscss' },
          // color
          { href: 'https://colorable.jxnblk.com', text: 'Colorable' },
          { href: 'http://jxnblk.com/hello-color/', text: 'Hello Color' },
          { href: 'https://palx.jxnblk.com', text: 'Palx' },
          { href: 'https://monochrome.jxnblk.com', text: 'Monochrome' },
          { href: 'http://jxnblk.com/grays/', text: 'Grays' },
          { href: 'http://jxnblk.com/shade/', text: 'Shade' },
          { href: 'http://jxnblk.com/Spectral/', text: 'Spectral' },

          // react
          { href: 'https://github.com/jxnblk/repng/', text: 'Repng' },
          { href: 'http://jxnblk.com/axs/', text: 'Axs' },
          { href: 'http://jxnblk.com/f0/', text: 'f0' },
          { href: 'https://github.com/jxnblk/static-react', text: 'static-react' },
          { href: 'https://github.com/jxnblk/ejsx/', text: 'Ejsx' },

          // icons
          { href: 'http://jxnblk.com/reline/', text: 'Reline' },
          { href: 'https://icon.now.sh/', text: 'Microicon' },
          { href: 'http://geomicons.com/', text: 'Geomicons' },
          { href: 'http://jxnblk.com/loading/', text: 'Loading...' },
          { href: 'http://jxnblk.com/react-icons/', text: 'React Icons' },
          // grids
          { href: 'http://jxnblk.com/reflexbox/', text: 'Reflexbox' },
          { href: 'http://jxnblk.com/gx/', text: 'Gx' },
          // typography
          { href: 'http://jxnblk.com/type-system/', text: 'Type System' },
          { href: 'http://jxnblk.com/fitter-happier-text/', text: 'Fitter Happier Text' },

          // css
          { href: 'http://cssstats.com', text: 'CSS Stats' },
          { href: 'http://jxnblk.com/gravitons/', text: 'Gravitons' },

          { href: 'http://jxnblk.com/skullcat/', text: 'Skullcat' },
          { href: 'http://mrsjxn.com/', text: 'MrsJxn' },
          { href: 'http://microbeats.cc/', text: 'Microbeats' },
          { href: 'http://jxnblk.com/gifolio/', text: 'Gifolio' },

          { href: 'http://jxnblk.com/reading-list/', text: 'Reading List' },
          { href: 'http://jxnblk.com/principles/', text: 'Principles' },
        ]}
      />
      <Container mb={5}>
        <Flex>
          <Link
            mr={4}
            href='https://twitter.com/jxnblk'
            children='Twitter'
          />
          <Link
            mr={4}
            href='https://github.com/jxnblk'
            children='GitHub'
          />
          <Link
            mr={4}
            href='http://jxnblk.com/writing'
            children='Writing'
          />
        </Flex>
      </Container>
    </Font>
  </ThemeProvider>
)
