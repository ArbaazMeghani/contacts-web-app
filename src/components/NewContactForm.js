import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import SingleContact from './SingleContact';

export default class NewContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.setContact = this.setContact.bind(this);
    this.state = {
      contact: {}
    };
  }

  submitNewContactHandler() {
    console.log("Submitted Contact");
    this.props.onClose();
  }

  setContact(newContact) {
    this.setState({
      contact: newContact,
    });
  }

  render() {
    return (
      <Dialog open={this.props.open} aria-labelledby="simple-dialog-title">
        <DialogTitle id="simple-dialog-title"> Create a New Contact </DialogTitle>
        <form onSubmit={() => this.submitNewContactHandler()}>
          <SingleContact contact={{}} isDisabled={false} sendContact={this.setContact}/>
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