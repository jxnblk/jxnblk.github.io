import React from 'react'
import system from 'system-components'
import { MDXProvider } from '@mdx-js/tag'

const setProps = base => Comp => props => <Comp {...base} {...props} />

export const Base = system({
  fontSize: [ 20, 24, 32 ],
  lineHeight: 1.5,
  px: [ 3, 4, 5, 6 ],
  py: 6,
})

export const p = system({
  m: 0,
  fontSize: 'inherit',
  fontWeight: 'bold',
})

export const Heading = system({
  is: 'h2',
  m: 0,
  fontSize: 'inherit',
  fontWeight: 'bold',
  lineHeight: 1.25
})

export const a = system({
  is: 'a',
  fontSize: 'inherit',
  fontWeight: 'bold',
  color: 'inherit',
}, `
  &:hover { color: magenta; }
  text-decoration: none;
  transition: color .2s ease-out;
`)

export const ul = system({
  m: 0,
  p: 0,
}, `list-style: none;`)

export const hr = system({
  is: 'hr',
  mx: 0,
  my: 6,
  width: 64,
  border: 0,
  borderBottom: 4,
  borderColor: 'magenta'
})

export const pre = system({
  fontFamily: 'Menlo, monospace',
  fontSize: 13,
  my: 5
})

export const GA = () =>
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

export const components = {
  Root,
  Heading,
  h1: setProps({ is: 'h1', mb: 6 })(Heading),
  h2: Heading,
  h3: setProps({ is: 'h3' })(Heading),
  h4: setProps({ is: 'h4' })(Heading),
  h5: setProps({ is: 'h5' })(Heading),
  h6: setProps({ is: 'h6' })(Heading),
  p,
  a,
  ul,
  hr,
  pre,
}

export const Root = props =>
  <MDXProvider components={components}>
    <Base>
      {props.children}
    </Base>
  </MDXProvider>
