
var React = require('react');
var Root = require('./root.jsx');

//if (typeof document !== 'undefined') {
//}

module.exports = function render(locals, callback) {
  var html = React.renderToString(React.createElement(Root, locals));
  callback(null, '<!DOCTYPE html>' + html);
};

