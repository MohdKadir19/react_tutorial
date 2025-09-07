import React from "react";

const PokemonCards = ({ pokemonData }) => {
  return (
    <>
      <li className="pokemon-card">
        <figure>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            className="pokemon-image"
          />
        </figure>
        <h4 className="pokemon-name">{pokemonData.name}</h4>
        <div className="pokemon-info pokemon-highlight">
          <p>{pokemonData.types.map((item) => item.type.name).join(", ")}</p>
        </div>
        <div className="grid-three-cols">
          <p className="pokemon-info">
            <span> Height:</span> {pokemonData.height}
          </p>
          <p className="pokemon-info">
            <span> Weight:</span> {pokemonData.weight}
          </p>
          <p className="pokemon-info">
            <span> speed:</span> {pokemonData.stats[5].base_stat}
          </p>
        </div>
        <div className="grid-three-cols">
          <div className="pokemon-info">
            <p>{pokemonData.base_experience}</p>
            <span> Experience:</span>
          </div>
          <div className="pokemon-info">
            <p>{pokemonData.stats[1].base_stat}</p>
            <span> Attack:</span>
          </div>
          <div className="pokemon-info">
            <p>
              {pokemonData.abilities
                .map((info) => info.ability.name)
                .slice(0, 1)}
            </p>
            <span> Experience:</span>
          </div>
        </div>
      </li>
    </>
  );
};

export default PokemonCards;
