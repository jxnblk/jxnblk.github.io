---
title: Jxnblk | Brent Jackson
description: Design systems developer. Based in Brooklyn, NY
image: http://jxnblk.com/avatar/avatar-640.png
cards:
  - href: 'https://compositor.io/'
    _image: 'https://compositor.io/logo/dist/compositor.png'
    image: 'https://s3-us-west-1.amazonaws.com/c8r-x0/viv-s.jpg'
    heading: Compositor
    text: 'Tools for designers, developers, and creatives'
    size: contain
  - href: 'http://jxnblk.com/grid-styled'
    image: 'http://jxnblk.com/grid-styled/icon.png'
    heading: Grid Styled
    text: Responsive React grid system built with styled-components
  - heading: Rebass
    text: 'Functional React UI component library, built with styled-components'
    href: 'http://jxnblk.com/rebass/'
    image: 'http://jxnblk.com/rebass/card.png'
  - href: 'https://colorable.jxnblk.com'
    image: 'https://colorable.jxnblk.com/004466/00ffa2/card.png'
    heading: Colorable
    text: Color contrast tester
  - href: 'https://palx.jxnblk.com'
    image: 'https://palx.jxnblk.com/07c/card.png'
    heading: Palx
    text: Automatic UI color palette generator
  - href: 'http://basscss.com'
    image: 'http://basscss.com/images/f48c400f6f1aa4b44cb2b7a8103291b9.png'
    heading: Basscss
    text: Low-level CSS toolkit
links:
  - text: Styled System
    href: 'https://github.com/jxnblk/styled-system/'
  - text: Monochrome
    href: 'https://monochrome.jxnblk.com/'
  - text: Hello Color
    href: 'http://jxnblk.com/hello-color/'
  - text: Shade
    href: 'http://jxnblk.com/shade/'
  - text: Grays
    href: 'http://jxnblk.com/grays/'
  - text: Microicon
    href: 'https://icon.now.sh/'
  - text: MrsJxn
    href: 'http://mrsjxn.com/'
  - text: Microbeats
    href: 'http://microbeats.cc/'
  - text: Skullcat
    href: 'http://jxnblk.com/skullcat/'
  - text: Gifolio
    href: 'http://jxnblk.com/gifolio/'
css: '*{box-sizing:border-box}body{margin:0}'
ga: >
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-4603832-6', 'auto'); ga('send', 'pageview');
---
<link href="http://jxnblk.com/favicon.png" rel="icon" />
<link
  href="http://jxnblk.com/avatar/avatar-640.png"
  rel="apple-touch-icon"
/>
<Container py={3}>
  <Caps mx={-3}>
    <Layout justify='flex-end' px={3} py={2}>
      <Link href="https://compositor.io">Compositor</Link>
      <Link href="https://github.com/jxnblk">GitHub</Link>
      <Link href="https://twitter.com/jxnblk">
        Twitter
      </Link>
      <Link href="http://jxnblk.com/writing">
        Writing
      </Link>
    </Layout>
  </Caps>
</Container>
<header>
  <Container py={6}>
    <Flex align="center" mb={5}>
      <Box mr="auto">
        <Title>Jxnblk</Title>
        <Heading>Brent Jackson</Heading>
      </Box>
      <Avatar size={96} />
    </Flex>
    <Text fontSize={[ 4, 5, 6 ]}>
      Trying to build better tools for designers and
      developers. Based in Brooklyn, NY.
    </Text>
  </Container>
</header>
<Container py={5}>
  <Box mx={-3}>
    <Layout p={3} w={[1, 0.5, 0.3333333333333333]}>
      <ImageCard
        heading="Compositor"
        href="https://compositor.io/"
        image="https://s3-us-west-1.amazonaws.com/c8r-x0/viv-s.jpg"
        size="contain"
        text="Tools for designers, developers, and creatives"
      />
      <ImageCard
        heading="Rebass"
        href="http://jxnblk.com/rebass/"
        image="http://jxnblk.com/rebass/card.png"
        size={undefined}
        text="Functional React UI component library, built with styled-components"
      />
      <ImageCard
        heading="Grid Styled"
        href="http://jxnblk.com/grid-styled"
        image="http://jxnblk.com/grid-styled/icon.png"
        size={undefined}
        text="Responsive React grid system built with styled-components"
      />
      <ImageCard
        heading="Basscss"
        href="http://basscss.com"
        image="http://basscss.com/images/f48c400f6f1aa4b44cb2b7a8103291b9.png"
        size={undefined}
        text="Low-level CSS toolkit"
      />
      <ImageCard
        heading="Colorable"
        href="https://colorable.jxnblk.com"
        image="https://colorable.jxnblk.com/004466/00ffa2/card.png"
        size={undefined}
        text="Color contrast tester"
      />
      <ImageCard
        heading="Palx"
        href="https://palx.jxnblk.com"
        image="https://palx.jxnblk.com/07c/card.png"
        size={undefined}
        text="Automatic UI color palette generator"
      />
    </Layout>
  </Box>
</Container>
<Container py={5}>
  <Box mx={-3}>
    <Layout p={3} w={[1, 0.3333333333333333, 0.2]}>
      <Link href="https://github.com/jxnblk/styled-system/">
        Styled System
      </Link>
      <Link href="https://monochrome.jxnblk.com/">
        Monochrome
      </Link>
      <Link href="http://jxnblk.com/hello-color/">
        Hello Color
      </Link>
      <Link href="http://jxnblk.com/shade/">Shade</Link>
      <Link href="http://jxnblk.com/grays/">Grays</Link>
      <Link href="https://icon.now.sh/">Microicon</Link>
      <Link href="http://mrsjxn.com/">MrsJxn</Link>
      <Link href="http://microbeats.cc/">Microbeats</Link>
      <Link href="http://jxnblk.com/skullcat/">
        Skullcat
      </Link>
      <Link href="http://jxnblk.com/gifolio/">
        Gifolio
      </Link>
    </Layout>
  </Box>
</Container>
<footer>
  <Container py={5}>
    <Caps mx={-3}>
      <Layout p={3} align='center'>
        <Link href="https://compositor.io/">
          Built with Compositor
        </Link>
        <Link href="https://github.com/jxnblk">
          GitHub
        </Link>
        <Link href="https://twitter.com/jxnblk">
          Twitter
        </Link>
        <Link href="http://jxnblk.com/writing">
          Writing
        </Link>
        <Pre>(^..^ )_</Pre>
      </Layout>
    </Caps>
  </Container>
</footer>
<script
  dangerouslySetInnerHTML={{
    __html:
      "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=ri[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date()a=s.createElement(o), m=s.getElementsByTagName(o)[0]a.async=1a.src=gm.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga') ga('create', 'UA-4603832-6', 'auto') ga('send', 'pageview')\n"
  }}
/>
