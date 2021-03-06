import React from "react";
import { useHistory } from "react-router-dom";

function changeName(name) {
  return name.replace(name[0], name[0].toUpperCase());
}

function validateImg(objectImages) {
  if (objectImages.front_default) {
    return objectImages.front_default;
  }

  const images = Object.values(objectImages).reverse();
  const imageToReturn = images.find((element) => element === "string");
  if(imageToReturn) {
    return imageToReturn
  }
  
  return "https://w7.pngwing.com/pngs/635/361/png-transparent-unown-pokemon-vrste-pokedex-pokemon-go-pokemon-angle-sticker-pokemon.png";
}

function getStats(stats) {
  let statsValues = {};

  for (let i = 0; i < stats.length; i++) {
    if (stats[i]?.stat?.name) {
      switch (stats[i].stat.name) {
        case "hp":
          statsValues.hp = stats[i].base_stat;
          break;
        case "attack":
          statsValues.attack = stats[i].base_stat;
          break;
        case "defense":
          statsValues.defense = stats[i].base_stat;
          break;
        case "speed":
          statsValues.speed = stats[i].base_stat;
          break;
        default:
          break;
      }
    }
  }

  const template = <><p className="Pokedex__pokemon-info">HP: {
    statsValues?.hp ? statsValues.hp : "Undefined"
  }</p>
  <p className="Pokedex__pokemon-info">Attack: {
    statsValues?.attack ? statsValues.attack : "Undefined"
  }</p>
  <p className="Pokedex__pokemon-info">Defense: {
    statsValues?.defense ? statsValues.defense : "Undefined"
  }</p>
  <p className="Pokedex__pokemon-info">Speed: {
    statsValues?.speed ? statsValues.speed : "Undefined"
  }</p></>;
  
  return template;
}

function PokemonCard({ pokemon, search, pokemonData }) {

  let history = useHistory();

  const handleClick = () => {
    history.replace(`/pokedex/pokemon/${pokemon.id}`, { search: search, dataPokemon: (pokemonData) ? pokemonData : pokemon })
  }

  return (
    <div className="Pokedex__card col-lg-1">
      <img
        src={validateImg(pokemon.sprites)}
        alt={pokemon.name}
        className="Pokedex__img"
      />
      <p onClick={handleClick} className="Pokedex__pokemon-name">
        {changeName(pokemon.name)}
      </p>
      <div className="Pokedex__cont-types">
        {pokemon.types.length &&
          pokemon.types.map((element) => {
            return (
              <p className="Pokedex__types" key={element.type.name}>
                {element.type.name.replace(
                  element.type.name[0],
                  element.type.name[0].toUpperCase()
                )}
              </p>
            );
          })}
      </div>
      {pokemon?.stats &&
      getStats(pokemon.stats)}
    </div>
  );
}

export default PokemonCard;