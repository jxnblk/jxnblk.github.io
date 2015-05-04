
var React = require('react');
var classnames = require('classnames');

module.exports = React.createClass({

  renderProject: function(project, i) {
    var colClass = classnames('sm-col-6 md-col-4 lg-col-3 mb2');
    return (
      <div className={colClass} key={'other-' + i}>
        <a href={project.link} className="block button button-transparent" title={'View ' + project.name}>
          <h2 className="h3 m0">{project.name}</h2>
          <p className="h5 m0">{project.description}</p>
        </a>
      </div>
    )
  },

  render: function() {
    var projects = this.props.projects.other;
    return (
      <section id="other-projects"
        className="py3 border-bottom border-thick border-darken-1">
        <h1 className="h5 mt0">Other Projects</h1>
        <div className="sm-flex flex-wrap mxn2">
          {projects.map(this.renderProject)}
        </div>
      </section>
    )
  }

});
