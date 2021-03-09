import React, { useContext } from "react";
import { useHistory } from "react-router";
import { authContenxt } from "../Contexts/AuthContext";
import "./Assets/styles/Login.css";
function Login() {
  let history = useHistory();

  const { signIn } = useContext(authContenxt);

  const handleClick = () => {
    signIn();
    history.replace("/");
  };

  return (
    <div className="Pokedex__login">
      <button className="Pokedex__login-button" onClick={handleClick}>
        Sign in
      </button>
    </div>
  );
}

export default Login;
