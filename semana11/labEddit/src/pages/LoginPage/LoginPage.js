import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router'
import { goToSingUp } from '../../routes/Coordinator'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'
import { ButtonContainer, InputsContainer, LoginFormContainer } from './style'


const LoginPage = ({ setRightButtonText }) => {


    const history = useHistory()

    const [form, onChange, clear] = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText)
    }

    return(
        <div>
            <h1>Login</h1>
            <LoginFormContainer>
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                <TextField 
                    label={'Email' }
                    type={'email'}
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    variant={'outlined'}
                    margin={'normal'}
                    fullWidth
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
                    fullWidth
                    required
                />
                </InputsContainer>
                    <ButtonContainer>
            <Button  
            type={"submit"}
            fullWidth
            >Entrar</Button>
            <Button 
            onClick={() => goToSingUp(history)}
            fullWidth
            >Cadastre-se</Button>
                    </ButtonContainer>
            </form>
            </LoginFormContainer>
        </div>
    )
}

export default LoginPage;