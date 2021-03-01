import React, { useState } from "react";
import SearchBox from "./SearchBox";
import PokemonContainer from "./PokemonContainer";
import TestContext from "./TestContext";


function PokedexHome() {

  // const [searchState, setSearchState] = useState({});

  return (
    // <div className="Pokedex_home">
    <>
      <TestContext.Provider>
        <SearchBox handlerSearchState={setSearchState} />
        <PokemonContainer dataToFetch={searchState} />
      </TestContext.Provider>
    </>
    // </div>
  );
}

export default PokedexHome;