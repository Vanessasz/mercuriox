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
      history.push("/private-page");
    }
  }, [history]);

  const pegaEmail = (event) => {
    setEmail(event.target.value);
  };

  const pegaSenha = (event) => {
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
        localStorage.setItem("token", res.data.token);
        history.push("/private-page");
        console.log("Resposta", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Division>
      <Title>Login</Title>
      Email: <input value={email} onChange={pegaEmail}></input>
      Senha: <input value={senha} onChange={pegaSenha}></input>
      <MyButton onClick={login}>Entrar</MyButton>
    </Division>
  );
}

