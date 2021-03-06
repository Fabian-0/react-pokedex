import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMultipleTypes } from '../services/CallToApi';
import GridContainer from './GridContainer';
import PokemonCard from './PokemonCard';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function TypesContainer() {

  let queryTypes = useQuery().getAll('type');
  const [pokemonData, setPokemonData] = useState([]);
  let navigationData = useLocation();

  useEffect(()=>{
    console.log(navigationData);
    if(navigationData.state?.data && !pokemonData.length) {
      setPokemonData(navigationData.state?.data);
      return
    }
    if(queryTypes.length && !pokemonData.length) {
      getMultipleTypes(queryTypes)
      .then(res => setPokemonData(res));
    }
  },[navigationData, pokemonData.length, queryTypes]);

  return (
    <GridContainer>
      {pokemonData.length !==0 && pokemonData.map((element) => {
      console.log(pokemonData);
        if(element?.name){
          return <PokemonCard key={element.id}
                  pokemon={element} 
                  search={(navigationData.state?.search) ? navigationData.state?.search : queryTypes}
                  pokemonData={pokemonData}
                />
        }
        return null;
      })}
    </GridContainer>
  );
}

export default TypesContainer;