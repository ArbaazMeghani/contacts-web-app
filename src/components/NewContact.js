import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = {
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 100,
    left: 'auto',
    position: 'fixed',
  }
};

class NewContact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

NewContact.propTypes = {
  classes: PropTypes.object.isRequired
};
  

export default withStyles(styles)(NewContact);