import React,{useState,useContext} from "react";
import SearchBar from "./SearchBar";
import OptionScroll from "./OptionScroll";
import useFetchData from "../../hooks/useFetchData";
import newContext from "../../contexts/SearchWordContext";

const SearchPlace=({state})=>{

  const [option,setSelect]=useState("");

  const onSelectOption=select=>{
    const scrollButton=document.querySelector("#scroll-down-list");
    setSelect(select);
    if (scrollButton) {
      scrollButton.style.height="14rem";
    }

  }
  const context=useContext(newContext);
  const onSearchTerm=e=>{
   context.searchBar(e.target.value);
  }
  useFetchData(context.term,option);
  return <>
  <section className={`search_place search_padding ${state?" light-background":" dark-background"}`}>

  <SearchBar
  state={ state}
  onSearchTerm={onSearchTerm} />


  <OptionScroll
  select={option}
  onSelectOption={onSelectOption}
  state={ state}/>
  </section>

</>
}

export default SearchPlace;
