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
    this.state = {
      firstname: this.props.contact.firstname,
      lastname: this.props.contact.lastname,
      number: this.props.contact.number
    }
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
        />
        <TextField
          id="standard-name"
          label="Last Name"
          margin="normal"
          value={this.props.contact.lastname}
          className={classes.textfield}
          disabled={this.props.isDisabled}
        />
        <TextField
          required
          id="standard-required"
          label="Phone Number"
          margin="normal"
          value={this.props.contact.number}
          className={classes.textfield}
          disabled={this.props.isDisabled}
          />
      </DialogContent>
    );
  }
}

SingleContact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleContact);