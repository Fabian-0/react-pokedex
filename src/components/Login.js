import React, { useContext } from "react";
import { useHistory } from "react-router";
import { authContenxt } from "../Contexts/AuthContext";

function Login() {
  let history = useHistory();

  const { user, signIn } = useContext(authContenxt);

  console.log(user);

  const handleClick = () => {
    signIn();
    history.replace("/");
  };

  return <button onClick={handleClick}>Sign in</button>;
}

export default Login;
