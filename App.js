import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ComponentsProvider } from '@compositor/markdown'
import { Box, Flex } from 'grid-styled'
import CSS from 'ok-css'
import { Avatar } from 'jxnblk-avatar'
import theme from './theme'
import {
  Root,
  Text,
  Heading,
  Link,
  List,
  Divider,
  Pre
} from './system.json'
import Home from './README.md'

const px = base => Comp => props => <Comp {...base} {...props} />

const components = {
  Avatar,
  Box,
  Flex,
  Root,
  Text,
  Heading,
  p: Text,
  h1: px({ is: 'h1' })(Heading),
  h2: Heading,
  h3: px({ is: 'h3' })(Heading),
  h4: px({ is: 'h4' })(Heading),
  h5: px({ is: 'h5' })(Heading),
  h6: px({ is: 'h6' })(Heading),
  a: Link,
  ul: List,
  hr: Divider,
  pre: Pre
}

const Head = props => (
  <React.Fragment>
    <title>Jxnblk | Brent Jackson</title>
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <meta
      name='description'
      content='Design systems developer. Based in Brooklyn, NY'
    />
    <meta
      name='og:image'
      content='http://jxnblk.com/avatar/avatar-640.png'
    />
    <meta
      name='twitter:card'
      content='summary'
    />
    <meta
      name='twitter:site'
      content='@jxnblk'
    />
    <meta
      name='twitter:image'
      content='http://jxnblk.com/avatar/avatar-640.png'
    />
    <link href="http://jxnblk.com/favicon.png" rel="icon" />
    <link
      href="http://jxnblk.com/avatar/avatar-640.png"
      rel="apple-touch-icon"
    />
    <CSS />
  </React.Fragment>
)

const App = props => (
  <React.Fragment>
    <Head />
    <ThemeProvider theme={theme}>
      <ComponentsProvider components={components}>
        <Root py={6}>
          <Home />
        </Root>
      </ComponentsProvider>
    </ThemeProvider>
    <GA />
  </React.Fragment>
)

const GA = () =>
  <script
    dangerouslySetInnerHTML={{
      __html: ga
    }}
  />

const ga = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-4603832-6', 'auto'); ga('send', 'pageview');
`

export default App
