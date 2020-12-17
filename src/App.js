import React,{useState} from "react";
import List from "./components/List";
import Header from "./components/Header";



import DetailCountry from "./components/DetailList/DetailCountry";

import { BrowserRouter as Router,Route} from "react-router-dom";

import "./styles/main.scss";
const App =()=>{

  const [state,setState]=useState(false);
  const changeDayToNight=()=>{
    console.log(state);
    setState(!state)
  }
  return(
    <Router>
    <Header
    state={state}
    changeLightToDark={changeDayToNight}
    />
      <Route  path={`/`} exact>
      <List changeDayToNight={changeDayToNight}
      state={state}
      />
        </Route>
        <Route  path={`/:name/:nativeName/:population/:capital/:alpha/:region/:subregion/:topLevelDomain/:currencies/:languages/:border`}>
      <DetailCountry
      // heightList={heightList}
      state={state}/>

      </Route>
    </Router>
  );

}

export default App;
// /:currencies/:languages
// <Route  path={`/:name`}>

// <Route  path={`/:name/:nativeName/:population/:alpha/:region/:subregion/:topLevelDomain/:currencies/:languages/:id`}>
