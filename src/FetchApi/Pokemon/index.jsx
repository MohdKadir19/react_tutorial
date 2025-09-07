import React, { useEffect, useState } from "react";
import "./pokemon.css";
import PokemonCards from "./PokemonCards";

const Pokemen = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";
  const fetchData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      //console.log(data);
      const resultApi = data.results.map(async (item) => {
        const resultRes = await fetch(item.url);
        const resultData = await resultRes.json();
        //console.log(resultData);
        return resultData;
      });
      const finalResult = await Promise.all(resultApi);
      console.log(finalResult);
      setPokemon(finalResult);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = pokemon.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <>
      <section className="container">
        <div className="title">
          <h1> Pokemon Cards</h1>
        </div>
        <div className="pokemon-search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {filteredData?.map((items) => {
              return <PokemonCards key={items.id} pokemonData={items} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pokemen;
