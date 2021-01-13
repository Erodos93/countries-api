import React from "react";

import useEditPopulation from "../hooks/useEditPopulation";

const Country=({country,state,population,children,index})=>{
const[editPopulation]=useEditPopulation(population);


  return (
    <div className={`card  ${state?" light-element ":" dark-element"}`} >
    {children}
    <ul className={`card__tab ${state?"  dark-text":"  light-text"}`}>
    <li className="card__info--title" >
    <h1 className="card__info--name">{country.name}</h1>
    </li>
    <li className="card__info">
    <h2>Population: </h2> <span className=""> {editPopulation}</span>
    </li>
    <li className="card__info">
    <h2>Region: </h2>
    <span className=""> {country.region}</span>
    </li>
    <li className="card__info">
    <h2>Capital: </h2><span className=""> {country.capital}</span>
    </li>
    </ul>
    </div>

  );

}

export default Country;
