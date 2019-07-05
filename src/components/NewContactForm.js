import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

const styles = {
  textfield: {
    margin: 10
  }
};

class NewContactForm extends React.Component {

  submitNewContactHandler() {
    console.log("Submitted Contact");
    this.props.onClose();
  }

  render() {
    const { classes } = this.props;
    return (
      <Dialog open={this.props.open} aria-labelledby="simple-dialog-title">
        <DialogTitle id="simple-dialog-title"> Create a New Contact </DialogTitle>
        <form onSubmit={() => this.submitNewContactHandler()}>
          <DialogContent>
            <TextField
              id="standard-name"
              label="First Name"
              margin="normal"
              className={classes.textfield}
            />
            <TextField
              id="standard-name"
              label="Last Name"
              margin="normal"
              className={classes.textfield}
            />
            <TextField
              required
              id="standard-required"
              label="Phone Number"
              margin="normal"
              className={classes.textfield}
            />
          </DialogContent>

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

NewContactForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewContactForm);