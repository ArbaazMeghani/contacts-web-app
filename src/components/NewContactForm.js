import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const styles = {

};

class NewContactForm extends React.Component {
  render() {
    this.classes = withStyles(styles);
    return (
      <Dialog open={this.props.open} aria-labelledby="simple-dialog-title">
        <DialogTitle id="simple-dialog-title"> Create a New Contact </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sample Return
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => this.props.onClose()}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

NewContactForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewContactForm);