import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLogout } from "../routes/Coordinator"



const TripDetailsPage = () => {

    useEffect(() => {
        getTripDetail()
    })

    const getTripDetail = (id) => {

        const token = window.localStorage.getItem("token")

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/allan-silva-cruz/trip/${id}`, {
            headers: {
                Authorization: token
            }
        })
    }


    const history = useHistory();

    return (
        <>
            <p>*nome da viagem*</p>
            {/* <button onClick={() => goToAdmin(history)}>Painel admin</button> */}
            {/* <button onClick={() => goToCreateTrip(history)}>Criar Viagem</button> */}
            <button onClick={history.goBack}>Voltar</button>
            <button onClick={() => goToLogout(history)}>Logout</button>
        </>
    );
};

export default TripDetailsPage;