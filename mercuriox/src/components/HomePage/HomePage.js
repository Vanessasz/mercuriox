import React from "react";
import { useHistory } from "react-router-dom";
import { Navegacao } from "./styled";
import { MeuBotao } from "./styled";
import { Divisao } from "./styled";
import logo from "../../assets/logo.png";

export default function HomePage() {
  const history = useHistory();

  const IrParaPaginaInicial = () => {
    history.push("/");
  };

  const irParaPaginaTodasViagens = () => {
    history.push("/trips-list");
  };

  // const irParaPaginaVerDetalhe = () => {
  //   history.push("/TripDetailsPage");
  // };

  const irParaPaginaLogin = () => {
    history.push("/login");
  };

  return (
    <Divisao>
      <Navegacao>
        <MeuBotao onClick={IrParaPaginaInicial}>Página Inicial</MeuBotao>
        {/* <MeuBotao onClick={irParaPaginaVerDetalhe}>Detalhe Viagem</MeuBotao> */}
        <MeuBotao onClick={irParaPaginaTodasViagens}>
          Viagens Disponíveis
        </MeuBotao>
        <MeuBotao onClick={irParaPaginaLogin}>Login</MeuBotao>
      </Navegacao>
      <img src={logo} />
    </Divisao>
  );
}

