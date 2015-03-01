
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
    }
  },

  renderLogo: function(logo) {
    if (!logo) {
      return false;
    } else {
      return (
        <img src={logo}
          width="96"
          height="96"
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
          'px3 py4',
          'bg-' + this.props.backgroundColor,
          this.props.color),
        content: 'full-width',
        title: classnames('h1 h1-responsive m0'),
        description: 'm0'
    };
    var styles = {
      link: {
        backgroundImage: this.props.backgroundImage,
      }
    };

    return (
      <section className={classes.section}>
        <a href={this.props.link}
          className={classes.link}
          style={styles.link}>
          <div className={classes.content}>
            {this.renderLogo(this.props.logo)}
            <h1 className={classes.title}>{this.props.name}</h1>
            <p className={classes.description}>{this.props.description}</p>
          </div>
        </a>
      </section>
    )
  }

});
