import React from "react";
import "./Assets/styles/GridContainer.css";

function GridContainer({ children }) {
  return <div className="Pokedex__grid row">{children}</div>;
}

export default GridContainer;
