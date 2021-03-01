import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getTypes } from "../services/CallToApi";
import useTestContext from "./useTestContext";

function SearchBox() {

  const { updateSearch } = useTestContext();
  
  // const handlerSearchState = 

  const [toSearch, setToSearch] = useState('');

  const [pokemonTypes,setpokemonTypes] = useState([]);

  const { register, handleSubmit } = useForm();

  useEffect(()=>{
    getTypes()
    .then(res => setpokemonTypes(res));
  },[]);

  const handlerSearch = (data) => {
    if(data) {
      if(Number(data)) return updateSearch({typeOfSearch: 'searchForIdOrName', dataToSearch: data});
      updateSearch({typeOfSearch:'searchForIdOrName', dataToSearch: data});
    }
    return;
  }

  const onSubmit = (data) => {
    const typeSearchPokemones = pokemonTypes.filter(element => data[element.name]);
    
    if(typeSearchPokemones.length) {
      const urlToSearch = typeSearchPokemones.map((value) => value.url);
      updateSearch({typeOfSearch: 'searchForType', dataToSearch: urlToSearch});
    }
  }

  return (
    // <TestContext.Consumer>
      <div className="Pokedex__searchBox">
        <input type="text" name="pokemon" onChange={ (e) => setToSearch(e.target.value) } />
        <button type="button" onClick={() => handlerSearch(toSearch)} >Search</button>
        <div className="Pokedex__types">
          <form className="Pokedex__form-checkbox" onSubmit={handleSubmit(onSubmit)}>
            {pokemonTypes.length && pokemonTypes.map((value) => {
              return (
                <span key={value.url}>
                  <label htmlFor={value.name}>{value.name}</label>
                  <input type="checkbox" name={value.name} value={value.name} ref={register} />
                </span>
              );
            })}
            <input type="submit" value="Search"/>
          </form>
        </div>
      </div>
    // </TestContext.Consumer>
  );
}

export default SearchBox;