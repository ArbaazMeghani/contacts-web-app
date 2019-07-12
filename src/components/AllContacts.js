import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  Card: {
    maxWidth: 245
  },
};

class AllContacts extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {
          this.props.contacts.map(contact => (
            <div key={contact._id}>
              <Card className={classes.Card}>
                <CardActionArea onClick={() => this.props.singleContactHandler(contact)}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"> 
                      {contact.firstname} {contact.lastname}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      Phone: {contact.number}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <br />
            </div>
          ))
        }
      </div>
    )
  }
}

AllContacts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllContacts);