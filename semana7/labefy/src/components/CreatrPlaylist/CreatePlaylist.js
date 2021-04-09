import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
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
        playlist: '',
    };

    onChageNameValue = (event) => {
        this.setState({ playlist: event.target.value })
    };

    createrRegister = () => {

        const body = {
            name: this.state.playlist,
        }

        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                body,
                {
                    headers: {
                        Authorization: "allan-silva-cruz"
                    }
                }
            )
            .then((res) => {
                this.setState({ name: '' })
                alert('Playlist Criada!')
            })
            .catch((err) => {
                this.setState({ name: '' })
                alert('Playlist já existe!')
            })
    }


    render() {
        return (
            <div>
                <Container>
                    <ContainerInput type='text' placeholder='Nome da Playlist' value={(this.state.name)} onChange={(this.onChageNameValue)} />
                    <br/>
                    <ContainerButton onClick={(this.createrRegister)} >Enviar</ContainerButton>
                </Container>
            </div>
        );
    };
}