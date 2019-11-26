import React from "react";
import Pokemon from "../Pokemon";

const PokemonsList = ({ pokemonsList, onPokemonSelect, filter }) => {
  return (
    <div className="row">
      {pokemonsList.map((pokemon, index) => (
        <Pokemon
          name={pokemon.name}
          onPokemonSelect={onPokemonSelect}
          key={index}
        />
      ))}
    </div>
  );
};

export default PokemonsList;
