import React from "react";

const Switch=({changeLightToDark})=>{
  return (<div  className="header__switch">
    <ion-icon
        onClick={changeLightToDark}
        name="moon-outline"/>
   <h3 className="header__switch-title">
   Dark Mode
   </h3>
    </div>);
}
export default Switch;
