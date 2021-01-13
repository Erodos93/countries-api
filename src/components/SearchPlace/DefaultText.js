import React from "react";

const DefaultText=({defaultText,className,select})=>{
  return(<div className={className}>
    {select?select:defaultText}
    </div>)
}
export default DefaultText;
