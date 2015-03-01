
var React = require('react');
var ProjectCard = require('./project-card.jsx');
var classnames = require('classnames');

module.exports = React.createClass({

  renderCard: function(card, i) {
    var colClass = classnames(
      'flex px2',
      { 'col-12': (i == 0) },
      { 'col-12 sm-col-6' : (i != 0) },
      { 'lg-col-4' : (i > 2) }
    );
    var colStyle = {
      minHeight: (i == 0) ? '75vh' : false,
    };
    return (
      <div className={colClass}
        style={colStyle}
        key={'featured-' + i}>
        <ProjectCard {...card} />
      </div>
    )
  },

  render: function() {
    var featured = this.props.projects.featured;
    return (
      <section id="featured-projects"
        className="py4">
        <div className="flex flex-wrap mxn2">
          {featured.map(this.renderCard)}
        </div>
      </section>
    )
  }

});
