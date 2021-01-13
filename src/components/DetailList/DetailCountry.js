import React from "react";
import useEditPopulation from "../../hooks/useEditPopulation";
import {detailListObject} from "./detailListObject";
import BackButton from "./BackButton";
import DetailBorderOfCountry from "./DetailBorderOfCountry";
import ListItems from "./ListItems";
import ListItem from "./ListItem";
import {useParams} from "react-router-dom";


const DetailCountry=({onBackToParent,heightList,state,selectState})=>{
let {name,nativeName,region,subregion,capital,population,alpha,topLevelDomain,currencies,languages,border}=useParams();
const[editPopulation]=useEditPopulation(population);
const listValue=detailListObject(nativeName,
                              editPopulation,
                              region,
                              subregion,
                              capital,
                              topLevelDomain,
                              languages,
                              currencies);
const renderList=(listValue)=>{
  return(
      <ListItems nameClass={"detail_content__list"}>
      {listValue.map((item,index)=>{
        return  (
        <ListItem key={index}
        classNameList={`detail_content__list--info__title ${index%5===0?"end-col":""}`}
        classNameTitle="title"
        nameTitle={item.title}
        listValue={item.value}
        />
      )
      })
    }
      </ListItems>
  )
}
const urlFlag="https://restcountries.eu/data/"+alpha+".svg";
return (
<section className={`detail__background ${state?" light-background dark-text":" dark-background light-text"}`} >
      <BackButton state={state} selectState={selectState}/>
         <div className={`detail__background-items row ${state?" light-background dark-text":" dark-background light-text"}`}>
              <div className="detail__background-items--1 ">
              <img className="detail_image" alt={name} src={urlFlag}/>
              </div>
          <div className={`detail__background-items--2  ${state?" light-background dark-text":" dark-background light-text"}`}>
          <h2 className="detail_content--name">{name}</h2>
          {renderList(listValue)}
          <DetailBorderOfCountry
          border={border}
          state={state}
          />
      </div>
</div>
  </section>
);
}
export default DetailCountry;
