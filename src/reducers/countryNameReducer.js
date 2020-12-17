
module.exports= (state=[],action) =>{
switch (action.type){
  case "FILTER_NAMES_BY_COUNTRY":
        return action.payload;
  case "FILTER_COUNTRY_BY_REGION":
              return action.payload;
  case "FILTER_COUNTRY_BY_REGION_AND_NAME":
              return action.payload;
  case "FETCH_DATA":
              return action.payload;
 case "GET_DETAIL":
              return action.payload;
  default:
  return state;
}
};
