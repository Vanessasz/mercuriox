import React, { useEffect, useState } from "react";
import { Division, Title, Form, Button, Select } from "./styles";
import axios from "axios";
import { useForm } from '../../hooks/useForm'
import { useTripsList } from "../../hooks/useTripslist"

export default function ApplicationFormPage() {
  
  const trips = useTripsList();
  const [form, onChangeInput] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: null
  });
  const onSubmitApplication = (e) => {
    e.preventDefault();
    console.log(form);
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };

    axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vanessa-helena-dumont/trips/${form.trip.id}/apply`,
      body
    );
  };
  return (
    <Division>
      <Title>Formulário de inscrição</Title>
      <Form onSubmit={onSubmitApplication}>
        <label>Nome do candidato:</label>
        <input
          value={form["name"]}
          type="text"
          name="name"
          onChange={onChangeInput}
        />
        <label>Idade:</label>
        <input
          value={form["age"]}
          type="number"
          name="age"
          min="18"
          onChange={onChangeInput}
        />

        <label>Porque você quer se candidatar?</label>
        <input
          value={form["applicationText"]}
          type="text"
          name="applicationText"
          onChange={onChangeInput}
        />

        <label>Profissão:</label>
        <input
          value={form["profession"]}
          type="text"
          name="profession"
          onChange={onChangeInput}
        />
      <form>
        <label id="select-paises">Países:</label>
        <Select
          labelId="select-paises"
          onChange={onChangeInput}
          value={form['country']}
          name={'country'}
        >
          <option value={'brasil'}>Brasil</option>
          <option value={'argentina'}>Argentina</option>
          <option value={'eua'}>Estados Unidos</option>
        </Select>
      </form>

      <form>
        <label id="select-viagens">Viagens:</label>
        <Select
          labelId="select-viagens"
          onChange={onChangeInput}
          value={form['trip']}
          name={'trip'}
        >
          {trips.map((trip) => {
            return <option value={trip}>{trip.name}</option>
          })}
        </Select>
      </form>
      <Button type={'submit'}>Inscrever-se</Button>
      </Form>
    </Division>
  );
}