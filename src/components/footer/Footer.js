import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    bottom: '10vh'
  },
  profile: {
    width: '300px',
    height: '300px',
  },
  grid: {
    margin: '5vw'
  },
  a: {
    textDecoration: 'none'
  }
});

class Footer extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        &copy; 2020 Copyright Jonathanylee

      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Footer);
