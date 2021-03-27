import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { CreateTripsForm, Division } from "../CreateTripPage/styles";
import { Button } from "@material-ui/core";

export default function CreateTripPage() {
  const [form, onChangeInput] = useForm({
    name: "",
    planet: "",
    description: "",
    duration: "",
  });

  useProtectedPage();

  const history = useHistory();

  const [date, setDate] = useState(new Date());

  const onSubmitForm = (event) => {
    event.preventDefault();
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    const body = {
      name: form.name,
      planet: form.planet,
      date: formattedDate,
      description: form.description,
      durationInDays: form.duration,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/vanessa-helena-dumont/trips ",
        body,
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log("RESPONSE", response);
        history.push("/viagens");
      });
  };

  return (
    <Division>
      <h1>Criar viagem</h1>
      <CreateTripsForm>
        <form onSubmit={onSubmitForm}>
          <label>Nome:</label>
          <input
            value={form["name"]}
            type="text"
            name="name"
            onChange={onChangeInput}
          />
          <label>Planeta:</label>
          <input
            value={form["planet"]}
            type="text"
            name="planet"
            onChange={onChangeInput}
          />

          <label>Data:</label>
          <input
            value={form.date}
            type="date"
            name="date"
            pattern={"[A-Za-z]{10,}"}
            required
            onChange={onChangeInput}
          />
          <label>Descrição:</label>
          <input
            value={form["description"]}
            onChange={onChangeInput}
            name={"description"}
            type={"text"}
            required
          />
          <label>Duração em dias:</label>
          <input
            value={form["duration"]}
            type="number"
            name="duration"
            onChange={onChangeInput}
          />
        </form>
        <Button variant={"contained"} color={"secondary"} type={"submit"}>
          {" "}
          Criar
        </Button>
      </CreateTripsForm>
    </Division>
  );
}
