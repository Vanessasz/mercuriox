import React from "react";
import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ListTripsPageContainer, ButtonTwo } from './styles'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useTripslist } from '../../hooks/useTripslist'
import { useHistory } from "react-router-dom";

const ListTripsPage = () => {
  const trips = useTripslist()
  const history = useHistory()
  useProtectedPage()

  const logout = () => {
    localStorage.clear() 
    history.push("/");
}

  return <ListTripsPageContainer>
    <h1>Lista de Viagens</h1>
    <Link to={'/viagens/criar'}>
      <Button variant={'contained'} color={'default'}>Criar viagem</Button>
    </Link>

    <List component="nav">
    <ButtonTwo variant={'contained'} color={'default'} onClick={logout}>Logout</ButtonTwo>
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