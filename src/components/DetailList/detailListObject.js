export const detailListObject=(nativeName,
                              editPopulation,
                              region,
                              subregion,
                              capital,
                              topLevelDomain,
                              languages,
                              currencies)=>{
  const listValue=[{
                    title:"Native Name: ",
                    value:nativeName},
                    {
                    title:"Population: ",
                    value:editPopulation},
                    {
                    title:"Region: ",
                    value:region},
                    {
                    title:"Sub Region: ",
                    value:subregion},
                    {
                    title:"Capital: ",
                    value:capital},
                    {
                    title:"Top Level Domain: ",
                    value:topLevelDomain},
                    {
                    title:"Languages: ",
                    value:languages},
                    {
                    title:"Currencies: ",
                    value:currencies
                  }
                  ];
                  return listValue;
}
