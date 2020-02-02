import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: 'transparent',
    boxShadow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    color: 'black',
    flexGrow: 1,
  },
  button: {
    color: 'black'
  }
}));

export default function Header() {
    const classes = styles();

    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="static">
          <Toolbar >
            <div variant="h6" className={classes.title}/>
            <Button className={classes.button} color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}
