import React from "react";

import CountryList from "./CountryList";

import SearchPlace from "./SearchPlace/SearchPlace";
import {SearchWordStore} from "../contexts/SearchWordContext";
const List = ({state})=>{
  return(
<div className={state? "light-background":"dark-background"}>
  <SearchWordStore>
    <SearchPlace
    state={state}
    />
  </SearchWordStore>
      <CountryList
          state={state}
          />

</div>

  );

}
export default List;
