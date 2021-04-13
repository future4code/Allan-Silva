import React from "react";
import { useHistory } from "react-router-dom";
import { goToLogin } from "../routes/Coordinator"



const TripDetailsPage = () => {
    const history = useHistory();

    return (
        <>
            <p>*nome da viagem*</p>
            {/* <button onClick={() => goToAdmin(history)}>Painel admin</button> */}
            {/* <button onClick={() => goToCreateTrip(history)}>Criar Viagem</button> */}
            <button onClick={history.goBack}>Voltar</button>
            <button onClick={() => goToLogin(history)}>Logout</button>
        </>
    );
};

export default TripDetailsPage;