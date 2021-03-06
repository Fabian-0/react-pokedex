import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { typesContext } from "../Contexts/TypesContext";
import { getTypes } from "../services/CallToApi";

function SearchBox() {
  const [toSearch, setToSearch] = useState("");
  const { checkboxTypes, saveTypes } = useContext(typesContext);
  const { register, handleSubmit } = useForm();
  let history = useHistory();

  useEffect(() => {
    console.log("render");
    if (!checkboxTypes.length) {
      getTypes().then((res) => saveTypes(res));
      console.log(checkboxTypes);
    }
  });

  const handlerSearch = (data) => {
    if (data) {
      history.push(`/pokedex/search-pokemon/pokemon?search=${data}`);
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
      <input
        type="text"
        name="pokemon"
        onChange={(e) => setToSearch(e.target.value)}
      />
      <button type="button" onClick={() => handlerSearch(toSearch)}>
        Search
      </button>

      <div className="Pokedex__types">
        <form
          className="Pokedex__form-checkbox"
          onSubmit={handleSubmit(onSubmit)}
        >
          {checkboxTypes.length &&
            checkboxTypes.map((value) => {
              return (
                <span key={value.url}>
                  <label htmlFor={value.name}>{value.name}</label>
                  <input
                    type="checkbox"
                    name={value.name}
                    value={value.name}
                    ref={register}
                  />
                </span>
              );
            })}

          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
