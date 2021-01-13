import React,{useContext}  from "react";
import {useSelector} from "react-redux";
import searchWordContext from "../contexts/SearchWordContext";
import { Link} from "react-router-dom";
import Country from "./Country";


const CountryList=({state,heightList})=>{
const countries= useSelector(state => state.countryName);
  const context=useContext(searchWordContext);

const renderCountryPlace=()=>{
  let {currencies,languages,topLevelDomain,border} = "";
console.log(countries);
  return ( Object.keys(countries).length===0&&context.term.length>1?<div className="loading-item">Loading...</div>:<div className="country-list__cards" >
  {countries.map((country,index) => {
    currencies=country.currencies.map((currency,index)=>currency.name).toString();
    languages=country.languages.map((language,index)=>language.name).toString();
    topLevelDomain=country.topLevelDomain.toString();
    border=country.borders.toString();
    return index<8?(
      <Link key={index}
      to={`/${country.name}/${country.nativeName}/${country.population}/${country.capital}/${country.alpha3Code.toLowerCase()}/${country.region}/${country.subregion}/${ topLevelDomain}/${currencies}/${languages}${border?"/"+border:"/noborder"}`}>
      <Country
      country = { country }
      population={country.population}
      state={state}
      index={index}>
      <img className="card__flag" alt={country.name} src={`${country.flag}`}/>
      </Country>
      </Link>
    ):<div key={index}></div>})}
  </div>
)
}
   return (
     <section className={`country-list  ${state?" light-background dark-text":" dark-background light-text"}`} style={{height:countries&&context.term.length>1?80+"vh":""}} >
     {renderCountryPlace()}
     </section>
   );
}
export default CountryList;
