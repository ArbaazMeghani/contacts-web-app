import React from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SingleContact from './SingleContact';
import { DialogActions } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import CustomDialogTitle from './CustomDialogTitle';

export default class ViewSingleContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      contact: {}
    };

    this.setContact = this.setContact.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.deleteContactHandler = this.deleteContactHandler.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.contact !== this.props.contact){
      this.setState({
        contact: nextProps.contact
      });
    }
  }

  disabledStateUpdate() {
    this.setState(prevState => ({
      isDisabled: !prevState.isDisabled,
    }));
  }

  closeDialog() {
    this.props.onClose();
    this.setState({
      isDisabled: true,
    });
  }

  saveContact(event) {
    event.preventDefault();
    console.log(this.props.contact.number);
    Axios.put(`https://contacts-rest-api.herokuapp.com/api/v1/contacts/${this.props.contact.number}`,
      this.state.contact)
      .then(res => {
        console.log(res);
        window.location.reload();
      });
  }

  setContact(newContact) {
    console.log(this.props.contact.number);
    console.log(newContact);
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

  deleteContactHandler(event) {
    event.preventDefault();
    Axios.delete(`https://contacts-rest-api.herokuapp.com/api/v1/contacts/${this.props.contact.number}`)
    .then(res => {
      console.log(res);
      window.location.reload();
    });
  }

  deleteButton() {
    return (
      <Button variant="outlined" color="secondary" onClick={this.deleteContactHandler}>
        Delete
      </Button>
    );
  }

  cancelButton() {
    return (
      <Button variant="outlined" color="secondary" onClick={this.closeDialog}>
        Cancel
      </Button>
    );
  }

  formPrimaryButton() {
    if(this.state.isDisabled) {
      return this.editButton();
    }
    return this.saveButton();
  }

  formSecondaryButton() {
    if(this.state.isDisabled) {
      return this.deleteButton();
    }
    return this.cancelButton();
  }

  render() {
    return (
      <Dialog open={this.props.open} aria-labelledby="simple-dialog-title">
        <form onSubmit={this.saveContact}>
          <CustomDialogTitle onClickHandler={this.closeDialog}/>
          <SingleContact contact={this.state.contact} isDisabled={this.state.isDisabled} sendContact={this.setContact}/>
          <DialogActions>
            {this.formSecondaryButton()}
            {this.formPrimaryButton()}
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}