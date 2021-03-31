import React, { useEffect, useState } from "react";
import TripInfo from "./TripInfoCard";
import CandidatesList from "./CandidatesList";
import { ContentContainer, Title} from "./styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const TripDetailPage = () => {
  const [trip, setTrip] = useState();
  const params = useParams();

  useProtectedPage();

  const getTripDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vanessa-helena-dumont/trip/${params.tripId}`,
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setTrip(response.data.trip);
      }).catch((err) => {
        window.alert("Opsss! detalhes não encontrados :(", err);
      });
  };
  
  useEffect(() => {
    getTripDetail();
  }, []);

  const decideCandidate = (approve, candidateId) => {
    const body = {
      approve: approve,
    };

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/vanessa-helena-dumont/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then(() => {
      getTripDetail()
    }).catch(() => {
    });
};

  return <div>
   <Title>Detalhes da viagem</Title>
    {trip ? <ContentContainer>
      <TripInfo info={trip}/>
      <CandidatesList 
        candidates={trip.candidates} 
        decideCandidate={decideCandidate}
      />
    </ContentContainer> : <div>Carregando...</div>}
  </div>
}
export default TripDetailPage;
