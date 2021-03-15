import React from 'react';
import '../App.css'

function Etapa3() {
    return (
        <div className="App">
            <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <h3>7. Por que você não terminou um curso de graduação?</h3>
            <input />
            <h3>8. Você fez algum curso complementar?</h3>
            <select>
                <option value="">Nenhum</option>
                <option value="Curso tecnico">Curso técnico</option>
                <option value="Curso de ingles">Curso de inglês</option>
            </select>
        </div>
    );
}

export default Etapa3;
