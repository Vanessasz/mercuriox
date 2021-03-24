import React, { useState } from "react";
import { Divisao } from "./styled";
import axios from "axios";
import { useHistory } from "react-router-dom";
const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  return { form, onChange };
};
export default function ApplicationFormPage() {
  const history = useHistory();

  const { form, onChange } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const formUser = () => {
    const axiosConfig = {
      headers: {
        Authorization: "vanessa-helena-dumont",
      },
    };

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };

    //   axios
    //     .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/vanessa-helena-dumont/trips/${id}/apply`, form,
    //       body,
    //       axiosConfig
    //     )
    //     .then((res) => {
    //       localStorage.setItem("token", res.data.token);

    //       history.pushState("trips/list");

    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };

    return (
      <Divisao>
        <p>Formulário de inscrição</p>
        <form>
          <label>Nome:</label>
          <input
            value={form.name}
            type="text"
            name="name"
            pattern={"[A-Za-z]{3,}"}
            required
            onChange={handleInputChange}
          />
          <label>Idade:</label>
          <input
            value={form.age}
            type="number"
            name="age"
            min="18"
            onChange={handleInputChange}
          />

          <label>Profissão:</label>
          <input
            value={form.profession}
            type="text"
            name="profession"
            pattern={"[A-Za-z]{10,}"}
            required
            onChange={handleInputChange}
          />
          <label>País:</label>
          <input
            value={form.country}
            placeholder={"País"}
            onChange={handleInputChange}
            name={"country"}
            type={"text"}
            required
          />
          <label>Porque você quer se candidatar?</label>
          <input
            value={form.applicationText}
            type="text"
            name="applicationText"
            pattern={"[A-Za-z]{30,}"}
            required
            onChange={handleInputChange}
          />
          <button onClick={formUser}>Enviar</button>
        </form>
      </Divisao>
    );
  };
}
