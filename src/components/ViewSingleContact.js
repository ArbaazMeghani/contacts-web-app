import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SingleContact from './SingleContact';
import { DialogActions, DialogTitle, IconButton } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
  closeIconButton: {
    position: "absolute",
    right: 0,
    top: 0
  }
};

class ViewSingleContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      canceledText: "Close",
      contact: {}
    };

    this.setContact = this.setContact.bind(this);
    this.saveContact = this.saveContact.bind(this);
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

  formButton() {
    if(this.state.isDisabled) {
      return this.editButton();
    }
    return this.saveButton();
  }

  render() {
    const { classes } = this.props;
    return (
      <Dialog open={this.props.open} aria-labelledby="simple-dialog-title">
        <form onSubmit={this.saveContact}>
          <DialogTitle>
            <IconButton className={classes.closeIconButton}>
              <CloseIcon onClick={() => this.closeDialog()}/>
            </IconButton>
          </DialogTitle>
          <SingleContact contact={this.state.contact} isDisabled={this.state.isDisabled} sendContact={this.setContact}/>
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

ViewSingleContact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ViewSingleContact);