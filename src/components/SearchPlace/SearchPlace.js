import React,{useState,useContext} from "react";
import SearchBar from "./SearchBar";
import OptionScroll from "./OptionScroll";
import useFetchData from "../../hooks/useFetchData";
import searchWordContext from "../../contexts/SearchWordContext";

const SearchPlace=({state})=>{

  const [option,setSelect]=useState("");

  const onSelectOption=select=>{
    setSelect(select);
  }

  const context=useContext(searchWordContext);
  const onSearchTerm=e=>{
   context.searchBar(e.target.value);
  }
  useFetchData(context.term,option);
  return <>
  <section className={`search_place row ${state?" light-background":" dark-background"}`}>

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
