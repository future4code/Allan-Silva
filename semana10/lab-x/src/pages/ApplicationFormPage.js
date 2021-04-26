import React from "react";
import { useHistory } from "react-router-dom";
import { goToTrips } from "../routes/Coordinator"



const ApplicationFormPage = () => {
    const history = useHistory();

    return (
        <>
            <p>Inscrever-se para viagem</p>
            <button onClick={() => goToTrips(history)}>lista de viagens</button>
            {/* <button onClick={() => goToApplication(history)}>inscrever-se</button> */}
            <button onClick={history.goBack}>Voltar</button>
        </>
    );
};

export default ApplicationFormPage;