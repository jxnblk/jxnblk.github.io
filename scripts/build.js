
var _ = require('lodash');
var path = require('path');
var staticReact = require('static-react');
var Root = require('../src/root.jsx');
var props = require('jxnblk-api');

props.routes = [
  { path: '/', title: 'Home' }
];

if (process.env.NODE_ENV === 'production') {
  console.log('production build');
  props.baseUrl = '';
} else {
  console.log('development build');
  props.baseUrl = '';
}

props.title = 'Jxnblk';
props.description = 'Brent Jackson';
props.stylesheet = 'http://d2v52k3cl9vedd.cloudfront.net/blk/1.0.1/blk.min.css';
props.script = '/js/app.min.js'

props.headerLinks = [
  { href: '//twitter.com/jxnblk', title: 'Twitter' },
  { href: '//github.com/jxnblk', title: 'Github' },
];

staticReact({
  dir: path.join(__dirname, '..'),
  Root: Root,
  props: props
});

