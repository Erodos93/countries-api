import {combineReducers} from "redux";

import countryNameReducer from "./countryNameReducer";
import detailCountryReducer from "./detailCountryReducer"
export default combineReducers({

  countryName:countryNameReducer,
  detailCountry:detailCountryReducer
})
