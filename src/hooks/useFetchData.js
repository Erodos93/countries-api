import {useEffect} from "react";
import {fetchData,filterDataByName,filterDataByRegion,filterDataByRegionAndName} from "../actions";
import {useDispatch} from "react-redux";


 const useFetchData=(word,region)=>{

const dispatch=useDispatch();
useEffect(()=>{
  switch(!word){
    case true:
      switch(!region){
        case true:
        console.log("fetchData");
        const time=setTimeout(()=>{
          dispatch(fetchData());

        },1);
        console.log(time);
        break;
        case false:
        console.log("filterDataByRegion");
        dispatch(filterDataByRegion(region));
        break;
        default:
        break;
      }
      break;
    case false:
        switch(!region){
          case false:
          console.log("filterDataByRegionAndName");
          dispatch(filterDataByRegionAndName(word,region));
          break;
          case true:
            console.log("filterDataByName");
            dispatch(filterDataByName(word));
            break;
          default:
          break;
        }
        break;
    default:
    break;
  }

 },[dispatch,region,word])

}

export default useFetchData;
