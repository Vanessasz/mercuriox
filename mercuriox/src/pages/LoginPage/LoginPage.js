import React, { useEffect, useState } from "react";
import { Division, Title } from "./styles";
import { useHistory } from "react-router-dom";
import { useForm } from '../../hooks/useForm'
import { TextField, Button } from '@material-ui/core'
import { LoginForm } from './styles'
import axios from "axios";

export default function LoginPage() {
  const history = useHistory()
  const [form, onChangeInput] = useForm({
    email: '',
    password: ''
  })

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/vanessa-helena-dumont/login', body).then((response) => {
      window.localStorage.setItem('token', response.data.token)
      history.push('/viagens')
    })
  }

  return  <div>
   <Title>Login</Title>
    <LoginForm onSubmit={onSubmitLogin}>
      <TextField
        color="secondary"
        label={'Email'}
        type={'email'}
        onChange={onChangeInput}
        value={form['email']}
        name={'email'}
      />
      <TextField
       color="secondary"
        label={'Senha'}
        type={'password'}
        onChange={onChangeInput}
        value={form['password']}
        name={'password'}
      />
      <Button variant={'contained'} color={'secondary'} type={'submit'}>Entrar</Button>
    </LoginForm>
  </div>

}
