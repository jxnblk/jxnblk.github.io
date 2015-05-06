
var fs = require('fs');
var path = require('path');
var cssnext = require('cssnext');
var colors = require('colors.css');
var styles = fs.readFileSync(path.join(__dirname, './style.css'), 'utf8');

colors.darkgray = '#304650';

module.exports = {
  name: 'Brent Jackson',
  title: 'Jxnblk',
  username: 'jxnblk',
  baseUrl: '',
  favicon: 'favicon.png',
  styles: [
    cssnext([
        '@import "basscss-base-reset";',
        '@import "basscss-base-buttons";',
        '@import "basscss-base-typography";',
        '@import "basscss-utility-layout";',
        '@import "basscss-utility-typography";',
        '@import "basscss-white-space";',
        '@import "basscss-grid";',
        '@import "flex-object";',
        '@import "basscss-color-base";',
        '@import "basscss-button-transparent";',
        '@import "basscss-button-link";',
        '@import "basscss-borders";',
        '@import "basscss-colors";',
        '@import "basscss-defaults";',
        styles
      ].join(' '), {
      compress: true,
      features: {
        autoprefixer: false,
        rem: false,
        pseudoElements: false,
        customProperties: {
          variables: {
            'bold-font-weight': '500',
            'heading-font-weight': '500',
            'button-font-weight': '500',
            'button-font-size': 'var(--h5)',
          }
        }
      }
    }),
    '@media (min-width:40em){.sm-px3{padding-left:2rem;padding-right:2rem}}'
  ].join(' '),
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
        logoSvg: [
          '<svg xmlns="http://www.w3.org/2000/svg" class="mr1 aqua" viewBox="0 0 40 20" width="80" height="40" fill="currentcolor">',
          '<path d="M20 0 L24 8 L40 6 L20 16 L16 8 L0 10 z"></path>',
          '</svg>',
        ].join(' '),
        className: 'xcaps white bg-blue',
      },
      {
        name: 'CSS Stats',
        link: '//cssstats.com',
        description: 'CSS parsing tool',
        logoSvg: [
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="64" height="64" fill="currentcolor">',
          '<g font-family="Helvetica" font-size="12px" font-weight="bold">',
          '<text x="0.5" y="11">{</text>',
          '<text x="15.5" y="11" text-anchor="end">}</text>',
          '</g>',
          '<rect x="4.5" y="7" width="2.5" height="4"/>',
          '<rect x="8.5" y="5" width="2.5" height="6"/>',
          '</svg>'
        ].join(' '),
        className: 'bg-darken-1'
      },
      {
        name: 'Geomicons',
        link: '//geomicons.com',
        description: 'Open source icons for the web',
        logoSvg: '<svg id="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="48" height="48" fill="#0096ff"> <path d="M0 10 C0 6, 3 2, 8 2 C12 2, 15 5, 16 6 C17 5, 20 2, 24 2 C30 2, 32 6, 32 10 C32 18, 18 29, 16 30 C14 29, 0 18, 0 10  "></path> </svg>',
        className: 'white',
        style: {
          backgroundColor: '#304650'
        }
      },
      {
        name: 'Colorable',
        link: '//jxnblk.com/colorable',
        description: 'Color palette contrast tester',
        logoSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="transparent"> <style> .colorable-text { font-family: "Avenir Next", "Helvetica Neue", Helvetica, sans-serif; font-size: 20px; font-weight: 600; text-anchor: middle; } </style> <text x="16" y="22" width="32" fill="currentcolor" class="colorable-text"> Aa </text> </svg>',
        className: 'aqua bg-navy'
      },
      {
        name: 'Loading',
        link: '//jxnblk.com/loading',
        description: 'Animated SVG Loading Indicators',
        logoSvg: [
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="currentcolor">',
          '<circle transform="translate(8 0)" cx="0" cy="16" r="0">',
          '<animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"',
          'keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />',
          '</circle>',
          '<circle transform="translate(16 0)" cx="0" cy="16" r="0">',
          '<animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"',
          'keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />',
          '</circle>',
          '<circle transform="translate(24 0)" cx="0" cy="16" r="0">',
          '<animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"',
          'keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />',
          '</circle>',
          '</svg>'
        ].join(' '),
        className: 'white',
        style: {
          backgroundColor: '#40bfc0' //'#f54'
        }
      },
      {
        name: 'Shade',
        link: '//jxnblk.com/shade',
        description: 'Mathematically-derived gradients',
        className: 'white',
        style: {
          backgroundColor: '#F6FF00',
          backgroundImage: 'linear-gradient(-90deg, #F6FF00, #FF00A1)'
        }
      },
      {
        name: 'Fitter Happier Text',
        link: '//jxnblk.com/fitter-happier-text',
        description: 'Performant, Fully Fluid Headings',
        className: 'white',
        //logoSvg: '<svg data-fitter-happier-text="" class="avenir medium caps lh1" width="100%" style="max-height:100%" fill="currentcolor" overflow="visible" viewBox="0 0 64 16" opacity="0.8"><text x="50%" y="16" font-family="inherit" font-size="1rem" font-weight="inherit" style="text-anchor:middle">Fitter</text></svg>',
        logoSvg: '<svg data-fitter-happier-text="" class="avenir medium caps lh1" width="100%" style="max-height:100%" fill="currentcolor" overflow="visible" viewBox="0 0 158 16" opacity="0.8"><text x="50%" y="16" font-family="inherit" font-size="1rem" font-weight="inherit" style="text-anchor:middle">Fitter Happier</text></svg>',
        style: {
          backgroundColor: '#f43', //'#f37' //'#f40'
        }
      },
      {
        name: 'Spectral',
        link: '//jxnblk.com/Spectral',
        description: 'Click the Rainbow',
        className: 'white',
        //logoSvg: [
        //  '<svg viewBox="0 0 96 32" width="96" height="32">',
        //  '<rect width="32" height="32" fill="#00fc00" />',
        //  '<rect x="32" width="32" height="32" fill="#fcca00" />',
        //  '<rect x="64" width="32" height="32" fill="#fc0065" />',
        //  '</svg>'
        //].join(''),
        style: {
          backgroundColor: '#00c9fc',
          //backgroundImage: 'linear-gradient(90deg, #00c9fc, #00c9fc 25%, #00fc00 25%, #00fc00 50%, #fcca00 50%, #fcca00 75%, #fc0065 75%, #fc0065 100%)'
        }
      },
      {
        name: 'Plangular',
        link: '//jxnblk.com/plangular',
        description: 'Angular directive for custom SoundCloud players',
        logoSvg: '<svg class="geomicon" data-icon="play" viewBox="0 0 32 32" width="32" height="32" style="fill:currentcolor"><path d="M4 4 L28 16 L4 28 z "></path></svg>',
        className: 'red',
        style: {
          backgroundColor: '#102630'
        }
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

