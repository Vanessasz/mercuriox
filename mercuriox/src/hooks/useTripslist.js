import { useState, useEffect } from "react";
import axios from "axios";

export const useTripslist = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/vanessa-helena-dumont/trips/"
      )
      .then((response) => {
        setTrips(response.data.trips);
      });
  }, []);

  return trips;
};
