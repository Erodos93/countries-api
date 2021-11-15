import jsonCountryInfo from "../apis/jsonCountryInfo";
import useFilterData from "../hooks/useFilterData";



export const fetchData = () =>async dispatch=>{
  const response = await jsonCountryInfo.get(`/all ? 3c267c46f88544700c8dee91ee211c65`);
  dispatch({
    type:"FETCH_DATA",
    payload:response.data});
  }
  
export const filterDataByName = value => async (dispatch,getState)=>{
await dispatch(fetchData());
await jsonCountryInfo.get(`/name/${value} ? 3c267c46f88544700c8dee91ee211c65`).then(res=>{
  console.log(res);
  if (res.status!==404) {
    const data = getState().countryName;
    const filterData=useFilterData(res.data,value);
    dispatch({
      type:"FILTER_NAMES_BY_COUNTRY",
      payload:value.length>0?filterData:data
    });
  } else {
    dispatch({
      type:"FILTER_NAMES_BY_COUNTRY",
      payload:[]
    });
  }
})
.catch(error=>{
  dispatch({
    type:"FILTER_NAMES_BY_COUNTRY",
    payload:[]
  });
});
}


export const filterDataByRegion = region =>async dispatch=>{
  const response= await jsonCountryInfo.get(`/region/${region} ? 3c267c46f88544700c8dee91ee211c65`);

  dispatch({
  type:"FILTER_COUNTRY_BY_REGION",
  payload:response.data
  });
}

export const filterDataByRegionAndName=(name,region)=>async (dispatch,getState)=>{
  await dispatch(filterDataByRegion(region))
  const filterRegion=getState().countryName;
  const filterData=useFilterData(filterRegion,name);

  dispatch({
  type:"FILTER_COUNTRY_BY_REGION_AND_NAME",
  payload:name.length>0?filterData:filterRegion
});

}
