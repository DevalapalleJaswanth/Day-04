let request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    let result=JSON.parse(request.response);
    console.log(result);
    result.forEach((value)=>{console.log(`Name:${value.name} Region:${value.region} Sub-Region:${value.subregion} Population:${value.population}`)});
    }