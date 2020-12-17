import React  from "react";
import {useSelector} from "react-redux";

import Country from "./Country";

import { Link} from "react-router-dom";
import _ from "lodash";

const CountryList=({state})=>{

//
  let stringLevelDomain,text;
  let objectArray=[];
  const nothing="/noborder";

  const arrayToString=(array)=>{
    stringLevelDomain="";
   if(array){
    array.forEach((item, i) => {
    if (i===array.length-1) {
      stringLevelDomain+=item;
    } else {
    stringLevelDomain+=item+" ";
    }
  });


  return stringLevelDomain;
}
}
const objectToString =(object)=>{
  objectArray=[];
  text="";
  object.forEach((item,i)=>{
    objectArray.push(item.name);
  })

  objectArray.forEach((item,i)=>{
    if (!item) {
      return;
    }
     if (i!==0) {
       if (!item) {
         return;
       }else{
         text+=" , "+item;
       }
  }else{
      text+=item;
  }
  })

  return text;
}

const countries= useSelector(state => state.countryName);

     const countCard=_.size(countries);
     const heightSize=countCard<=8? (12) * countCard: (14) * 8;
     const heightList={
       minHeight:heightSize+"rem"

     }

   return (
     <section className={`country-list ${state?" light-background dark-text":" dark-background light-text"}`} style={heightList}>
     <div className={`country-list__background ${state?" light-background dark-text":" dark-background light-text"}`}>

     {countries.map((country,index) => {

     const topLevelDomain=arrayToString(country.topLevelDomain);
    const currency= objectToString(country.currencies);
    const languages= objectToString(country.languages);
    const border=arrayToString(country.borders);

       return index<8?(
         <Link key={index}
         to={`/${country.name}/${country.nativeName}/${country.population}/${country.capital}/${country.alpha3Code.toLowerCase()}/${country.region}/${country.subregion}/${ topLevelDomain}/${currency}/${languages}${border?"/"+border:nothing}`}>

         <Country
         country = { country }
         population={country.population}
         state={state}
         index={index}>
         <img className="card__flag" alt={country.name} src={`${country.flag}`}/>
         </Country>
         </Link>
       ):<div key={index}></div>
     })}
     </div>

     </section>
   );


}
export default CountryList;

// /${stringCurrencies}/${country.languages}



// <Link key={index}
// to={`/${country.name}`}>
