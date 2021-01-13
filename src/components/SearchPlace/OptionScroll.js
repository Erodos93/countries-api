import React,{useState} from "react";
import SelectForm from "./SelectForm";
import SelectList from "./SelectList";
import SelectButton from "./SelectButton";
import DefaultText from "./DefaultText";
const OptionScroll=({onSelectOption,select,state})=>{
const [scroll,setScroll]=useState(false);

return(
  <div className="option_form col-1-of-2">
    <SelectForm
    openTab={()=>setScroll(!scroll)}
    className={`option_form__select ${state?" light-element ":"dark-element "}`}
    >
    <DefaultText className={`option_form__select--default-value ${state?"  dark-text":" light-text"}`}
    selectText={select}
    defaultText={"Filter by Region"}/>
    <SelectButton  className={`option_form__select--button ${state?" dark-arrow":" white-arrow"}`}/>
   <SelectList onSelectOption={onSelectOption} onScroll={()=>setScroll(!scroll)} scroll={scroll} />
    </SelectForm>

  </div>
);
}
export default OptionScroll;
