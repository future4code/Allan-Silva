import React from "react";
import { useHistory } from "react-router-dom";
import { goToLogin, goToAdmin, goToHome } from "../routes/Coordinator"



const CreateTripPage = () => {
    const history = useHistory();

    return (
        <>
            <p>Criar viagem</p>
            <button onClick={() => goToAdmin(history)}>Painel admin</button>
            {/* <button onClick={() => goToCreateTrip(history)}>Criar Viagem</button> */}
            <button onClick={() => goToHome(history)}>Voltar</button>
            <button onClick={() => goToLogin(history)}>Logout</button>
        </>
    );
};

export default CreateTripPage;