
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
  byline: 'Brent Jackson is a designer and proponent of simplicity, emphasizing systematic approaches, heuristics, qualitative and quantitative research, and designing from the gut. Based in Brooklyn, NY.',
  homepage: '//jxnblk.com',
  headerLinks: [
    { href: '//jxnblk.com/writing', title: 'Writing' },
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
        name: 'Building SVG Icons with React',
        link: '//jxnblk.com/react-icons',
        description: 'How to Create Mathematically-Generated Graphics Using JavaScript and React',
        logoSvg: '<svg viewBox="0 0 320 320" width="96" height="96" fill="currentcolor" data-reactid=".kx7z1la4u8.1.0.0.0"><path d="M 140.26588221812182 0 L 179.73411778187818 0 L 189.33840332223883 53.98463276250162 A 110 110 0 0 1 214.21880114527625 64.29043097804175 L 259.1829564855475 32.908786505852305 L 287.0912134941477 60.81704351445251 L 255.70956902195826 105.78119885472377 A 110 110 0 0 1 266.01536723749837 130.66159667776117 L 320 140.26588221812182 L 320 179.73411778187818 L 266.01536723749837 189.33840332223883 A 110 110 0 0 1 255.70956902195826 214.21880114527625 L 287.0912134941477 259.1829564855475 L 259.1829564855475 287.0912134941477 L 214.21880114527625 255.70956902195826 A 110 110 0 0 1 189.33840332223883 266.01536723749837 L 179.73411778187818 320 L 140.26588221812182 320 L 130.6615966777612 266.01536723749837 A 110 110 0 0 1 105.78119885472375 255.70956902195826 L 60.81704351445251 287.0912134941477 L 32.908786505852305 259.1829564855475 L 64.29043097804175 214.21880114527625 A 110 110 0 0 1 53.98463276250163 189.3384033222389 L 0 179.7341177818782 L 0 140.26588221812185 L 53.98463276250159 130.66159667776125 A 110 110 0 0 1 64.29043097804177 105.78119885472373 L 32.90878650585226 60.81704351445251 L 60.817043514452465 32.908786505852305 L 105.78119885472374 64.29043097804175 A 110 110 0 0 1 130.66159667776117 53.98463276250162 M 160 100 A 60 60 0 0 0 160 220 A 60 60 0 0 0 160 100" data-reactid=".kx7z1la4u8.1.0.0.0.0"></path><g data-reactid=".kx7z1la4u8.1.0.0.0.1"><circle style="fill:none;stroke:#FF4136;stroke-width:1;opacity:0.75;" cx="160" cy="160" r="160" data-reactid=".kx7z1la4u8.1.0.0.0.1.0"></circle><circle style="fill:none;stroke:#FF4136;stroke-width:1;opacity:0.75;" cx="160" cy="160" r="110" data-reactid=".kx7z1la4u8.1.0.0.0.1.1"></circle><circle style="fill:none;stroke:#FF4136;stroke-width:1;opacity:0.75;" cx="160" cy="160" r="60" data-reactid=".kx7z1la4u8.1.0.0.0.1.2"></circle><path d="M 160 160 L 160 0 M 160 160 L 273.1370849898476 46.862915010152406 M 160 160 L 320 160 M 160 160 L 273.1370849898476 273.1370849898476 M 160 160 L 160 320 M 160 160 L 46.862915010152406 273.1370849898476 M 160 160 L 0 160.00000000000003 M 160 160 L 46.86291501015236 46.862915010152406" style="fill:none;stroke:#FF4136;stroke-width:1;opacity:0.75;" data-reactid=".kx7z1la4u8.1.0.0.0.1.3"></path><path d="M 176.0027654484939 102.17343605227362 L 202.67404119598376 5.795829472729622 M 189.57389153378705 107.79478053347732 L 238.86371075676544 20.786081422606173 M 212.2052194665227 130.42610846621295 L 299.2139185773938 81.13628924323457 M 217.82656394772638 143.9972345515061 L 314.2041705272704 117.32595880401625 M 217.82656394772638 176.0027654484939 L 314.2041705272704 202.67404119598376 M 212.2052194665227 189.57389153378705 L 299.2139185773938 238.86371075676544 M 189.57389153378705 212.2052194665227 L 238.86371075676544 299.2139185773938 M 176.0027654484939 217.82656394772638 L 202.67404119598376 314.2041705272704 M 143.9972345515061 217.82656394772638 L 117.32595880401627 314.2041705272704 M 130.42610846621295 212.2052194665227 L 81.13628924323456 299.2139185773938 M 107.79478053347732 189.57389153378705 L 20.786081422606173 238.86371075676547 M 102.17343605227362 176.00276544849393 L 5.79582947272965 202.67404119598382 M 102.17343605227359 143.99723455150612 L 5.795829472729594 117.32595880401635 M 107.79478053347732 130.42610846621295 L 20.786081422606202 81.13628924323451 M 130.42610846621295 107.79478053347732 L 81.13628924323453 20.786081422606173 M 143.9972345515061 102.17343605227362 L 117.32595880401624 5.795829472729622" style="fill:none;stroke:#FF4136;stroke-width:1;opacity:0.25;" data-reactid=".kx7z1la4u8.1.0.0.0.1.4"></path></g></svg>',
        className: 'bg-darken-1'
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

