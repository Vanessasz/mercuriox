import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import HomePage from "../HomePage/HomePage";
import ListTripsPage from "../ListTripsPage/ListTripsPage";
import LoginPage from "../LoginPage/LoginPage";
import PrivatePage from "../PrivatePage/PrivatePage";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/application-form">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/trips-list">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips-create">
          <TripDetailsPage />
        </Route>
        <Route exact path="/private-page">
          <PrivatePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
