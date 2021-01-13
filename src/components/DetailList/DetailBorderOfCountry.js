import React from "react";
import {borders} from "../../data/borderNamesOfCountries"
const DetailBorderOfCountry=({border,state})=>{

  const renderItem=()=>{
    const arrayBorder=border.split(",");
    return(
      arrayBorder.map((urlBorder,index)=>{
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
      </button>:<button key={index} className={`detail_content__list--info__button ${state?" light-element dark-text":" dark-element light-text"}`}>none</button>
    })
  )
  }

  return(<div className="detail_content__list--border"><h4 className="detail_content__list--border-title">Border Countries:  </h4>
    <div className="detail_content__list--info__title-items col-1-of-2">
    {renderItem()}
  </div>
  </div>
  )
}
export default DetailBorderOfCountry;
