
var cssnext = require('cssnext');
var colors = require('colors.css');

colors.darkgray = '#304650';

module.exports = {
  name: 'Brent Jackson',
  title: 'Jxnblk',
  username: 'jxnblk',
  baseUrl: '',
  favicon: 'favicon.png',
  styles: cssnext('@import "blk";', { compress: true }),
  stylesheet: 'http://d2v52k3cl9vedd.cloudfront.net/blk/1.0.1/blk.min.css',
  byline: 'Product designer at Etsy. Based in Brooklyn, NY.',
  homepage: '//jxnblk.com',
  headerLinks: [
    { href: '//twitter.com/jxnblk', title: 'Twitter' },
    { href: '//github.com/jxnblk', title: 'Github' },
  ],
  social_networks: [
    { name: 'Twitter', link: '//twitter.com/jxnblk' },
    { name: 'Github', link: '//github.com/jxnblk' },
    { name: 'Tumblr', link: '//jxnblk.tumblr.com' },
    { name: 'Soundcloud', link: '//soundcloud.com/jxnblk' }
  ],
  projects: {
    featured: [
      {
        name: 'Basscss',
        link: '//basscss.com',
        description: 'Low-level CSS toolkit',
        color: 'black',
        logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/bass-bolt.svg',
        customClass: 'caps left-align border border-thick border-aqua',
      },
      {
        name: 'CSS Stats',
        link: '//cssstats.com',
        description: 'CSS parsing tool',
        logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/cssstats.svg',
        color: 'black',
        customClass: 'border-gray',
      },
      {
        name: 'Geomicons',
        link: '//geomicons.com',
        description: 'Open source icons for the web',
        logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/geomicons-heart.svg',
        color: 'white',
        backgroundColor: colors.darkgray,
        backgroundImage: 'url(http://d2v52k3cl9vedd.cloudfront.net/assets/images/geomicons-grid.svg)',
      },
      {
        name: 'Colorable',
        link: '//jxnblk.com/colorable',
        description: 'Color palette contrast tester',
        color: colors.red,
        backgroundColor: colors.navy,
        logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/colorable.svg',
      },
      {
        name: 'Shade',
        link: '//jxnblk.com/shade',
        description: 'Mathematically-derived gradients',
        color: 'white',
        backgroundColor: '#f6ff00',
        backgroundImage: 'linear-gradient(-90deg, #F6FF00, #FF00A1)',
        customClass: 'border border-white',
      },
      {
        name: 'Spectral',
        link: '//jxnblk.com/Spectral',
        description: 'Click the Rainbow',
        color: 'rgba(0,0,0,.875)',
        backgroundColor: '#00c9fc', //colors.aqua,
      },
      {
        link: '//jxnblk.com/fitter-happier-text',
        description: 'Performant, Fully Fluid Headings',
        color: 'rgba(255,255,255,.875)',
        backgroundColor: '#f40',
        logoSvg: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" overflow="visible" viewBox="0 0 222 22"> <style> text { font-family: "Avenir Next", "Helvetica Neue", Helvetica, sans-serif; font-weight: 600; text-transform: uppercase; letter-spacing: .2em; } </style> <text x="50%" y="16" font-family="inherit" font-size="1rem" font-weight="inherit" style="text-anchor:middle">Fitter Happier Text</text> </svg>',
      },
      {
        name: 'Loading',
        link: '//jxnblk.com/loading',
        description: 'Animated SVG Loading Indicators',
        logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/loading-bubbles.svg',
        color: 'white',
        backgroundColor: '#aa4f80',
      },
    ],
    other: [
      { name: 'Principles', link: '//jxnblk.com/principles', description: 'Web Design Principles' },
      { name: 'Reading List', link: '//jxnblk.com/reading-list', description: 'Recommended Reading' },
      { name: 'Ashley', link: '//jxnblk.com/Ashley', description: 'Readable Tumblr Theme' },
      { name: 'Heather', link: '//jxnblk.com/Heather', description: 'Hyperminimal Jekyll Theme' },
      { name: 'Twipster', link: '//jxnblk.com/Twipster', description: 'Simpler, Readabler Twitter' },
      { name: 'SoundRad', link: '//soundrad.com', description: 'Simple, Fast Soundcloud Player' },
      { name: 'MrsJxn', link: '//mrsjxn.com', description: 'Post-Future Beats' },
      { name: 'Microbeats', link: '//microbeats.cc', description: 'Beats Created in Under an Hour' },
      { name: 'Skullcat', link: '//jxnblk.com/skullcat', description: 'A Avatar fur Mrmrs' },
      { name: 'Gifolio', link: '//jxnblk.com/gifolio', description: 'GIF Portfolio' },
      { name: 'Papercraft', link: '//jxnblk.com/papercraft', description: 'Hand-Coded SVG Lettering' },
      { name: 'Stepkit', link: '//jxnblk.com/stepkit', description: 'Web Audio Step Sequencer' },
    ]
  },
  writing: {
    posts: [
      {
        title: 'It’s Okay to Look the Same',
        subheading: 'Why frameworks are actually pretty great',
        link: 'https://medium.com/p/e95e79f409b7',
        lead: 'Every once in a while I hear someone complain about the visual homogenization of the web, and front-end frameworks often get the brunt of the attack. This visual sameness isn’t necessarily a bad thing.'
      },
      {
        title: 'Designing in the Browser Faster',
        subheading: null,
        link: 'https://medium.com/p/bd413d2bc4f3',
        lead: 'I’ve been dabbling with HTML and CSS for years—building small websites for myself and friends and building prototypes to test designs. And, while I’ve been fascinated with the idea of designing in the browser for a long time, it wasn’t until recently that it’s become much, much faster for me than using traditional design software.'
      },
      {
        title: 'Hack Design: Using Icons in Interfaces',
        subheading: null,
        link: 'https://hackdesign.org/lessons/24',
        lead: 'With the proliferation of mobile devices, icons play an increasingly important role in interface design. Icons can help aid in scannability, save space at smaller screen sizes, and afford clear, tappable targets. That said, icons can cause user confusion and frustration when used poorly. A solid foundation of heuristic icon design principles will save a lot of time on user research and help lead to the success of a product.'
      },
      {
        title: 'An Update on the Hamburger Menu',
        subheading: null,
        link: 'http://jxnblk.tumblr.com/post/82486816704/an-update-on-the-hamburger-menu',
        lead: null
      },
      {
        title: 'I’m Sick of Your Tiny, Tiny Type',
        subheading: null,
        link: 'http://jxnblk.tumblr.com/post/41796724549/im-sick-of-your-tiny-tiny-type',
        lead: null
      },
      {
        title: 'Organizing Mobile Navigation Based on Information-Seeking Behavior',
        subheading: null,
        link: 'http://jxnblk.tumblr.com/post/40693165132/organizing-mobile-navigation-based-on',
        lead: null
      },
      {
        title: 'Buckets & Jumpoffs: Using Content-Centric Contextual Navigation',
        subheading: null,
        link: 'http://jxnblk.tumblr.com/post/37416765650/buckets-jumpoffs-using-content-centric-contextual',
        lead: null
      },
      {
        title: 'The Advantages of Table Views Over Left Nav Flyouts',
        subheading: null,
        link: 'http://jxnblk.tumblr.com/post/36972301487/the-advantages-of-table-views-over-left-nav-flyouts',
        lead: null
      },
      {
        title: 'Hamburgers & Basements: Why Not to Use Left Nav Flyouts',
        subheading: null,
        link: 'http://jxnblk.tumblr.com/post/36218805036/hamburgers-basements-why-not-to-use-left-nav-flyouts',
        lead: null
      },
    ]
  },
};

