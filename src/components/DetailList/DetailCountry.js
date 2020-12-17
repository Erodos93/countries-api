import React from "react";
import {borders} from "../../data/borderNamesOfCountries"
import BackButton from "./BackButton";
import {useParams} from "react-router-dom";


const DetailCountry=({onBackToParent,heightList,state,selectState})=>{

console.log(borders);


let {name,nativeName,region,subregion,capital,population,alpha,topLevelDomain,currencies,languages,border}=useParams();
console.log(border);
const arrayBorder=border.split(" ");
console.log(arrayBorder);
const urlFlag="https://restcountries.eu/data/"+alpha+".svg"
return (
<section className={`detail__background ${state?" light-background dark-text":" dark-background light-text"}`} /*style={heightList}*/>
      <BackButton state={state} selectState={selectState}/>


      <div className="detail__background-items" >
              <div className="detail__background-items--1">
              <img className="detail_image" alt={name} src={urlFlag}/>
              </div>
          <div className={`detail__background-items--2`}>
          <h2 className="detail_content--name">{name}</h2>

          <ul className="detail_content__list">
          <div className="detail_content__list--info-tab-1">
          <li className="detail_content__list--info__title" ><h4 className="title">Native Name:</h4>{nativeName} </li>
          <li className="detail_content__list--info__title"><h4 className="title">Population: </h4>{population}</li>
          <li className="detail_content__list--info__title"><h4 className="title"> Region: </h4>{region} </li>
          <li className="detail_content__list--info__title"><h4 className="title">Sub Region: </h4>{subregion} </li>
          <li className="detail_content__list--info__title"><h4 className="title">Capital: </h4>{capital} </li>
          </div>
          <div className="detail_content__list--info-tab-2">
          <li className="detail_content__list--info__title"><h4 className="title">Top Level Domain: </h4>{topLevelDomain} </li>
          <li className="detail_content__list--info__title"><h4 className="title">Languages: </h4> {languages}</li>
          <li className="detail_content__list--info__title"><h4 className="title">Currencies: </h4> {currencies}</li>
          </div>
          <div className="detail_content__list--info-tab-3">
          <li className="detail_content__list--info__title"><h4 className="title">Border Countries:  </h4>
          <div className="detail_content__list--info__title-items">
          {arrayBorder.map((urlBorder,index)=>{
            let output="";
            borders.map((inputObject,index)=>{
              if (urlBorder===inputObject.alpha3Code) {
                output+=inputObject.name;
                return output;
              }else{
                return "";
              }
            })
            return output?<button key={index} className={`detail_content__list--info__button ${state?" light-element dark-text":" dark-element light-text"}`}>
            {output}
            </button>:<div></div>
          })
        }
        </div>
          </li>
           </div>

          </ul>
          </div>
</div>


  </section>
);

}

export default DetailCountry;
