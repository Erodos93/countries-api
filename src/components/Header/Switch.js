import React from "react";

const Switch=({changeLightToDark})=>{
  return (
    <div  className="header__switch col-1-of-3">
    <ion-icon
        onClick={changeLightToDark}
        name="moon-outline"/>
   <h3 className="header__switch-title">
   Dark Mode
   </h3>
    </div>);
}
export default Switch;
