import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <h5>Idade: {props.idade}</h5>
            <hr />
            <h5>Email: {props.email}</h5>
            <hr />
            <h5>Endereço: {props.endereco}</h5>
        </div>
    )
}

export default CardPequeno;