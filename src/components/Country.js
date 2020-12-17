import React from "react";

import useEditPopulation from "../hooks/useEditPopulation";

const Country=({country,state,population,children,index})=>{
const[editPopulation]=useEditPopulation(population);
const marginToCard={
  marginRight:  6 +"rem"
}

  return (


    <div className={`card  ${state?" light-element ":" dark-element"}`} style={marginToCard} >
    {children}
    <ul className={`card__tab ${state?"  dark-text":"  light-text"}`}>
    <li className="card__info--name">
    <h2>{country.name}</h2>
    </li>
    <li className="card__info--population">
    <h4>Population: </h4> <span> {editPopulation}</span>
    </li>
    <li className="card__info--region">
    <h4>Region: </h4>
    <span>{country.region}</span>
    </li>
    <li className="card__info--capital">
    <h4>Capital: </h4><span> {country.capital}</span>
    </li>
    </ul>
    </div>

  );

}

export default Country;
