import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemonForIdOrName } from "../services/CallToApi";
import { Link, useLocation } from "react-router-dom";
import GridContainer from "./GridContainer";
import "./Assets/styles/PokemonCard.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function NameOrIdContainer() {
  const [pokemonData, setPokemonData] = useState([]);
  let queryNameOrId = useQuery().get("search");
  let navigationData = useLocation();

  useEffect(() => {
    if (navigationData.state?.dataPokemon && !pokemonData.length) {
      return setPokemonData([navigationData.state.dataPokemon]);
    }
    if (!pokemonData.length && !navigationData.state?.dataPokemon) {
      getPokemonForIdOrName(queryNameOrId).then((res) => setPokemonData([res]));
      return;
    }
  }, [navigationData, pokemonData.length, queryNameOrId]);

  return (
    <GridContainer>
      {pokemonData.length !== 0 &&
        pokemonData.map((element) => {
          if (element?.name) {
            return (
              <PokemonCard
                key={element.id}
                pokemon={element}
                search={
                  navigationData.state?.search
                    ? navigationData.state?.search
                    : queryNameOrId
                }
              />
            );
          }
          return null;
        })}
      {pokemonData[0] === undefined && (
        <>
          <p style={{ width: "100%", textAlign: "center" }}>Not Found</p>
          <Link
            to="/"
            style={{
              width: "100%",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
        </>
      )}
    </GridContainer>
  );
}

export default NameOrIdContainer;
