import React from "react"
import Switch from "./Switch";
import Title from "./Title";
const Header=({state,changeLightToDark})=>{

  return(

    <header className={`header  ${state?" light-element dark-text":"dark-element light-text"}`} >

     <Title title="Where in the world?"/>
     <Switch changeLightToDark={changeLightToDark}/>
    </header>
  )
}
export default Header;
