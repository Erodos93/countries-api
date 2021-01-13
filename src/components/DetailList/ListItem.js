import React from "react";

const ListItem =({classNameList,classNameTitle,nameTitle,listValue})=>{
  return(<li className={classNameList} >
    <h4 className={classNameTitle}>{nameTitle}</h4>{listValue}
  </li>
)
}
export default ListItem;
