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
      canceledText: "Close"
    };
  }

  disabledStateUpdate() {
    this.setState(prevState => ({
      isDisabled: !prevState.isDisabled,
      canceledText: "Cancel"
    }));
  }

  closeDialog() {
    this.props.onClose();
    this.setState(prevState => ({
      isDisabled: true,
      canceledText: "Close"
    }));
  }

  render() {
    return (
      <Dialog open={this.props.open} aria-labelledby="simple-dialog-title">
        <form>
          <SingleContact contact={this.props.contact} isDisabled={this.state.isDisabled} />
          <DialogActions>
            <Button variant="outlined" color="secondary" onClick={() => this.closeDialog()}>
                {this.state.canceledText}
            </Button>
            <Fab color="secondary" aria-label="Edit" onClick={() => this.disabledStateUpdate()}>
              <EditIcon />
            </Fab>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}