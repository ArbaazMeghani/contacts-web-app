import React from 'react';
import NewContactFab from './NewContactFab';

export default class NewContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };

    this.toggleDialog = this.toggleDialog.bind(this);
  }

  toggleDialog() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  }

  render() {
    let result = [];
    result.push(<NewContactFab onClickHandler={this.toggleDialog} />);
    return result;
  }
}