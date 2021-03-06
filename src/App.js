import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProvideTypes } from "./Contexts/TypesContext";
import { AuthProvider } from "./Contexts/AuthContext";
import PokemonInfo from "./components/PokemonInfo";
import Login from "./components/Login";
import TypesContainer from "./components/TypesContainer";
import NameOrIdContainer from "./components/NameOrIdContainer";
import ProtectedRoute from "./components/ProtectedRoute";
import SearchBox from "./components/SearchBox";
import RandomButton from "./components/RandomButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ProvideTypes>
          <BrowserRouter>
            <Switch>
              <ProtectedRoute path="/pokedex/pokemon/:id">
                <PokemonInfo />
              </ProtectedRoute>
              <ProtectedRoute path="/pokedex/search-pokemon/:pokemon">
                <NameOrIdContainer />
              </ProtectedRoute>
              <ProtectedRoute exact path="/pokedex/search-types/:types">
                <TypesContainer />
              </ProtectedRoute>
              <Route path="/login" component={Login} />
              <ProtectedRoute to="/">
                <SearchBox />
                <RandomButton />
              </ProtectedRoute>
            </Switch>
          </BrowserRouter>
        </ProvideTypes>
      </AuthProvider>
    </div>
  );
}

export default App;
