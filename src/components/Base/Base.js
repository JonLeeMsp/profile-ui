import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(20)
  },
  title: {
    flexGrow: 1,
  }
}));

class Base extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        Base Base Base
      </div>
    )
  }
}

Base.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Base);
