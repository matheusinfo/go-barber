import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';

import Logo from '~/assets/logo.svg';

import {signUpRequest} from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().min(6, 'No mínimo 6 caracteres').required('A senha é obrigatória')
});

const SignUp = () => {
    const dispatch = useDispatch();

    const handleSubmit = ({name, email, password}) => {
        dispatch(signUpRequest(name, email, password))
    }

    return(
        <>
            <img src={Logo} alt="GoBarber"/>

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Nome completo"/>
                <Input name="email" type="email" placeholder="Seu e-mail"/>
                <Input name="password" type="password" placeholder="Sua senha secreta"/>

                <button type="submit">Acessar</button>
                <Link to="/">Já tenho login</Link>
            </Form>
        </>
    )
}

export default SignUp;
