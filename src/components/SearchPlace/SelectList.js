import React from "react";
import {options} from "./selectOption";
const SelectList=({state,select,option,scroll,onScroll,onSelectOption})=>{
  const selectAndClose=(option)=>{
    onSelectOption(option.value);
    onScroll();
  }
  const selectOption=()=>{
    return(options.map((option,index)=>{
      return option.content===select?"":<li key={index} onClick={()=>selectAndClose(option)} className="option_form__list--item">{option.content}</li>
    }))
  }
  return (
    <div className={`tab-option-position option_form__list  ${state?" light-element":"dark-element "}`} style={{height:scroll&&select?18+"rem":""}}id={scroll?"scroll-down-list": "scroll-up-list"}>
    <ul className={`option_form__list--items ${state?"  dark-text":" light-text"} ${scroll?" isVisible": " isInvisible"}`}>
    {selectOption()}
    </ul>
    </div>
  )
}
export default SelectList;
