import React from "react";
import {options} from "./selectOption";
const SelectList=({state,select,option,scroll,onScroll,onSelectOption})=>{
  const selectAndClose=(option)=>{
    onSelectOption(option.value);
    onScroll();
  }
  const selectOption=()=>{
    return(options.map((option,index)=>{
      return option.content===select?"":<div key={index} onClick={()=>selectAndClose(option)} className={`option_form__list--item  ${scroll?" isVisible": " isInvisible"}`}>{option.content}</div>
    }))
  }
  return (
    <div className={`tab-option-position option_form__list${state?" light-element":" dark-element "}`} /*style={{height:scroll&&select?18+"rem":""}} */ id={scroll?"open-list": "close-list"}>
    <div className={`option_form__list--items ${state?"  dark-text":" light-text"}`}>
    {selectOption()}
    </div>
    </div>
  )
}
export default SelectList;
// ${scroll?" isVisible": " isInvisible"}
