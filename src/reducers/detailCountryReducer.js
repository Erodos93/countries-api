module.exports= (state=[],action) =>{
switch (action.type){
case "GET_DETAIL":
              return action.payload;
  default:
  return state;
}
};
