import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import ProfilePicture from '../../images/profile_picture.jpg'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Resume from '../../images/Jonathan_Lee_Resume.pdf'

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
