import React from "react";
import { Link } from "react-router-dom";
import { printTypes } from "../services/Functions";
import { changeName, getStats, validateImg } from "../services/Functions";

function PokemonCard({ pokemon, search, pokemonData, page, id }) {
  return (
    <div className="Pokedex__card col-lg-1 col-md-2 col-sm-4">
      <img
        src={validateImg(pokemon.sprites)}
        alt={pokemon.name}
        className="Pokedex__img"
      />
      <Link
        to={{
          pathname: `/pokedex/pokemon/${pokemon.id}`,
          state: {
            search: search,
            dataPokemon: pokemonData ? pokemonData : pokemon,
            page: page ? page : null,
            id: id,
          },
        }}
        replace
      >
        {changeName(pokemon.name)}
      </Link>
      <div className="Pokedex__cont-types">
        {pokemon.types.length && printTypes(pokemon.types)}
      </div>
      {pokemon?.stats && getStats(pokemon.stats)}
    </div>
  );
}

export default PokemonCard;
