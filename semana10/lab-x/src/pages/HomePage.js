import React from "react";
import { useHistory } from "react-router-dom";
import { goToLogin, goToTrips } from "../routes/Coordinator"



const HomePage = () => {
    const history = useHistory();

    return (
        <>
            <p>LabX</p>
            <button onClick={() => goToLogin(history)}>Área de Admin</button>
            <button onClick={() => goToTrips(history)}>Ver viagens</button>
        </>
    );
};

export default HomePage;