import React from 'react';
import axios from 'axios';

export default class Register extends React.Component {
    state = {
        name: '',
        email: ''
    }

    onChageNameValue = (event) => {
        this.setState({name: event.target.value })
    }

    onChageEmailValue = (event) => {
        this.setState({ email: event.target.value })
    }

ConteinerRegister()

}