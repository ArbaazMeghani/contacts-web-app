import React from 'react';
import Axios from 'axios';
import AllContacts from './AllContacts';
import ViewSingleContact from './ViewSingleContact';

export default class ContactsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isToggled: false,
      currentContact: {}
    };

    this.toggleDialog = this.toggleDialog.bind(this);
    this.singleContactHandler = this.singleContactHandler.bind(this);
  }

  async componentDidMount() {
    let res = await Axios.get("https://contacts-rest-api.herokuapp.com/api/v1/contacts");
    this.setState({contacts: res.data});
  }

  toggleDialog() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  }

  singleContactHandler(contact) {
    this.setState(() => ({
      currentContact: contact
    }));
    this.toggleDialog();
  }

  render() {
    let result = [];
    result.push(<AllContacts contacts={this.state.contacts} singleContactHandler={this.singleContactHandler} key="list" />);
    result.push(<ViewSingleContact 
      contact={this.state.currentContact}
      open={this.state.isToggled}
      onClose={this.toggleDialog}
      key="contact"
      />); 
    return result;
  }
}