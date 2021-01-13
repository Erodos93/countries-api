import React,{useState} from "react";
import List from "./components/List";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";


import DetailCountry from "./components/DetailList/DetailCountry";

import { BrowserRouter as Router,Route} from "react-router-dom";

import "./styles/main.scss";
const App =()=>{
  const [state,setState]=useState(false);
  const changeDayToNight=()=>{

    setState(!state)
  }
  return(
    <Router>
    <Header
    state={state}
    changeLightToDark={changeDayToNight}
    />
      <Route  path={`/`} exact>
      <List
      changeDayToNight={changeDayToNight}
      state={state}

      />
        </Route>
        <Route
        path={`/:name/:nativeName/:population/:capital/:alpha/:region/:subregion/:topLevelDomain/:currencies/:languages/:border`}
        >
      <DetailCountry

      state={state}/>

      </Route>
      <Footer state={state}/>
    </Router>

  );

}

export default App;
