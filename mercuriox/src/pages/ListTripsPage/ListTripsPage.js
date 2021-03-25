import React, { useState, useEffect } from "react";
import PageTitle from '../../components/PageTitle'
import { Button, List, ListItem, ListItemText, ListItemLink } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ListTripsPageContainer } from './styles'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useTripslist } from '../../hooks/useTripslist'

const ListTripsPage = () => {
  const trips = useTripslist()
  useProtectedPage()

  return <ListTripsPageContainer>
    <PageTitle title={'Lista de Viagens'} />
    <Link to={'/viagens/criar'}>
      <Button variant={'contained'} color={'primary'}>Criar viagem</Button>
    </Link>

    <List component="nav">
      {trips.map((trip) => {
        return <Link to={`/viagens/detalhe/${trip.id}`}>
          <ListItem button>
            <ListItemText primary={trip.name} />
          </ListItem>
        </Link>
      })}
    </List>
  </ListTripsPageContainer>
}

export default ListTripsPage