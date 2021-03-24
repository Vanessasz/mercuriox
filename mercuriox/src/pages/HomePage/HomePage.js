import React from "react";
import { useHistory } from "react-router-dom";
import {
  ButtonsContainer,
  Navegation,
  Division,
  MyButtonCand,
  MyButtonHeader,
  MyButtonAdmi
} from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function HomePage() {
  const history = useHistory();

  const GoToPageStart = () => {
    history.push("/");
  };

  const goToPageAbout = () => {
    history.push("/sobre");
  };

  //  const irParaPaginaVerDetalhe = () => {
  //    history.push("/TripDetailsPage");
  //  };

  return (
    <Division>
      <Navegation>
        <MyButtonHeader onClick={GoToPageStart}>Página Inicial</MyButtonHeader>
        {/* <MeuBotao onClick={irParaPaginaVerDetalhe}>Detalhe Viagem</MeuBotao> */}
        <MyButtonHeader onClick={goToPageAbout}>Sobre</MyButtonHeader>
      </Navegation>
      <img src={logo} />
      <ButtonsContainer>
        <Link to={"/login"}>
          <MyButtonAdmi>Área do administrador</MyButtonAdmi>
        </Link>
        <Link to={"/inscricao"}>
        <MyButtonCand>Quero me candidatar</MyButtonCand>
        </Link>
      </ButtonsContainer>
    </Division>
  );
}
