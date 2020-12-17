import React,{useState} from "react";

const newContext= React.createContext();

export const SearchWordStore = ({children})=>{
   const [term,setTerm]=useState({
     term:""
   });
  const searchBar=(value)=>{
    setTerm({term:value})
  }
  return <newContext.Provider value={{...term,searchBar:searchBar}}>
  {children}
  </newContext.Provider>
}

export default newContext;
