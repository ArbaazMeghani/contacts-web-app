import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = {

};

class NewContactForm extends React.Component {
  render() {
    this.classes = withStyles(styles);
    return (
      <div>
        Sample Return
      </div>
    );
  }
}

NewContactForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewContactForm);