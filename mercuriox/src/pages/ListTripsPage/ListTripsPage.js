import React from "react";
import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ListTripsPageContainer } from './styles'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useTripslist } from '../../hooks/useTripslist'

const ListTripsPage = () => {
  const trips = useTripslist()
  useProtectedPage()

  return <ListTripsPageContainer>
    <h1>Lista de Viagens</h1>
    <Link to={'/viagens/criar'}>
      <Button variant={'contained'} color={'default'}>Criar viagem</Button>
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