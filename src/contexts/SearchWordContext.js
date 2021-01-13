import React,{useState} from "react";

const searchWordContext= React.createContext();

export const SearchWordStore = ({children})=>{
   const [term,setTerm]=useState({
     term:""
   });
  const searchBar=(value)=>{
    setTerm({term:value})
  }
  return <searchWordContext.Provider value={{...term,searchBar:searchBar}}>
  {children}
  </searchWordContext.Provider>
}

export default searchWordContext;
