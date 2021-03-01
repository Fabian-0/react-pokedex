import React from "react";
import {Link} from 'react-router-dom';

function PokemonCard({ id, name, image, types, hp, attack, defense, speed }) {
  return (
    <div className="Pokedex__card col-lg-1">
      <img src={image}  alt={name} className="Pokedex__img"/>
      <Link to={`/pokedex/pokemon/${id}`} className="Pokedex__pokemon-name">{name.replace(name[0], name[0].toUpperCase())}</Link>
      <div className="Pokedex__cont-types">
        { types.length && types.map((element)=> {
            return <p className="Pokedex__types" key={element.type.name}>{(element.type.name).replace(element.type.name[0], element.type.name[0].toUpperCase())}</p>
          })
        }
      </div>
      <p className="Pokedex__pokemon-info">HP: {hp}</p>
      <p className="Pokedex__pokemon-info">Attack: {attack}</p>
      <p className="Pokedex__pokemon-info">Defense: {defense}</p>
      <p className="Pokedex__pokemon-info">Speed: {speed}</p>
    </div>
  );
}

export default PokemonCard;