import React, { useEffect, useState } from "react";
import "./index.css";

const UseMethod = () => {
  const [ApiData, setApiData] = useState(null);

  const fetchData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   console.log(ApiData);
  if (!ApiData) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section>
        <div class="card">
          <img
            src={ApiData.sprites.other.dream_world.front_default}
            alt="CardImage"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">{ApiData.name}</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseMethod;
