import React from 'react'
import { Box, Flex } from 'grid-styled'
import { Avatar } from 'jxnblk-avatar'
import {
  Root,
  Text,
  Heading,
  Link,
  List,
  Divider,
  Pre
} from './system.json'
import theme from './theme'
import Loadable from 'react-loadable'

const px = base => Comp => props => <Comp {...base} {...props} />

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

const components = {
  Avatar,
  Box,
  Flex,
  GA,
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

const Home = Loadable({
  loading: () => <pre>loading...</pre>,
  loader: () => import('./index.mdx')
})

const config = ({ mdx }) => {
  console.log(mdx)

  return {
    title: 'Jxnblk | Brent Jackson',
    description: 'Design systems developer. Based in Brooklyn, NY',
    image: 'http://jxnblk.com/avatar/avatar-640.png',
    theme,
    components,
    routes: [
      // ...mdx,
      {
        path: '/',
        exact: true,
        component: Home
      }
    ]
  }
}

export default config
