import { createContext } from "react";

const authContext = createContext({
  typeOfSearch: '',
  dataToSearch: null,
  updateSearch: (typeOfSearch, dataToSearch) =>{
    this.typeOfSearch,
    this.dataToSearch
  }
});

export default authContext;