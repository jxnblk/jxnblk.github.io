
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var build = require('static-react/build');
var Root = require('../src/root.jsx');

//var props = require('jxnblk-api');




var html = build({
  Root: Root,
  props: props,
  noScript: true
});

fs.writeFileSync(path.join(__dirname, '../index.html'), html);
console.log('Static index.html built');

