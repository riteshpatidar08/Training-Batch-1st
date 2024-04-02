'use strict';

//NOTE - OBJECTS METHODS

// let myDetails = {
//     firstName : "Ritesh" ,
//     lastName : "patidar",
//     age : 2024 - 1997 ,
//     //the function we used in the object is called methods
//     retirement : function(){
//       console.log(this)
//       return 65 - this.age
//     }
// }

// console.log(myDetails.retirement(27))

// function retirement(age) {
//   return 65 - age
// }

// dot notation

//to update the property values :

// console.log(myDetails)

// let ask = prompt("hello what you want to know about me firstName , lastName , age") ;
// ask = 'age'
// //used bracked notation to get the value from the mydetails object
// if(myDetails['age']) {
//     alert(myDetails['age'])
// }else {
//     alert('details not found')
// }

//NOTE -  LOOPS

// while
// const numbers = [1, 2, 3, 4, 5];
// let i = 0;

// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i++;
// }

//NOTE  - Destructuring arrays
// const arr = [1,2,3,4,5] ;
// const firstValue  = arr[0] ;
// const secondValue = arr[1] ;
// const thirdValue = arr[2] ;
// const [firstValue , secondValue , thirdValue ,  ,fifthValue] = arr
//TODO destructure the nested array console alll the values
// const arr = [1, 2, 3, [4, 5, 6], 7];
// const [
//   firstValue,
//   secondValue,
//   thirdValue,
//   [fourthValue, fifthValue, sixthValue],
//   seventhValue,
// ] = arr;

// Assigning values from an array to variables

//Swapping values of variables:

// Assigning default values:
// const [a , b=2]  = [1] ;
// console.log(a ,b)

// Skipping values:

// Destructuring function parameters:

// function add([a,b ,c]){
//     console.log(a,b,c)
//     return a + b + c
// }

// console.log(add([1,2 , 3])) ;

// function add2([a,b]){
//     // const a = num[0] ;
//     // const b = num[1] ;
//     return a + b ;
// }

// console.log(add2([1,2]))
//nested array

// const arr2  = [2,3,4,[5,6],7] ;

// const [a,b,c ,[d,e], f]  = arr2 ;

// console.log(a,b,c,d,e,f)

// NOTE - Destructuring Objects
// let myDetails = {
//   firstName: 'Ritesh',
//   lastName: 'patidar',
//   age: 2024 - 1997,
//   job: 'software developer',
// };
//by using we can get the values directly from the object

// const { firstName: fName, lastName, age, job } = myDetails;
// console.log(fName, lastName, age, job);

// Assigning values from an object to variables:
// Assigning values with different variable names:
// Assigning default values:
// Nesting destructuring:
// Destructuring function parameters:

// NOTE - Spread Operator  (...)
// const fruits = ['mango', 'apple', 'grapes'];
// const vegetables = ['tomato', 'potato'];
// const fruitAndVegetables = [...fruits, ...vegetables];
// console.log(fruitAndVegetables);
// console.log(...fruits);

// Copying an array:
// const arr1 = [1, 2, 3];
// const arr3 = [...arr1];
// console.log(arr1);
// console.log(arr3);

// const fruits = ['mango', 'apple'];
// const vegetables = ['potato', 'tomato'];
// const groceryItems = [...fruits, ...vegetables];
// console.log(groceryItems);
//Passing elements as function arguments:

// const number = [1, 2];

// function add(a, b) {
//   return a + b;
// }

// console.log(add(...number));

// ...number = 1 , 2

// objects
// const obj1 = {
//   firstName: 'Ritesh',
// };

// const obj2 = {
//   lastName: 'patidar',
// };

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// Copying an object:
// Concatenating object:
// Adding or updating properties:

//NOTE - Rest Patterns
// const arr2 = [1, 2, 3, 4, 5];
// const [a, b, ...rest] = arr2;
// console.log(a, b, rest);
// a =1 ; b= 2  , rest = [3,4,5]


//NOTE - The for of loop
//to loop over the whole array 
// const companies = ['goole', 'meta', 'amazon', 'accenture', 'tcs', 'microsoft'];

// for(const company of companies){
//   console.log(company)

// }

//NOTE - for in


// for(const key in booking){
//   console.log(`${key} : ${booking[key]}`)
// }

// to loopover object

//NOTE - Enhanced Object Literals
// Shorthand property names:
// Computed property names:
// Method shorthand:

// NOTE - Optional Chaining (?.)

//NOTE -  OBJECTS properties

//object.keys
const booking = {
  trainNo: 32434,
  trainName: 'dfsads',
};

// Object.keys returns a array of the keys 
console.log(Object.keys(booking)) 
// ['trainNo , trainName']

//object.values
//returns values
console.log(Object.values(booking)) 
//[32434 , 'dfsads']
//object.assign
const obj = {
  firstName : 'Ritesh',
}
const obj2 = {
  job : 'developer'
}
//first value is target the object in which we want to merge the second object 
console.log(Object.assign(obj , obj2))

//object.entries
// Object.freeze(): Freezes an object: other code can't delete or change its properties.
// Object.seal(); //cannot add new properties can change existing one ;
//delete properties from object ;



//NOTE STRING AND METHODS

// TODO - Array Destructuring Tasks
// Task: Swap Variables
// Swap the values of two variables using array destructuring.

// Task: Extract First and Last Element
// Extract the first and last elements of an array using array destructuring.

// Task: Ignore First Element
// Ignore the first element of an array and extract the rest using array destructuring.
