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
                Hello World
            </div>
        )
    }
}