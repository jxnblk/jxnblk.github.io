---
title: Jxnblk | Brent Jackson
links:
  - text: Compositor
    href: https://compositor.io/
  - text: Styled System
    href: https://github.com/jxnblk/styled-system/
  - text: Rebass
    href: http://jxnblk.com/rebass/
  - text: Grid Styled
    href: http://jxnblk.com/grid-styled/
  - text: Basscss
    href: http://basscss.com/
  - text: Colorable
    href: https://colorable.jxnblk.com/
  - text: Palx
    href: https://palx.jxnblk.com/
  - text: Monochrome
    href: https://monochrome.jxnblk.com/
  - text: Hello Color
    href: http://jxnblk.com/hello-color/
  - text: Shade
    href: http://jxnblk.com/shade/
  - text: Grays
    href: http://jxnblk.com/grays/
  - text: Microicon
    href: https://icon.now.sh/
  - text: MrsJxn
    href: http://mrsjxn.com/
  - text: Skullcat
    href: http://jxnblk.com/skullcat/
  - text: Gifolio
    href: http://jxnblk.com/gifolio/
css: '*{box-sizing:border-box}body{margin:0}'
ga:
  >
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-4603832-6', 'auto');
    ga('send', 'pageview');
---
<link rel='icon' href='http://jxnblk.com/favicon.png' />
<link rel='apple-touch-icon' href='http://jxnblk.com/avatar/avatar-640.png' />
<header>
  <Container py={6}>
    <Flex align='center' mb={5}>
      <Box mr='auto'>
        <Title>Jxnblk</Title>
        <Heading>Brent Jackson</Heading>
      </Box>
      <Avatar size={128} />
    </Flex>
    <Text>
      Building tools for designers and developers at
      Compositor. Based in Brooklyn, NY.
    </Text>
  </Container>
</header>
<Container>
  <Caps mx={-3}>
    <Layout py={2} px={3}>
      <Link href="https://compositor.io">Compositor</Link>
      <Link href="https://github.com/jxnblk">GitHub</Link>
      <Link href="https://twitter.com/jxnblk">Twitter</Link>
      <Link href="http://jxnblk.com/writing">Writing</Link>
    </Layout>
  </Caps>
</Container>
<Container py={5}>
  <Box mx={-3}>
    <Layout p={3} w={[ 1, 1/3, 1/5 ]}>
      {(props.links || []).map(link => (
        <Link key={link.text} href={link.href}>{link.text}</Link>
      ))}
    </Layout>
  </Box>
</Container>
<footer>
  <Container py={5}>
    <Caps mx={-3}>
      <Layout p={3}>
        <Link href="https://compositor.io/">
          Built with Compositor
        </Link>
        <Link href="https://github.com/jxnblk">
          GitHub
        </Link>
        <Link href="https://twitter.com/jxnblk">Twitter</Link>
        <Link href="http://jxnblk.com/writing">Writing</Link>
      </Layout>
    </Caps>
  </Container>
</footer>
<script dangerouslySetInnerHTML={{ __html: props.ga }} />
