
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var build = require('static-react').build;
var Root = require('../src/root.jsx');

var props = require('jxnblk-api');

props.title = 'Jxnblk';
props.description = 'Brent Jackson';
props.stylesheet = 'http://d2v52k3cl9vedd.cloudfront.net/blk/1.0.1/blk.min.css';

props.headerLinks = [
  { href: '//twitter.com/jxnblk', title: 'Twitter' },
  { href: '//github.com/jxnblk', title: 'Github' },
];

var html = build({
  Root: Root,
  props: props,
  noScript: true
});

fs.writeFileSync(path.join(__dirname, '../index.html'), html);
console.log('Static index.html built');

