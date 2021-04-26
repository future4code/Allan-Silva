import React from "react";
import axios from "axios";
import {useInput} from "../hooks/UseInput"
import { useHistory } from "react-router-dom";
import { goToAdmin, goToHome } from "../routes/Coordinator"



const LoginPage = () => {
    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");

    const login = () => {
        const body = {
            email: email,
            password: password
        }
    
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/allan-silva-cruz/login", body)
        .then((res) => {
            window.localStorage.setItem("token", res.data.token);
            goToAdmin(history)
        })
    };


    const history = useHistory();




    return (
        <>
            <p>Login</p>
            <input type="email" value={email} onChange={onChangeEmail} placeholder="Email..." />
            <input type="password" value={password} onChange={onChangePassword} placeholder="Senha..." />
            <button onClick={() => goToHome(history)}>Voltar</button>
            <button onClick={login}>Login</button>
        </>
    );
};

export default LoginPage;