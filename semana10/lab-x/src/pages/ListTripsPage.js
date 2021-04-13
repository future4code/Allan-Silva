import React from "react";
import { useHistory } from "react-router-dom";
import { goToApplication, goToHome } from "../routes/Coordinator"



const ListTripsPage = () => {
    const history = useHistory();

    return (
        <>
            <p>Lista de Viagens</p>
            {/* <button onClick={() => (history)}>lista de viagens</button> */}
            <button onClick={() => goToApplication(history)}>inscrever-se</button>
            <button onClick={() => goToHome(history)}>Voltar</button>
        </>
    );
};

export default ListTripsPage;