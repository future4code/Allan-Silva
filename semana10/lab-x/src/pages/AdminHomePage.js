import React from "react";
import { useHistory } from "react-router-dom";
import { goToLogin, goToCreateTrip, goToHome } from "../routes/Coordinator"



const AdminHomePage = () => {
    const history = useHistory();

    return (
        <>
            <p>Painel Administrativo</p>
            {/* <button onClick={() => (history)}>Painel admin</button> */}
            <button onClick={() => goToCreateTrip(history)}>Criar Viagem</button>
            <button onClick={() => goToHome(history)}>Voltar</button>
            <button onClick={() => goToLogin(history)}>Logout</button>
        </>
    );
};

export default AdminHomePage;