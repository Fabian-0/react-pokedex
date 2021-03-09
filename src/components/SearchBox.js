import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { typesContext } from "../Contexts/TypesContext";
import { getTypes } from "../services/CallToApi";
import "./Assets/styles/SearchBox.css";

function SearchBox() {
  const [toSearch, setToSearch] = useState("");
  const { checkboxTypes, saveTypes } = useContext(typesContext);
  const { register, handleSubmit } = useForm();
  let history = useHistory();

  useEffect(() => {
    if (!checkboxTypes.length) {
      getTypes().then((res) => saveTypes(res));
    }
  });

  const handlerSearch = (data) => {
    if (data) {
      history.push(
        `/pokedex/search-pokemon/pokemon?search=${data.toLowerCase().trim()}`
      );
    }
    return;
  };

  const onSubmit = (data) => {
    const typeSearchPokemones = checkboxTypes.filter(
      (element) => data[element.name]
    );
    if (typeSearchPokemones.length) {
      let urlTypes = "/pokedex/search-types/types?";

      typeSearchPokemones.forEach((value, index) => {
        if (index === typeSearchPokemones.length - 1) {
          urlTypes += "type=" + value.name;
          return;
        }
        return (urlTypes += "type=" + value.name + "&");
      });
      history.push(urlTypes);
    }
  };

  return (
    <div className="Pokedex__searchBox">
      <div className="Pokedex__search-name-cont">
        <input
          type="text"
          name="pokemon"
          onChange={(e) => setToSearch(e.target.value)}
          placeholder="Search for Name or Id!"
          className="Pokedex__input Pokedex__input-nameId"
        />
        <button
          type="button"
          onClick={() => handlerSearch(toSearch)}
          className="Pokedex__button-search Pokedex__button-name"
        ></button>
      </div>
      <div className="Pokedex__types">
        <p className="Pokedex__search-types">Search for types</p>
        <form
          className="Pokedex__form-checkbox"
          onSubmit={handleSubmit(onSubmit)}
        >
          {checkboxTypes.length &&
            checkboxTypes.map((value) => {
              return (
                <span key={value.url} className="Pokedex__checkbox-label">
                  <label>
                    {value.name.toUpperCase()}{" "}
                    <input
                      type="checkbox"
                      name={value.name}
                      value={value.name}
                      ref={register}
                    />
                  </label>
                </span>
              );
            })}

          <input
            className="Pokedex__button-types"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
