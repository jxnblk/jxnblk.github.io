
var React = require('react')
var cx = require('classnames')
var projects = require('../projects').other

var OtherProjects = React.createClass({

  renderProject: function(project, i) {
    var colClass = cx('sm-col-6 md-col-4 lg-col-3 mb2')
    return (
      <div className={colClass} key={'other-' + i}>
        <a href={project.link} className="block btn btn-link" title={'View ' + project.name}>
          <h2 className="h3 m0">{project.name}</h2>
          <p className="h5 m0">{project.description}</p>
        </a>
      </div>
    )
  },

  render: function() {
    return (
      <section id="other-projects"
        className="py3 border-bottom border-thick border-darken-1">
        <div className="sm-flex flex-wrap">
          {projects.map(this.renderProject)}
        </div>
      </section>
    )
  }

})

module.exports = OtherProjects

