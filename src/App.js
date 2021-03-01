import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokedexHome from "./components/PokedexHome";
import PokemonInfo from "./components/PokemonInfo";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/pokedex/pokemon/:id' component={PokemonInfo} />
          <Route path='/' component={PokedexHome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
