
var React = require('react');
var classnames = require('classnames');

module.exports = React.createClass({

  renderPost: function(post, i) {
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
        <div className="sm-col-12 md-col-4 px3 mb3" key={'post-' + i}>
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
        <div className="sm-col-6 md-col-4 px3 mb3" key={'post-' + i}>
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
      <section id="writing"
        className="py3 overflow-hidden border-bottom border-thick border-darken-1">
        <h1 className="h6 caps mt0">Writing</h1>
        <div className="sm-flex flex-wrap mxn3">
          {posts.map(this.renderPost)}
        </div>
      </section>
    )
  }

});
