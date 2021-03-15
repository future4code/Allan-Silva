import React from 'react';

function Etapa1() {
    return (
        <div >
            <h2>ETAPA 1 - DADOS GERAIS</h2>
            <h3>1. Qual o seu nome?</h3>
            <input />
            <h3>2. Qual sua idade?</h3>
            <input />
            <h3>1. Qual o seu nome?</h3>
            <input />
            <h3>4. Qual a sua escolaridade?</h3>
            <select>
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select>
        </div>
    );
}

export default Etapa1;
