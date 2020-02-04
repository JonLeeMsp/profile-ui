import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles'
import Cover from './Cover'
import Experience from '../timeline/Experience'
import ATC from '../../images/atc.jpeg'
import Target from '../../images/target.jpeg'
import Amazon from '../../images/amazon.jpeg'

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
        <Cover/>
        <Experience
        iconLabel="Amazon"
        iconLabel2="2019 - Current"
        title="Software Development Engineer"
        backgroundImage={Amazon}>
        Modernizing global payment systems at incredible scale
        </Experience>

        <Experience
        iconLabel="Target Corporation"
        iconLabel2="2015 - 2019"
        title="Lead Software Engineer"
        backgroundImage={Target}>
        Full stack development creating modern micro service <br/>
        applications for competitive Pricing and Promotions <br/>
        systems in Target.com and all 1800 stores.
        </Experience>

        <Experience
        iconLabel="Lockheed Martin"
        iconLabel2="2006 - 2015"
        title="Senior Software Engineer"
        backgroundImage={ATC}>
        Research and Development for the FAA, Australia, and <br/>
        Korean Air Traffic Control systems.
        </Experience>
      </div>
    )
  }
}

Base.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Base);
