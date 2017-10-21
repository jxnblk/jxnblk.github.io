---
title: Jxnblk | Brent Jackson
description: Design systems developer. Based in Brooklyn, NY
image: http://jxnblk.com/avatar/avatar-640.png
cards:
  - href: 'https://compositor.io/'
    image: 'https://s3-us-west-1.amazonaws.com/c8r-x0/viv-s.jpg'
    heading: Compositor
    text: 'Tools for designers, developers, and creatives'
    size: contain
  - href: 'http://jxnblk.com/grid-styled'
    image: 'http://jxnblk.com/grid-styled/icon.png'
    heading: Grid Styled
    text: Responsive React grid system
  - heading: Rebass
    text: 'Functional React UI component library'
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
  # - href: http://jxnblk.com/react-x-ray
  #   image: https://github.com/jxnblk/react-x-ray/raw/master/docs/x-ray.gif
  #   heading: React X-Ray
  #   text: React CSS layout debugger
  # - href: http://jxnblk.com/reflexbox
  #   image: http://jxnblk.com/reflexbox/card.png
  #   heading: Reflexbox
  #   text: Responsive React flexbox grid system
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
    <Grid justify='flex-end' px={3} py={2}>
      <Link href="https://compositor.io">Compositor</Link>
      <Link href="https://github.com/jxnblk">GitHub</Link>
      <Link href="https://twitter.com/jxnblk">
        Twitter
      </Link>
      <Link href="http://jxnblk.com/writing">
        Writing
      </Link>
    </Grid>
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
    <Grid align='center' p={3} w={[1, 0.5, 0.3333333333333333]}>
      {(props.cards || []).map(card => (
        <ImageCard
          key={card.href}
          href={card.href}
          heading={card.heading}
          image={card.image}
          size={card.size}
          text={card.text}
        />
      ))}
    </Grid>
  </Box>
</Container>
<Container py={5}>
  <Box mx={-3}>
    <Grid p={3} w={[1, 0.3333333333333333, 0.2]}>
      {(props.links || []).map(link => (
        <Link key={link.href} href={link.href}>
          {link.text}
        </Link>
      ))}
    </Grid>
  </Box>
</Container>
<footer>
  <Container py={5}>
    <Caps mx={-3}>
      <Grid p={3} align='center'>
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
      </Grid>
    </Caps>
  </Container>
</footer>
<script
  dangerouslySetInnerHTML={{
    __html:
      "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=ri[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date()a=s.createElement(o), m=s.getElementsByTagName(o)[0]a.async=1a.src=gm.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga') ga('create', 'UA-4603832-6', 'auto') ga('send', 'pageview')\n"
  }}
/>
