import React from 'react'
import { TextField, Button, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core'
import axios from 'axios'
import { useForm } from '../../hooks/useForm'
import { useTripslist } from '../../hooks/useTripslist'
import { Form } from "../ApplicationFormPage/styles"
import { Title } from "../ApplicationFormPage/styles"
import { useHistory } from "react-router-dom";

const ApplicationFormPage = () => {
  const trips = useTripslist()
  const history = useHistory()

  const [form, onChangeInput, resetState] = useForm({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: '',
    trip: null
  })

const onSubmitApplication = (e) => {
    e.preventDefault()
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/vanessa-helena-dumont/trips/${form.trip.id}/apply`, body)
    .then(() => {
      resetState()
      alert("Cadastro efetuado com sucesso")
      history.push("/")
  }).catch(err => {
      alert("Erro!!! tente novamente.", err)
  })
}

  return <div>
    <Title>Formulário</Title>
    <Form onSubmit={onSubmitApplication}>
      <TextField 
        color="secondary"
        label={'Nome do candidato'} 
        onChange={onChangeInput}
        value={form['name']}
        name={'name'}
      />
      <TextField 
        color="secondary"
        label={'Idade'} type={'number'} 
        onChange={onChangeInput}
        value={form['age']}
        name={'age'}
      />
      <TextField 
        color="secondary"
        label={'Texto de aplicação'} helperText="Explique por que você é uma boa pessoa candidata" 
        onChange={onChangeInput}
        value={form['applicationText']}
        name={'applicationText'}
      />
      <TextField 
        color="secondary"
        label={'Profissão'} 
        onChange={onChangeInput}
        value={form['profession']}
        name={'profession'}
      />
      <FormControl>
        <InputLabel id="select-paises">Países</InputLabel>
        <Select
          color="secondary"
          labelId="select-paises"
          onChange={onChangeInput}
          value={form['country']}
          name={'country'}
        >
          <MenuItem value={'brasil'}>Brasil</MenuItem>
          <MenuItem value={'argentina'}>Argentina</MenuItem>
          <MenuItem value={'eua'}>Estados Unidos</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="select-viagens">Viagens</InputLabel>
        <Select
          color="secondary"
          labelId="select-viagens"
          onChange={onChangeInput}
          value={form['trip']}
          name={'trip'}
        >
          {trips.map((trip) => {
            return <MenuItem value={trip}>{trip.name}</MenuItem>
          })}
        </Select>
      </FormControl>
      <Button variant={'contained'} color={'secondary'} type={'submit'}>Inscrever-se</Button>
    </Form>
  </div>
}

export default ApplicationFormPage