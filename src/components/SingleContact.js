import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

const styles = {
  textfield: {
    margin: 10
  }
};

class SingleContact extends React.Component {
  constructor(props) {
    super(props);

    this.firstnameUpdateHandler = this.firstnameUpdateHandler.bind(this);
    this.lastnameUpdateHandler = this.lastnameUpdateHandler.bind(this);
    this.numberUpdateHandler = this.numberUpdateHandler.bind(this);
  }

  createDefaultContact() {
    let contact = {};
    contact.firstname = this.props.contact.firstname;
    contact.lastname = this.props.contact.lastname;
    contact.number = this.props.contact.number;
    return contact;
  }

  firstnameUpdateHandler(event) {
    let contact = this.createDefaultContact();
    contact.firstname = event.target.value;

    this.props.sendContact(contact);
  }

  lastnameUpdateHandler(event) {
    let contact = this.createDefaultContact();
    contact.lastname = event.target.value;

    this.props.sendContact(contact);
  }

  numberUpdateHandler(event) {
    let contact = this.createDefaultContact();
    contact.number = event.target.value;

    this.props.sendContact(contact);
  }

  render() {
    const { classes } = this.props;
    return (
      <DialogContent>
        <TextField
          id="standard-name"
          label="First Name"
          margin="normal"
          value={this.props.contact.firstname}
          className={classes.textfield}
          disabled={this.props.isDisabled}
          onChange={this.firstnameUpdateHandler}
        />
        <TextField
          id="standard-name"
          label="Last Name"
          margin="normal"
          value={this.props.contact.lastname}
          className={classes.textfield}
          disabled={this.props.isDisabled}
          onChange={this.lastnameUpdateHandler}
        />
        <TextField
          required
          id="standard-required"
          label="Phone Number"
          margin="normal"
          value={this.props.contact.number}
          className={classes.textfield}
          disabled={this.props.isDisabled}
          onChange={this.numberUpdateHandler}
          />
      </DialogContent>
    );
  }
}

SingleContact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleContact);