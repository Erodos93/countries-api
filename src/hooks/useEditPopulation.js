


const useEditPopulation=(population)=>{

 let firstString="";
  let lastString="";
  let concatPopulation="";

  if (String(population).length>6) {
      firstString=String(((population/Math.pow(10,6)).toFixed(3)));
      lastString=String(population).substr(population.length-3,3);
      concatPopulation=firstString.concat(".",lastString);

  }else{
      firstString=String(((population/Math.pow(10,3))));
      concatPopulation=firstString;
  }

  return [concatPopulation];
}
export default useEditPopulation;
