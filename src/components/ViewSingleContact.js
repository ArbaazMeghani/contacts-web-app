import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SingleContact from './SingleContact';
import { DialogActions } from '@material-ui/core';

export default class ViewSingleContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true
    };
  }

  disabledStateUpdate() {
    this.setState(prevState => ({
      isDisabled: !prevState.isDisabled
    }));
  }

  render() {
    return (
      <Dialog open={this.props.open} aria-labelledby="simple-dialog-title">
        <form>
          <SingleContact contact={this.props.contact} isDisabled={this.state.isDisabled} />
          <DialogActions>
            <Button variant="outlined" color="secondary" onClick={() => this.props.onClose()}>
                Close
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}