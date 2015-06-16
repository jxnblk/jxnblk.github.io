
var React = require('react');
var ProjectCard = require('./ProjectCard.jsx');
var cx = require('classnames');

module.exports = React.createClass({

  renderCard: function(card, i) {
    var colClass = cx(
      'flex flex-auto mb2 col-12 sm-col-6 px1',
      {
        'md-col-8': (i === 0),
        'md-col-4': (i === 1),
        'md-col-5': (i === 2),
        'md-col-7': (i === 3),
        //'sm-col-6': (i > 1),
        'lg-col-4' : (i > 3)
      }
    );
    var style = {};
    if (i === 0) {
      style.minHeight = '40vh';
    } else if (i < 3) {
      style.minHeight = '30vh';
    } else {
      style.minHeight = '20vh';
    }

    return (
      <div className={colClass}
        style={style}
        key={'featured-' + i}>
        <ProjectCard {...this.props} {...card} index={i} />
      </div>
    )
  },

  render: function() {
    var featured = this.props.projects.featured;
    return (
      <section id="featured-projects"
        className="py2 border-bottom border-thick border-darken-1">
        <div className="flex flex-wrap mxn1">
          {featured.map(this.renderCard)}
        </div>
      </section>
    )
  }

});
