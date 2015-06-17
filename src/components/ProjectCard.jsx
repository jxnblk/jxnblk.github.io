
var React = require('react')
var cx = require('classnames')

var ProjectCard = React.createClass({

  getDefaultProps: function() {
    return {
      name: '',
      description: '',
      link: '/',
      customClass: false,
      logo: false,
    }
  },

  renderLogo: function(logo) {
    var width = (this.props.index < 2) ? 96 : 64
    var height = width
    if (this.props.logoSvg) {
      var svg = { __html: this.props.logoSvg }
      return ( <div dangerouslySetInnerHTML={svg} /> )
    } else if (this.props.logo) {
      return logo
    } else if (!logo) {
      return false
    }
  },

  render: function() {
    var classes = {
      section: cx('flex col-12'),
      link: cx('flex flex-end', 'col-12', 'overflow-hidden', 'btn', 'p3', this.props.className),
        content: 'full-width',
        title: cx('h1', 'm0'),
        description: cx('m0'),
    }
    var styles = {
      card: {
        minHeight: '30vh'
      }
    }

    return (
      <section className={classes.section} style={styles.card}>
        <a href={this.props.link}
          style={this.props.style}
          className={classes.link}>
          <div className={classes.content}>
            {this.renderLogo(this.props.logo)}
            <h1 className={classes.title}>{this.props.name}</h1>
            <p className={classes.description}>{this.props.description}</p>
          </div>
        </a>
      </section>
    )
  }

})

module.exports = ProjectCard

