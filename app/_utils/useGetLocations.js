import { useEffect, useState } from "react";

import getData from "./getData";

function useGetLocations() {
  const [locations, setLocations] = useState();
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function getLocations() {
        try {
          const res = await fetch("http://localhost:8000/sites");

          if (!res.ok) {
            throw new Error("error try again");
          }
          const data = await res.json();

          setLocations(data);
        } catch (err) {
          setError(err);
        }
      }
      getLocations();
    },
    [error, locations]
  );

  return [locations, error];
}

export default useGetLocations;
