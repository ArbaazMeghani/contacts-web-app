import React from 'react';
import axios from 'axios';

export default class ContactsList extends React.Component {
    componentDidMount() {
        axios.get("https://contacts-rest-api.herokuapp.com/api/v1/contacts")
        .then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <h1>
                Hello World!
            </h1>
        )
    }
}