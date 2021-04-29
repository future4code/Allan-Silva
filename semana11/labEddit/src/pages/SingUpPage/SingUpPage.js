import React from 'react'
import { useHistory } from 'react-router';
import { goToFeed } from '../../routes/Coordinator';
import useForm from '../../hooks/useForm'
import { TextField } from '@material-ui/core'

const SingUpPage = () => {
    const history = useHistory()

    const [form, onChange, clear] = useForm({name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
    }


    return (
        <div>
            <h1>Cadastre-se</h1>
            <form onSubmit={onSubmitForm}>
                <TextField
                    label={'Nome Do Usuario'}
                    type={'text'}
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    variant={'outlined'}
                    margin={'normal'}
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
                    required
                />
            <button type={"submit"} onClick={() => goToFeed(history)} >Cadastrar</button>
            </form>
        </div>
    )
}

export default SingUpPage;