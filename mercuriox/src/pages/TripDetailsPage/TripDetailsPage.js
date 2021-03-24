import React, { useEffect, useState } from 'react'
import TripInfo from './TripInfoCard'
import CandidatesList from './CandidatesList'
import { ContentContainer } from "./styles"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'

const TripDetailPage = () => {
  const [trip, setTrip] = useState()
  const params = useParams()

  useProtectedPage()

  const getTripDetail = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/vanessa-helena-dumont/trip/
    ${params.tripId}`, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((response) => {
      setTrip(response.data.trip)
    })
  }

  useEffect(() => {
    getTripDetail()
  }, [])

  const decideCandidate = (approve, candidateId) => {
    const body = {
      approve: approve
    }

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/vanessa-sant-helena/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then(() => {
      getTripDetail()
    })
  }

  return <div>
    <h1>Detalhes da viagem</h1>
    {trip ? <ContentContainer>
      <TripInfo info={trip}/>
      <CandidatesList 
        candidates={trip.candidates} 
        decideCandidate={decideCandidate}
      />
    </ContentContainer> : <div>Carregando...</div>}
  </div>
}

export default TripDetailPage