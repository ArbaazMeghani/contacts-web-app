import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import SingleContact from './SingleContact';

export default class NewContactForm extends React.Component {
  render() {
    return (
      <Dialog open={this.props.open} aria-labelledby="simple-dialog-title">
        <form>
          <SingleContact contact={{}}/>
        </form>
      </Dialog>
    );
  }
}