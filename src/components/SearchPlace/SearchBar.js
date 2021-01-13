import React from "react";
import searchWhite from '../../images/search-outline-white.svg';
import searchDark from '../../images/search-sharp.svg';
const SearchBar=({state,onSearchTerm})=>{


  return(

    <form className="searchbar col-1-of-2">
    <label className="label-img">
    <img className="img-lupa" src={state?searchDark:searchWhite} alt="Lupa"/>
    </label>
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
