import React from 'react';
import axios from 'axios';

export default class ContactsList extends React.Component {
    state = {
        contacts: []
    };

    async componentDidMount() {
        let res = await axios.get("https://contacts-rest-api.herokuapp.com/api/v1/contacts")
        this.setState({contacts: res.data});
    }

    render() {
        return (
            <div>
                {
                    this.state.contacts.map(contact => (
                        <div>
                            <h2> {contact.firstname} {contact.lastname} </h2>
                            <h3> {contact.number} </h3>
                            <br />
                        </div>
                    ))
                }
            </div>
        )
    }
}