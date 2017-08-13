import dxs from 'dxs'
import { width } from 'styled-system'

const config = [
  {
    name: 'Container',
    type: 'div',
    props: {
      mx: 'auto',
      px: 3
    },
    styles: {
      maxWidth: 1280
    }
  },
  {
    name: 'Font',
    type: 'div',
    props: {
      family: '"Roboto Mono", Menlo, monospace',
      size: 16,
      lineHeight: '1.625'
    },
    styles: props => ({
      fontFamily: props.family,
      fontSize: props.size,
      lineHeight: props.lineHeight
    })
  },
  {
    name: 'Box',
    type: 'div',
    props: {},
    styles: props => Object.assign({}, width(props))
  },
  {
    name: 'Flex',
    type: 'Box',
    props: {
      align: 'stretch'
    },
    styles: props => ({
      display: 'flex',
      flexWrap: props.wrap ? 'wrap' : 'nowrap',
      alignItems: props.align,
    })
  },
  {
    name: 'Title',
    type: 'h1',
    props: {
      f: 3,
      m: 0
    },
    styles: {}
  },
  {
    name: 'Text',
    type: 'p',
    props: {
      f: 2,
      m: 0
    },
    styles: {}
  },
  {
    name: 'Image',
    type: 'img',
    props: {},
    styles: {
      display: 'block',
      maxWidth: '100%',
      height: 'auto'
    }
  },
  {
    name: 'Link',
    type: 'a',
    props: {
      color: 'inherit'
    },
    styles: {}
  },
  {
    name: 'BlockLink',
    type: 'a',
    props: {
      color: 'inherit'
    },
    styles: {
      display: 'block',
      textDecoration: 'none'
    }
  },
]

const theme = {
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256
  ]
}

const UI = dxs(config, { theme })

export const {
  ThemeProvider,
  Container,
  Font,
  Box,
  Flex,
  Title,
  Text,
  Link,
  BlockLink,
  Image,
} = UI

export default UI
