import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

const styles = makeStyles({
  textfield: {
    margin: 10
  }
});

export default function SingleContact({ contact, isDisabled}) {
  const classes = styles();
  return (
    <DialogContent>
      <TextField
        id="standard-name"
        label="First Name"
        margin="normal"
        value={contact.firstname}
        className={classes.textfield}
        disabled={isDisabled}
      />
      <TextField
        id="standard-name"
        label="Last Name"
        margin="normal"
        value={contact.lastname}
        className={classes.textfield}
        disabled={isDisabled}
      />
      <TextField
        required
        id="standard-required"
        label="Phone Number"
        margin="normal"
        value={contact.number}
        className={classes.textfield}
        disabled={isDisabled}
      />
    </DialogContent>
  );
}