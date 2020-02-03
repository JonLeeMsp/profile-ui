import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    color: 'black',
    flexGrow: 1,
    margin: '5vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  profile: {
    width: '300px',
    height: '300px',
  },
  grid: {
    margin: '5vw',
    opacity: '100',
  },
  a: {
    textDecoration: 'none',
  }
});

class Experience extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}
        style={{'background-image': 'url('+this.props.backgroundImage+')'}}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h6" align="left" className={classes.title}>
              {this.props.iconLabel} <br/>
              {this.props.iconLabel2}
            </Typography>
          </Grid>
          <Grid item>
            <Grid className={classes.grid}
              container
              direction="column"
              justify="center"
              alignItems="stretch">
              <Grid item>
                <Typography variant="h6" align="left" className={classes.title}>
                  {this.props.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  display='block'
                  align="left"
                  className={classes.title}>
                  {this.props.children}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);
