import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import SingleContact from './SingleContact';

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
        </form>
      </Dialog>
    );
  }
}