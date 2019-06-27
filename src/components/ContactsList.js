import React from 'react';
import axios from 'axios';

export default class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contacts: []};
    }

    async componentDidMount() {
        let res = await axios.get("https://contacts-rest-api.herokuapp.com/api/v1/contacts")
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
                        <div onClick={() => this.singleContactHandler(contact)} key={contact._id}>
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