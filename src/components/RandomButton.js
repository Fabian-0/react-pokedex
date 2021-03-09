import React from "react";
import { useHistory } from "react-router";
import "./Assets/styles/RandomButton.css";

function RandomButton() {
  let history = useHistory();

  const handleClick = () => {
    history.push(
      `/pokedex/search-pokemon/pokemon?search=${Math.round(
        Math.random() * 1000
      )}`
    );
  };

  return (
    <div className="Pokedex-random-pokemon">
      <button className="Pokedex-random-pokemon-button" onClick={handleClick}>
        Surprise me
      </button>
    </div>
  );
}

export default RandomButton;
