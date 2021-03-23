import './App.css';
import React from 'react';
import styled from 'styled-components';
// import axios from "axios";

const Container = styled.div `
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center:
  align-items: center;
  height: 100px;
`

const ContainerInput = styled.input `
width: 250px;
`

const ContainerButton = styled.button `
width: 60px;
`

export default class App extends React.Component {

  render() {
    return (
      <div>
        <button>Ir para a lista</button>
      <Container>
        <label>
          Nome:
        </label>
        <ContainerInput type='text' />
        <label>
          Email:
        </label>
        <ContainerInput type='email' />
        <ContainerButton>Enviar</ContainerButton>
      </Container>
      </div>
    );
  };
}

