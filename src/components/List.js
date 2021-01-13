import React from "react";

import CountryList from "./CountryList";

import SearchPlace from "./SearchPlace/SearchPlace";
import {SearchWordStore} from "../contexts/SearchWordContext";

const List = ({state,heightList})=>{
  return(
<div className={state? "light-background":"dark-background"}>
  <SearchWordStore>
    <SearchPlace
    state={state}
    />
    <CountryList
    state={state}
    heightList={heightList}
    />
  </SearchWordStore>




</div>

  );

}
export default List;
