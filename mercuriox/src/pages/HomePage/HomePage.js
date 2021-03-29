import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Container, Division } from "./styles";
import { Link } from "react-router-dom";

export default function HomePage() {
  const history = useHistory();
  return (
    <Division>
      <h1>MercúrioX</h1>
      <Container>
        <Link to={"/login"}>
          <Button variant={"outlined"} color={"default"}>
            Área do administrador
          </Button>
        </Link>
        <Link to={"/inscricao"}>
          <Button variant={"contained"} color={"secondary"}>
            Quero me candidatar!
          </Button>
        </Link>
      </Container>
    </Division>
  );
}
