import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import SingleContact from './SingleContact';

export default class NewContactForm extends React.Component {

  submitNewContactHandler() {
    console.log("Submitted Contact");
    this.props.onClose();
  }

  render() {
    return (
      <Dialog open={this.props.open} aria-labelledby="simple-dialog-title">
        <DialogTitle id="simple-dialog-title"> Create a New Contact </DialogTitle>
        <form onSubmit={() => this.submitNewContactHandler()}>
          <SingleContact />
          <DialogActions>
            <Button variant="outlined" color="secondary" onClick={() => this.props.onClose()}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}