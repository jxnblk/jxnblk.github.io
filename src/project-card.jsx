
var React = require('react');
var classnames = require('classnames');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      name: '',
      description: '',
      link: '/',
      backgroundImage: false,
      backgroundSize: false,
      backgroundColor: 'black',
      color: 'white',
      customClass: false,
      logo: false,
    }
  },

  renderLogo: function(logo) {
    var width = (this.props.index < 3) ? 96 : 64;
    var height = width;
    if (this.props.logoSvg) {
      var svg = { __html: this.props.logoSvg };
      return ( <div dangerouslySetInnerHTML={svg} /> );
    } else if (!logo) {
      return false;
    } else {
      return (
        <img src={logo}
          width={width}
          height={height}
          className=""
          alt={this.props.name + ' logo'} />
      );
    }
  },

  render: function() {
    var classes = {
      section: classnames(this.props.className, 'flex full-width center mb3'),
      link: classnames(
          this.props.customClass,
          'flex flex-center',
          'full-width',
          'button button-transparent',
          'px3',
          'py4',
          'bg-' + this.props.backgroundColor,
          this.props.color),
        content: 'full-width',
        title: classnames(
          { 'h0 h0-responsive': (this.props.index == 0) },
          { 'h1 h1-responsive': (this.props.index > 0 && this.props.index < 3) },
          { 'h1': (this.props.index > 2 && this.props.index < 6) },
          { 'h2': (this.props.index > 5) },
          'm0'),
        description: classnames('m0',
          { 'h5': (this.props.index > 2) }),
    };
    var letterSpacing;
    if (this.props.customClass) {
      letterSpacing = this.props.customClass.match(/caps/g) ? '.2em' : false;
    }
    var styles = {
      link: {
        backgroundImage: this.props.backgroundImage,
      },
      h1: {
        letterSpacing: letterSpacing
      },
      description: {
        letterSpacing: letterSpacing
      }
    };

    return (
      <section className={classes.section}>
        <a href={this.props.link}
          className={classes.link}
          style={styles.link}>
          <div className={classes.content}>
            {this.renderLogo(this.props.logo)}
            <h1 className={classes.title} style={styles.h1}>{this.props.name}</h1>
            <p className={classes.description} style={styles.description}>{this.props.description}</p>
          </div>
        </a>
      </section>
    )
  }

});
