import React from "react";

const ListItems = ({nameClass,children})=>{
  return(
    <ul className={nameClass}>
    {children}
    </ul>
  )
}
export default ListItems;
