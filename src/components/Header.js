import React from "react"
import Switch from "./Switch";
const Header=({state,changeLightToDark})=>{
  return(
    <header className={`header ${state?" light-element dark-text":"dark-element light-text"}`}>

    <div className="header__title">
    <h3 >
    Where in the world?
    </h3>
    </div>
     <Switch changeLightToDark={changeLightToDark}/>
    </header>
  )
}
export default Header;
