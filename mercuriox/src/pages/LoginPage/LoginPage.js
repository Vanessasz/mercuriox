import React, { useEffect, useState } from "react";
import { Division, MyButton, Title } from "./styles";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/viagens");
    }
  }, [history]);

  const getEmail = (event) => {
    setEmail(event.target.value);
  };

  const getPassword = (event) => {
    setSenha(event.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      password: senha,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/vanessa-helena-dumont/login",
        body
      )
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        alert("Erro", err);
      });
  };

  return (
    <Division>
      <Title>Login</Title>
      Email: <input value={email} onChange={getEmail}></input>
      Senha: <input value={senha} onChange={getPassword}></input>
      <MyButton onClick={login}>Entrar</MyButton>
    </Division>
  );
}

