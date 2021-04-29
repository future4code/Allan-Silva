import React from 'react'
import { TextField } from '@material-ui/core'
import { useHistory } from 'react-router'
import { goToSingUp } from '../../routes/Coordinator'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { baseUrl } from '../../constants/url'

const LoginPage = () => {
    const history = useHistory()

    const [form, onChange, clear] = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    const body = {
        "email": "pedro.darvas@gmail.com",
        "password": "qwerty"
    }

    const login = () => {
        axios.post(`${baseUrl}/login`, body, form)
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmitForm}>
                <TextField 
                    label={'Email' }
                    type={'email'}
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    variant={'outlined'}
                    margin={'normal'}
                    required
                />
                <TextField
                    label={'Senha'}
                    type={'password'}
                    name={'password'}
                    value={ form.password }
                    onChange={onChange}
                    variant={'outlined'}
                    margin={'normal'}
                    required
                />
            <button  type={"submit"}>Entrar</button>
            </form>
            <button onClick={() => goToSingUp(history)}>Cadastro</button>
        </div>
    )
}

export default LoginPage;