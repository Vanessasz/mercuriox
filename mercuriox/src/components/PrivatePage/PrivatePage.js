import React from "react";
import { useHistory } from "react-router-dom";

export default function PrivatePage() {
  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <p>Página Privada</p>
      <button onClick={logOut}>Sair</button>
    </div>
  );
}

// Parte administrador
