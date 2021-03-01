import React from "react";
import { useHistory, useParams } from "react-router-dom";

function PokemonInfo() {

  let { id } = useParams();
  let history = useHistory();

  function handleClick() {
    history.goBack()
  }

  return (
    <div className="Pokedex__pokemon-info">
      <button onClick={handleClick}>back</button>
      <p>{id}200000000000000000000000000</p>
    </div>
  );
}

export default PokemonInfo;