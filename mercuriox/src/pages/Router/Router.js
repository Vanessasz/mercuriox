import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import HomePage from "../HomePage/HomePage";
import ListTripsPage from "../ListTripsPage/ListTripsPage";
import CreateTripPage from "../CreateTripPage/CreateTripPage";
import LoginPage from "../LoginPage/LoginPage";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";
import About from "../About/About";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/viagens/detalhe/:tripId">
          <TripDetailsPage />
        </Route>
        <Route exact path="/viagens">
          <ListTripsPage />
        </Route>
        <Route exact path="/viagens/criar">
          <CreateTripPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/inscricao">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/sobre">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
