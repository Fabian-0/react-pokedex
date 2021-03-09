import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  printAbilities,
  printMoves,
  printStats,
  printTypes,
  validateImg,
} from "../services/Functions";
import "./Assets/styles/PokemonInfo.css";

function PokemonInfo() {
  let location = useLocation();
  let dataRef =
    location.state.id !== undefined
      ? location.state.dataPokemon[location.state.id]
      : location.state.dataPokemon;
  const typesUrl = () => {
    let url = "";
    location.state.search.forEach((element, index, array) => {
      if (index === array.length - 1) {
        return (url += "type=" + element);
      }
      return (url += `type=${element}&`);
    });
    return url;
  };

  return (
    <div className="Pokedex__pokemon-info">
      {typeof location.state?.search === "string" && (
        <>
          <Link
            className="Pokedex__pokemonImgo-button"
            to={{
              pathname: "/pokedex/search-pokemon/" + location.state.search,
              state: location.state,
            }}
            replace
          >
            back
          </Link>
          <Link
            className="Pokedex__pokemonImgo-button"
            to={{
              pathname: `/pokedex/pokemon/${location.state.dataPokemon.id}/encounters`,
              state: location.state,
            }}
            replace
          >
            Encounters
          </Link>
        </>
      )}
      {typeof location.state?.search === "object" && (
        <>
          <Link
            className="Pokedex__pokemonImgo-button"
            to={{
              pathname: "/pokedex/search-types/types?" + typesUrl(),
              state: location.state,
            }}
            replace
          >
            back
          </Link>
          <Link
            className="Pokedex__pokemonImgo-button"
            to={{
              pathname: `/pokedex/pokemon/${location.state.id}/encounters`,
              state: location.state,
            }}
            replace
          >
            Encounters
          </Link>
        </>
      )}
      {location.state?.dataPokemon && (
        <section className="Pokedex-pokemon-info">
          <p className="Pokedex__pokemonInfo-order">#{dataRef.order}</p>
          <img
            src={validateImg(dataRef.sprites)}
            alt={dataRef.name}
            className="Pokedex__img"
          />
          <p className="Pokedex__pokemonInfo-name">{dataRef.name}</p>
          <div className="Pokedex__pokemonInfo-measurements">
            <p className="Pokedex__pokemonInfo-height">
              Height: {dataRef.height}
            </p>
            <p className="Pokedex__pokemonInfo-weight">
              Weight: {dataRef.weight}
            </p>
          </div>
          <div className="Pokedex__pokemonInfo-types">
            {printTypes(dataRef.types)}
          </div>
          <div className="Pokedex__pokemonInfo-stats">
            {printStats(dataRef.stats)}
          </div>
          <div className="Pokedex-pokemonInfo-moves">
            {printMoves(dataRef.moves)}
          </div>
          <div className="Pokedex-pokemonInfo-abilities">
            {printAbilities(dataRef.abilities)}
          </div>
        </section>
      )}
    </div>
  );
}

export default PokemonInfo;
