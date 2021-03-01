import React from 'react';

function GridContainer({ children }) {
  return (
    <div className="Pokedex__grid row">
      {children}
    </div>
  );
}

export default GridContainer;