import React from "react";

const Footer=({state})=>{
  return <div className={`footer ${state?" light-background dark-text":" dark-background light-text"}`}></div>
}
export default Footer;
