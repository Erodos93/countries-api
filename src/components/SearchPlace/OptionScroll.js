import React,{useState} from "react";
import {options} from "./selectOption"


const OptionScroll=({onSelectOption,select,state})=>{
const [scroll,setScroll]=useState(false);
const openTab=()=>{
  setScroll(!scroll);
}



return(
  <div className="option_form">
    <div onClick={openTab} className={`option_form__select ${state?" light-element ":"dark-element "}`}>
      <div className={`option_form__select--default-value ${state?"  dark-text":" light-text"}`}>Filter by Region</div>
      <div  className={`option_form__select--button ${state?" dark-arrow":" white-arrow"}`}></div>
    </div>
    <div className={`absolute-position option_form__list  ${state?" light-element":"dark-element "}`} style={{height:scroll&&select?14+"rem":""}}id={scroll?"scroll-down-list": "scroll-up-list"}>
    <ul className={`option_form__list--items ${state?"  dark-text":" light-text"} ${scroll?" isVisible": " isInvisible"}`}>
    {options.map((option,index)=>{
      return option.content===select?"":<li key={index} onClick={()=>onSelectOption(option.value)} className="option_form__list--item">{option.content}</li>
    })}


    </ul>
    </div>
  </div>
);
// style={{height: scroll ? 18+"rem":0,transition:"height 2s"}}
// style={{display: scroll ? " block":" none",padding:scroll? "0 0":"0 2rem"}}
//   return<form  className="option_form" >
//   <select  className={`option_form__select ${state?" light-element dark-arrow":"dark-element white-arrow"}`} onChange={onSelectOption} value={option}  >
//   <option value="" hidden >Filter by Region</option>
//   {options.map((option,index)=>{
// return <option key={index} style={{padding:2+"rem"}}value={option.value} >{option.content}</option>
//   })}
//
//   </select>
//   </form>
}
export default OptionScroll;
