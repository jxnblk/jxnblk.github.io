
var React = require('react');
var classnames = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({

  renderPost: function(post, i) {
    var id = _.kebabCase(post.title);
      var subheading = function(subheading) {
        if (subheading) {
          return (
            <h3 className="mt0">
              <a href={post.link} className="">
                {post.subheading}
              </a>
            </h3>
          )
        }
      };
    if (i < 3) {
      return (
        <div id={id} className="sm-col-12 md-col-4 px3 mb3" key={'post-' + i}>
          <h2 className="mb0">
            <a href={post.link} className="black">
              {post.title}{post.subheading ? ': ' + post.subheading : false}
            </a>
          </h2>
          <p>{post.lead} <a href={post.link}>Read more...</a></p>
        </div>
      )
    } else {
      return (
        <div id={id} className="sm-col-6 md-col-4 px3 mb3" key={'post-' + i}>
          <h2 className="h3 m0">
            <a href={post.link} className="black">{post.title}</a>
          </h2>
        </div>
      )
    }
  },

  render: function() {
    var posts = this.props.writing.posts;
    return (
      <section id="other-projects"
        className="py3 border-bottom border-thick border-aqua">
        <h1 className="h6 caps mt0">Writing</h1>
        <div className="sm-flex flex-wrap mxn3">
          {posts.map(this.renderPost)}
        </div>
      </section>
    )
  }

});
