import jsonCountryInfo from "../apis/jsonCountryInfo";
import useFilterData from "../hooks/useFilterData";



export const filterDataByName = value => async (dispatch,getState)=>{
await dispatch(fetchData());
const response = await jsonCountryInfo.get(`/name/${value}`);
const data = getState().countryName;

const filterData=useFilterData(response.data,value);

dispatch({
type:"FILTER_NAMES_BY_COUNTRY",
payload:value.length>0?filterData:data
});
}

export const detailOfCountry = value => async dispatch=>{

const response = await jsonCountryInfo.get(`/name/${value}`);

dispatch({
type:"GET_DETAIL",
payload:response.data[0]
});
}
export const filterDataByRegion = region =>async dispatch=>{
  const response= await jsonCountryInfo.get(`/region/${region}`);

  dispatch({
  type:"FILTER_COUNTRY_BY_REGION",
  payload:response.data
  });
}

export const filterDataByRegionAndName=(name,region)=>async (dispatch,getState)=>{
  await dispatch(filterDataByRegion(region))
  const filterRegion=getState().countryName;
 // console.log(filterRegion);
  const filterData=useFilterData(filterRegion,name);

  dispatch({
  type:"FILTER_COUNTRY_BY_REGION_AND_NAME",
  payload:name.length>0?filterData:filterRegion
});

}
export const fetchData = () =>async dispatch=>{
  const response = await jsonCountryInfo.get(`/all`);

  dispatch({
  type:"FETCH_DATA",
  payload:response.data});
}
