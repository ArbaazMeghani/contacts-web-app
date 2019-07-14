import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SingleContact from './SingleContact';
import { DialogActions } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

export default class ViewSingleContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      canceledText: "Close",
      contact: {}
    };

    this.setContact = this.setContact.bind(this);
  }

  disabledStateUpdate() {
    this.setState(prevState => ({
      isDisabled: !prevState.isDisabled,
      canceledText: "Cancel"
    }));
  }

  closeDialog() {
    this.props.onClose();
    this.setState({
      isDisabled: true,
      canceledText: "Close"
    });
  }

  saveContact() {
    console.log("Saving Contact");
    this.closeDialog();
  }

  setContact(newContact) {
    this.setState({
      contact: newContact,
    });
  }

  editButton() {
    return (
      <Fab color="secondary" aria-label="Edit" onClick={() => this.disabledStateUpdate()}>
            <EditIcon />
      </Fab>
    );
  }

  saveButton() {
    return (
      <Button variant="contained" color="primary" type="submit">
        Save
      </Button>
    );
  }

  formButton() {
    if(this.state.isDisabled) {
      return this.editButton();
    }
    return this.saveButton();
  }

  render() {
    return (
      <Dialog open={this.props.open} aria-labelledby="simple-dialog-title">
        <form onSubmit={() => this.saveContact()}>
          <SingleContact contact={this.props.contact} isDisabled={this.state.isDisabled} sendContact={this.setContact}/>
          <DialogActions>
            <Button variant="outlined" color="secondary" onClick={() => this.closeDialog()}>
                {this.state.canceledText}
            </Button>
            {this.formButton()}
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}