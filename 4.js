/*TASK 1 : Simple Programs todo for variables*/
// 1. Declare four variables without assigning values and print them in console.
var v1,v2,v3,v4;
console.log(v1,v2,v3,v4);
// 2. Declare variables to store your first name, last name, marital status, country and age in multiple lines.
var firstName="Devalapalle Jaswanth";
var lastName="Reddy";
var maritalStatus="Not Married";
var country="India";
var age=23;
// 3. Convert the string to integer.
var s="121";
console.log(parseInt(s)); // using parseInt().
console.log(Number(s)) // using Number().
console.log(+s) // using +.

/*TASK 2 : Simple Programs todo for Operators*/
// 1. Square of a number.
let x=10;
console.log(x**2);
// 2. Swapping 2 numbers.
let a=2,b=3;
console.log(`Before Swapping: a=${a}  b=${b}`);
a=a^b;
b=a^b;
a=a^b;
console.log(`After Swapping: a=${a}  b=${b}`);

/*TASK 3: Simple Programs todo for Condition , Looping and Arrays*/
// 1. Write a loop that makes seven calls to console.log to output the following triangle.
/*
#
##
###
####
#####
######
#######
*/ 
let arr=["#","##","###","####","#####","######","#######"];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
// 2. Get the first item, the middle item and the last item of the array.
let arr2=[1,2,3,4,5];
console.log(`First Element: ${arr2[0]}, Middle Element: ${arr2[parseInt(arr2.length/2)]}, Last Element: ${arr2[arr2.length-1]}`); 
// 3. Find the friends names who has letter ‘a’ and return the list.
var friends = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
    ];
let result=friends.filter((ele)=> ele.search("a")!== -1)
console.log(result);   
