import React from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class ContactsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contacts: []};
  }

  async componentDidMount() {
    let res = await Axios.get("https://contacts-rest-api.herokuapp.com/api/v1/contacts")
    this.setState({contacts: res.data});
  }

  singleContactHandler(contact) {
    console.log(contact.firstname);
  }

  render() {
      return (
        <div>
          {
            this.state.contacts.map(contact => (
              <div key={contact._id}>
                <Card>
                  <CardActionArea onClick={() => this.singleContactHandler(contact)}>
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