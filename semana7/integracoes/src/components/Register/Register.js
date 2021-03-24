import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center:
  align-items: center;
  height: 100px;
`

const ContainerInput = styled.input`
width: 250px;
`

const ContainerButton = styled.button`
width: 60px;
`


export default class Register extends React.Component {
    state = {
        user: '',
        userEmail: ''
    };

    onChageNameValue = (event) => {
        this.setState({ user: event.target.value })
    };

    onChageEmailValue = (event) => {
        this.setState({ userEmail: event.target.value })
    };

createrRegister = () => {

    const body = {
        name: this.state.user,
        email: this.state.userEmail
    }

    axios
        .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
            headers: {
                Authorization: "allan-silva-cruz"
            }
        }
    )
        .then((res) => {
            this.setState({ user: '' })
            this.setState({ userEmail: '' })
        alert('Registro com sucesso')
        })
        .catch((err) => {
            this.setState({ user: '' })
            this.setState({ userEmail: '' })
            alert('Registro Invalido')
        })
}


    render() {
        return (
            <div>
                <Container>
                    <label>
                        Nome:
        </label>
                    <ContainerInput type='text' value={(this.state.user)} onChange={(this.onChageNameValue)} />
                    <label>
                        Email:
        </label>
                    <ContainerInput type='email' value={(this.state.userEmail)} onChange={(this.onChageEmailValue)}/>
                    <ContainerButton onClick={(this.createrRegister)} >Enviar</ContainerButton>
                </Container>
            </div>
        );
    };
}