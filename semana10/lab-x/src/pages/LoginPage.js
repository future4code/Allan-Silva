import React from "react";
import { useHistory } from "react-router-dom";
import { goToAdmin, goToHome } from "../routes/Coordinator"



const LoginPage = () => {
    const history = useHistory();

    return (
        <>
            <p>Login</p>
            <button onClick={() => goToHome(history)}>Voltar</button>
            <button onClick={() => goToAdmin(history)}>Login</button>
        </>
    );
};

export default LoginPage;