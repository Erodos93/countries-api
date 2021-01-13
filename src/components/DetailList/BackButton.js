import React from "react";
import {useHistory} from "react-router-dom";



const BackButton=({state,selectState})=>{
  const history=useHistory();

return(

<div className="button__area row">
<button onClick={()=>history.push("/")} className={`button__area--back ${state ?" light-element ":" dark-element"}`}>
<ion-icon className={`arrow-back `} style={{color:state ?" #111517":"  #ededed",paddingRight:1+"rem",verticalAlign:"middle"}}
name="arrow-back-outline"
>
</ion-icon><span className={`${state?" dark-text":" light-text"}`}>Back</span></button>
</div>

)




}
export default BackButton;
