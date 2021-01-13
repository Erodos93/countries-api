
import _ from "lodash";

const useFilterData=(response,value)=>{


       const filter=_.filter(response,data=>{
        const toLowerFirstCharToData=_.lowerCase(data.name)
        .substr(0,value.length);
        const toLowerFirstCharToValue=_.lowerCase(value)
        .substr(0,value.length);
        return toLowerFirstCharToData.indexOf(toLowerFirstCharToValue)!==-1 ;
      })
      return filter;





}

export default useFilterData;
