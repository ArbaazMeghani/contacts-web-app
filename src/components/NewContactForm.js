import React from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import SingleContact from './SingleContact';
import CustomDialogTitle from './CustomDialogTitle';
import postAxiosCall from '../utils/PostAxiosCall';

export default class NewContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.setContact = this.setContact.bind(this);
    this.state = {
      contact: {
        firstname: "",
        lastname: "",
        number: ""
      }
    };
  }

  async submitNewContactHandler(event) {
    event.preventDefault();
    let res = await Axios.post("https://contacts-rest-api.herokuapp.com/api/v1/contacts", this.state.contact);
    postAxiosCall(res);
  }

  setContact(newContact) {
    console.log(newContact);
    this.setState({
      contact: newContact,
    });
  }

  render() {
    return (
      <Dialog open={this.props.open} aria-labelledby="simple-dialog-title">
        <form onSubmit={event => this.submitNewContactHandler(event)}>
          <CustomDialogTitle onClickHandler={this.props.onClose} titleText={"Create a New Contact"}/>
          <SingleContact contact={this.state.contact} isDisabled={false} sendContact={this.setContact}/>
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