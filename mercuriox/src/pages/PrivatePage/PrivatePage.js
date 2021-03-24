import React from "react";
import { Link } from "react-router-dom";

export default function PrivatePage() {
  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <p>Página Privada</p>
      <Link to={"/TripDetailsPage"}>
        <button>Ver lista de candidatos</button>
      </Link>
      <button onClick={logOut}>Sair</button>
    </div>
  );
}
