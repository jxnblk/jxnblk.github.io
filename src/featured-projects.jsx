
var React = require('react');
var ProjectCard = require('./project-card.jsx');
var classnames = require('classnames');

module.exports = React.createClass({

  renderCard: function(card, i) {
    var colClass = classnames(
      'flex flex-auto px1 mb2 col-12 sm-col-6',
      {
        'lg-col-7': (i === 0),
        'lg-col-5': (i === 1),
        'lg-col-4' : (i > 1)
      }
    );

    return (
      <div className={colClass}
        key={'featured-' + i}>
        <ProjectCard {...card} index={i} />
      </div>
    )
  },

  render: function() {
    var featured = this.props.projects.featured;
    return (
      <section id="featured-projects"
        className="py3 border-bottom border-thick border-darken-1">
        <h1 className="h6 caps mt0 mb2">Featured Projects</h1>
        <div className="sm-flex flex-wrap mxn1">
          {featured.map(this.renderCard)}
        </div>
      </section>
    )
  }

});
