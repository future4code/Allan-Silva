import React from 'react'
import { useHistory } from 'react-router';
import { goToFeed } from '../../routes/Coordinator';
import useForm from '../../hooks/useForm'
import { Button, TextField } from '@material-ui/core'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { singUp } from '../../services/user';
import { ButtonContainer, InputsContainer, SingUpFormContainer } from './style';

const SingUpPage = ({ setRightButtonText }) => {
    useUnprotectedPage()

    const history = useHistory()

    const [form, onChange, clear] = useForm({name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        singUp(form, clear, history, setRightButtonText)
    }


    return (
        <div>
            <h1>Cadastre-se</h1>
            <SingUpFormContainer>
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                <TextField
                    label={'Nome Do Usuario'}
                    type={'text'}
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    variant={'outlined'}
                    margin={'normal'}
                    fullWidth
                    required
                />
                <TextField
                    label={'Email'}
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
                    value={form.password}
                    onChange={onChange}
                    variant={'outlined'}
                    margin={'normal'}
                    fullWidth
                    required
                />
                </InputsContainer>
                <Button fullWidth type={"submit"} onClick={() => goToFeed(history)} >Cadastrar</Button>
            </form>
            </SingUpFormContainer>
        </div>
    )
}

export default SingUpPage;