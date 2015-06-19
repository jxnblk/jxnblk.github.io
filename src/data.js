
var fs = require('fs');
var path = require('path');
var cssnext = require('cssnext');
var colors = require('colors.css');
var styles = fs.readFileSync(path.join(__dirname, './style.css'), 'utf8');

colors.darkgray = '#304650';

module.exports = {
  name: 'Brent Jackson',
  title: 'Jxnblk',
  //username: 'jxnblk',
  baseUrl: '',
  favicon: 'favicon.png',
  //byline: 'Brent Jackson is a designer and proponent of simplicity, emphasizing systematic approaches, heuristics, qualitative and quantitative research, and designing from the gut. Based in Brooklyn, NY.',
  byline: 'Brent Jackson is a designer/developer specializing in living style guides, front-end architecture, and modular design systems, with an emphasis on heuristics, user-centered design, and collaborative design processes. Based in Brooklyn, NY.',
  homepage: '//jxnblk.com',
  headerLinks: [
    { href: '//jxnblk.com/writing', title: 'Writing' },
    { href: '//twitter.com/jxnblk', title: 'Twitter' },
    { href: '//github.com/jxnblk', title: 'Github' },
  ],
  social_networks: [
    { name: 'Twitter', link: '//twitter.com/jxnblk' },
    { name: 'Github', link: '//github.com/jxnblk' },
    { name: 'Dribbble', link: '//dribbble.com/jxnblk' },
    { name: 'Tumblr', link: '//jxnblk.tumblr.com' },
    { name: 'Soundcloud', link: '//soundcloud.com/jxnblk' }
  ],
  scripts: {
    ga: '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-4603832-6", "auto");ga("send", "pageview");'
  }
};

