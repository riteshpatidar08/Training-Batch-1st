// // optional chaining (?)

// const info = {
//   id: 1,
//   firstName: 'Ritesh',
//   address: {
//     street: {
//       houseNo: 43,
//       lane: 'abc',
//     },
//     state: 'rajasthan',
//     city: 'udaipur',
//   },
// };
// //if we access a property in the object which is not available then it will show error and our code execution get stopped .
// //if we use the optional chaining (?) it gives us undefined and our code will execute
// console.log(info.street?.state);
// // with optional chaining

// // console.log(info.street?.state);

// let value = 5;
// console.log(value);

// //NOTE -  OBJECTS properties
//object.keys
// const booking = {
//   trainNo: 12345,
//   passengerCount: 3,
//   passengerName: ['a', 'b', 'c'],
// };

// const keys = Object.keys(booking);
// // keys = ['trainno', 'passengerCount' , 'passengerName']
// keys.forEach(function (element) {
//   console.log(element);
// });
// // console.log(keys) ;

//object.values

// const values = Object.values(booking);
// // console.log(values) ;

//object.assign
// //to add two objects
// const booking2 = {
//   departureDate: '12-05-2024',
// };

// const addBothObject = Object.assign(booking, booking2);
// // console.table(addBothObject)
// //object.entries
// //important to loopover object with keys and values
// const entries = Object.entries(booking);
// console.log(entries);
// for (const [key, value] of entries) {
//   console.log(`${key} : ${value}`);
// }

// //delete properties from object ;

// console.log(delete booking.passengerName);
// console.log(booking);

//Remaining array methods

//slice
//donot modify the original array
// const companies = [
//   'apple',
//   'samsung',
//   'google',
//   'meta',
//   'microsoft',
//   'netflix',
//   'amazon',
//   'ibm',
//   'infosys',
//   'ibm',
// ];

//slice method

// const slicedArray = companies.slice(2,5) ;
// console.log(slicedArray)
//splice

// modify original array
// console.log(companies);
// console.log(companies.splice(1, 0, 2, 3));
// console.log(companies);
// splice(start, numberof elements to delete , elements to add)
// console.log(companies);

//reverse
// // to reverse an array
// //modify the original array
// console.log(companies.reverse());
// console.log(companies);

//concat
// const companies2 = ['accenture'];
// const companies3 = companies.concat(companies2);
// console.log(companies3);

// lastIndexOf
// give us last index of the repeated value

// const NumberArray = [1, 2, 3, 4, 4, 5];
// console.log(NumberArray.lastIndexOf(4));



//-----------------------02/04/2024-----------------------
// //normal function
// function sum(a,b){
//   return a + b ;
// }
// // arrow function
// const sum = (a,b) => {
//   return a + b ;
// }
//Data transformation Method of Arrays

//NOTE MAP METHOD FOR ARRAY
const numArr = [1,2,3,4,5,6] ;
const mappedArr = numArr.map((element)=> element * 2)
console.log(numArr)
console.log(mappedArr)

//NOTE perform the transform operation in the callback and returns new array

//NOTE most important method in the array

// Filter method

// const companies = ['apple' , 'apple' , 'microsoft', 'meta', 'google', 'google' ,] ;

// const filteredCompanies = companies.filter((element) => element === 'google')
// console.log(companies) ;
// console.log(filteredCompanies) ;

//find method same as filter but return only one element that matching the condition 

const numberArray = [1,2,3,4,4,5,6] ;
const findArray = numberArray.find((a)=> a === 4) ;
console.log(findArray) ;

//reduce 
// const numberArray = [1,2,3,4,5,6,7] ;
// const reducedArray = numberArray.reduce((accumulator , currentItem)=> {
//   console.log(accumulator , currentItem)
//   return accumulator + currentItem ;
// },0)

//


const companies = ['apple' , 'apple' , 'microsoft', 'meta', 'google', 'google' ,] ;

//some
const someArray = companies.some((e) => e === 'tcs');
console.log(someArray);

//sort
// //modify original array
const newNumArray = [7,2,8,4,5,1,3,6] ;
const sortedArray = newNumArray.sort() ;
console.log(sortedArray) ;

// ascending order 
//descending order
const descendingOrder = newNumArray.sort((a,b)=> b-a) ;
console.log(descendingOrder)

// // console.log(num2) ;

//forEach method
//to loop over array ;
const fruits = ['mango' , 'apple' , 'grapes' ,'pomengranate'] ;

fruits.forEach((item)=>{
  console.log(item)
})



// //Task

// Create an object of a user with properties like firstName, lastName, and age. Add a method called formatInfo() that formats and returns the user's information as a string, such as "Ram, is 27 years old".
const myDetails  = {
  firstName : 'Ram' ,
  lastName : '' ,
  age : 27 ,
  formatInfo : function(){
    return `${this.firstName} , is ${this.age} years old `
  }
}

console.log(myDetails.formatInfo()) ;
// // TODO - Array Destructuring Tasks
// // Task: Swap Variables
// // Swap the values of two variables using array destructuring.
// let ab = 10;
// let ba = 30;
// [ab, ba] = [ba, ab];
// console.log(ab, ba);
// // Task: Extract First and Last Element
// // Extract the first and last elements of an array using array destructuring.
// // const  [a, , , b]  = [1,2,3,4]
// // Task: Ignore First Element
// // Ignore the first element of an array and extract the rest using array destructuring.

// //splice method :
// //use the splice method in a array to add two elements at the index 2 ;

// //slice method
// //use the slice method to get the item between index (2,5) ;

// //map method
// //use the map method to transform a array in a table of 6 ;

// //create a object and loopover the keys and values of that object
