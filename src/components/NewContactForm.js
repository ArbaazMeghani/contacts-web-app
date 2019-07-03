import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {

};

class NewContactForm extends React.Component {
  render() {
    this.classes = withStyles(styles);
    return (
      <Dialog open={this.props.open} aria-labelledby="simple-dialog-title">
        <DialogTitle id="simple-dialog-title"> Create a New Contact </DialogTitle>
        Sample Return
      </Dialog>
    );
  }
}

NewContactForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewContactForm);