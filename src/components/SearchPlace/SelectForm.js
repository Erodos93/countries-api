import React from "react";

const SelectForm=({openTab,state,children,className})=>{
  return(
<div onClick={()=>openTab()} className={className}>
{children}
</div>
  );
}
export default SelectForm;
