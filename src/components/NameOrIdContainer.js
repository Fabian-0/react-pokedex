import React, { useEffect, useState } from 'react';
import PokemonCard from "./PokemonCard";
import { getPokemonForIdOrName } from "../services/CallToApi";
import { useLocation } from 'react-router-dom';
import GridContainer from './GridContainer';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function NameOrIdContainer() {

  const [pokemonData, setPokemonData] = useState([]);
  let queryNameOrId = useQuery().get('search');
  let navigationData = useLocation();

  useEffect(()=>{
    console.log(navigationData);
    if(navigationData.state?.data &&  !pokemonData.length) {
      return setPokemonData([navigationData.state.data]);
    }
    if(!pokemonData.length && !navigationData.state?.data) {
      getPokemonForIdOrName(queryNameOrId)
      .then(res => setPokemonData([res]));
      return;
    }

  },[navigationData, pokemonData.length, queryNameOrId]);

  return (
    <GridContainer>
      {pokemonData.length !== 0 && pokemonData.map((element) => {
      console.log(pokemonData);
        if(element?.name){
          return <PokemonCard key={element.id}
                  pokemon={element} search={(navigationData.state?.search) ? navigationData.state?.search : queryNameOrId}
                />
        }
        return null;
      })}
    </GridContainer>
  );
}

export default NameOrIdContainer;