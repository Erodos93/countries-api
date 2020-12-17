import React from "react";

const SearchBar=({state,onSearchTerm})=>{


  return(

    <form className="searchbar ">
    <input
    inputMode="search"
    className={`searchbar__input ${state?" light-element light__input dark_text":" dark-element dark__input"}`}
    style={{color:state ?" #111517":"  #ededed"}}
    onChange={onSearchTerm}
    placeholder="Search for a country..." />
    </form>
  )
}

export default SearchBar;
