import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FacebookImage from '../../images/facebook.png'
import LinkedinImage from '../../images/linkedin.png'
import GithubImage from '../../images/github.png'
import Resume from '../../images/Jonathan_Lee_Resume.pdf'
import Avatar from '@material-ui/core/Avatar';
import GetAppIcon from '@material-ui/icons/GetApp';
import Typography from '@material-ui/core/Typography';

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: 'transparent',
    boxShadow: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    color: 'black',
    flexGrow: 1,
    marginLeft: '1vw'
  },
  button: {
    color: 'black'
  },
  icon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: '1vw'
  }
}));

export default function Header() {
    const classes = styles();
    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="static">
          <Toolbar >
            <Typography variant="h5" align="left" className={classes.title}>
            J O N L E E
            </Typography>
            <a href="https://www.facebook.com/jlee365">
              <Avatar className={classes.icon} src={FacebookImage} />
            </a>
            <a href="https://www.linkedin.com/in/jon-lee-6b18a331/">
              <Avatar className={classes.icon} src={LinkedinImage} />
            </a>
            <a href="https://github.com/jon-y-lee">
              <Avatar className={classes.icon} src={GithubImage} />
            </a>
            <a href={Resume}>
              <Avatar className={classes.icon} src={GetAppIcon} />
            </a>
          </Toolbar>
        </AppBar>
      </div>
    )
}
