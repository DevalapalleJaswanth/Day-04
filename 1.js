var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

let equalFun=(a)=>{
    let temp="";
   for(let key in a){
    temp=temp+key.toString()+a[key].toString();
   }
   return temp;
}
let s1=equalFun(obj1).split("").sort().toString();
let s2=equalFun(obj2).split("").sort().toString();
console.log(s1===s2);
