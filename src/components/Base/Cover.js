import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import ProfilePicture from '../../images/profile_picture.jpg'
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  profile: {
    width: '300px',
    height: '300px',
  }
});

class Cover extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Container maxWidth="sm">
        <Avatar src={ProfilePicture} className={classes.profile} />
        Summaery
      </Container>
      </div>
    )
  }
}

Cover.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Cover);
