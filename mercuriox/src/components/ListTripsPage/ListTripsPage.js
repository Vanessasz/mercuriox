import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Divisao } from "./styled";
export default function ListTripsPage() {
  const [trip, setTrip] = useState([]);
  const history = useHistory();
  useEffect(() => {
    takingTrips();
  }, []);

  const takingTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/vanessa-helena-dumont/trips"
        
      )
      .then((res) => {
        setTrip(res.data.trips);
        console.log("Resposta", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const IrParaPaginaForm = () => {
    history.push("/application-form");
  };
  return (

    <Divisao>
      <p>Todas Viagens</p>
      {trip.map(item => (
      <p key={trip.id}> {item.name} - {item.date} - {item.planet} - {item.durationInDays} dias 
     {item.description}
     
     <button onClick={IrParaPaginaForm}>Candidatar</button>
     </p>
     
     
  ))}
    </Divisao>
  );
};
  

// Parte usuário
