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

class Cover extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Avatar src={ProfilePicture} className={classes.profile} />
          </Grid>
          <Grid item>
            <Grid className={classes.grid} container direction="column" justify="center" alignItems="stretch">
              <Grid item>
                <Typography variant="h4" align="left" className={classes.title}>
                  Software Development Engineer
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" align="left" className={classes.title}>
                  Front End | Back End | Mission Critical Systems
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" display='block' align="left" className={classes.title}>
                  Full Stack Engineer with a passion for quality mission <br/>
                   critical systems that makes an impact to the world.
                </Typography>
              </Grid>
              <Grid item>
                <Typography color='overline' variant="subtitle2" align="left" className={classes.title}>
                <a className={classes.a} href={Resume}>RESUME</a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Cover.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Cover);
