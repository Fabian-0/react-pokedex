import React, { useEffect, useState } from 'react';
import GridContainer from './GridContainer';
import PokemonCard from "./PokemonCard";
import { getPokemonForIdOrName, getMultipleTypes } from "../services/CallToApi";

function PokemonContainer({ dataToFetch }) {

  const [pokemonData,setPokemonData] = useState([]);

  useEffect(()=>{
    if(dataToFetch?.dataToSearch){
      if(dataToFetch.typeOfSearch === 'searchForIdOrName') {
        getPokemonForIdOrName(dataToFetch.dataToSearch)
        .then(res => setPokemonData([res]));
      }
      if(dataToFetch.typeOfSearch === 'searchForType') {
        getMultipleTypes(dataToFetch.dataToSearch)
        .then(res => setPokemonData(res))
      }
      return;
    } else {
      const randomPokemonId = Math.round(Math.random() * 1118)
      getPokemonForIdOrName(randomPokemonId)
      .then(res => setPokemonData([res]));      
    }
  },[dataToFetch]);

  return (
    <GridContainer>
    { pokemonData.length && pokemonData.map((element) => {
        if(element?.name){
          return <PokemonCard key={element.id} id={element.id} name={element.name}
                  image={element.sprites.front_default}
                  types={element.types}
                  hp={element.stats[0].base_stat}
                  attack={element.stats[1].base_stat}
                  defense={element.stats[2].base_stat}
                  speed={element.stats[element.stats.length-1].base_stat}
                />
        }
        return null;
      })  
    }
    </GridContainer>    
  );
}

export default PokemonContainer;