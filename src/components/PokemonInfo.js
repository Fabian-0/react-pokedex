import React from "react";
import { useHistory } from "react-router-dom";

function PokemonInfo() {

  let history = useHistory();

  const handleClickId = () => {
    history.replace(`/pokedex/search-pokemon/pokemon?search=${history.location.state.search}`, {search: history.location.state.search,data: history.location.state.dataPokemon});
  }

  const handleClickType = () => {
    history.replace(`/pokedex/search-types/pokemon?type=${history.location.state.search}`, {search: history.location.state.search,data: history.location.state.dataPokemon})
  };

  console.log(history);

  return (
    <div className="Pokedex__pokemon-info">
      {typeof history.location.state.search === 'string' && <>
        <button onClick={handleClickId} >back</button>
        <p>{history.location.state.search}200000000000000000000000000</p>
      </>}
      { typeof history.location.state.search === 'object' &&
        <>
          <button onClick={handleClickType} >back</button>
          <p>{history.location.state.search}200000000000000000000000000</p>
        </>
      }
    </div>
  );
}

export default PokemonInfo;