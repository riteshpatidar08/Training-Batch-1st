//NOTE two ways to write the javascript code
// 1. you can use the script tag  in the html file
//2 you can make a script.js file and attach to the script tag using the scr attribute

//this is called camelCase naming convention ;
// let myName = "ritesh";
// let myRollNo = '15egdg433';

//NOTE value and variables ;

//NOTE - Data types ;
//Primitve data types
//non-primitive data types ;
//primitive  data types :

// only one type of datatypes are stored in the variable

//NON primitive :
// multiple data types can be stored in a variable

// Primitive Data types in the javascript
//1.Number
//2.String
//3. Boolean
//4. Undefined
//5. NaN
//6 BigInt
//7 Symbol

//Number Data type
// let a = 5;
// console.log(typeof (a));

//String Data Type
// let msg = 'hello world'
// console.log(typeof(msg))

//to check the data type of the variable
// typeof();

//Boolean
// let isJsBoring = false;
// console.log(typeof (isJsBoring));

//undefined ;
// let greet;
// console.log(typeof (greet));

//NOTE - Let , Const , Var
// keywords to definee variables in the js
//LET
//NOTE - Only use let keyword to declare variables when you have to change the value of that variable in the future

// let rollNo = '34f343';
// rollNo = '3432432fsd';
// console.log(rollNo)

//2nd case
//we can declare let without assigning the value
// let add;
// console.log(add)

//NOTE - Const
// const fruit = 'apple';
// fruit = 'grapes'
// console.log(fruit)

// const b;  gives you error you cannot declare and later assign the value in the const keyword

//note Var keyword ;

// var c = 5;
// c = 7;
// console.log(c)

//operators

//arithmatic operators

//  + , = , * , / , **

//Addition

// let e = 5;
// let g = 7;
// let adddd = e + g;
// console.log(adddd);

// let firstName = "Steve";
// let lastName = "smith";

// console.log(firstName + " " + lastName)

// const c = 5;
// const d = '5';
// console.log(c+d)

//when we use + addition operator in front of any string it will generally converted into number
// const e = +'5';

//NOTE -  (-) subtraction operator

// const aa = '8';
// const bb = '6';
// const cc = 5;
// console.log(aa - bb + cc);

//NOTE - Multiplication Operator (*) ;

// const aa = '6';
// const bb = '7';
// console.log(aa * bb);

// Exponential operator
// const cc = 2;
// const dd = 3;
// console.log((cc ** dd));

//division (/)

// const a = 4;
// const b = 2;
// console.log(a / b);
// (%) modulus

//NOTE - ASSIGNMENT OPERATOR

// Assignment Operator (=)

// let x;
// x = 10; // Assigns the value 10 to variable x
// console.log(x);

// Addition Assignment (+=)
// let y = 5;
// y = y + 5;

// console.log(y);
// y += 5; // Equivalent to: y = y + 5; (y is now 10)

// Subtraction Assignment (-=)
// let z = 10;
// z -= 4; // Equivalent to: z = z - 4; (z is now 6)

//js interaction funciton

// prompt and alert
// const firstName = prompt("enter your first name");
// const lastName = prompt("enter your last name");

// alert(firstName + " " + lastName)
// Multiplication Assignment (*=)
// let a = 3;
// a *= 2; // Equivalent to: a = a * 2; (a is now 6)

// Division Assignment (/=)
// let b = 12;
// b /= 3; // Equivalent to: b = b / 3; (b is now 4)

// // Remainder Assignment (%=)
// let c = 10;
// c %= 3; // Equivalent to: c = c % 3; (c is now 1)

// // Exponentiation Assignment (**=)
// let d = 2;
// d **= 3; // Equivalent to: d = d ** 3; (d is now 8)

// console.log("x:", x);
// console.log("y:", y);
// console.log("z:", z);
// console.log("a:", a);
// console.log("b:", b);
// console.log("c:", c);
// console.log("d:", d);

//NOTE - COMPARISON OPERATOR

// // Equal to (==)
// console.log("Equal to operator (==)");
// let applesInBasket = '10';
// let orangesInBasket = 10;
// console.log(
//   "Are there equal number of apples and oranges?",
//   applesInBasket === orangesInBasket
// );

// Not equal to (!=)
// console.log("\nNot equal to operator (!=)");
// let userRole = "admin";
// let requiredRole = "admin";
// console.log(
//   "Is the user role different from the required role?",
//   userRole != requiredRole
// );

// // Strict equal to (===)
// console.log("\nStrict equal to operator (===)");
// let userInput = 5;
// let expectedInput = "5";
// console.log(
//   "Is the user input strictly equal to the expected input?",
//   userInput === expectedInput
// );

// Strict not equal to (!==)
// console.log("\nStrict not equal to operator (!==)");
// let userStatus = "active";
// let bannedStatus = "banned";
// console.log(
//   "Is the user status strictly not equal to banned?",
//   userStatus !== bannedStatus
// );

// Greater than (>)
// console.log("\nGreater than operator (>)");
// let userAge = 21;
// let requiredAge = 21;
// console.log(
//   "Is the user old enough to purchase alcohol?",
//   userAge > requiredAge
// );

// // // Less than (<)
// console.log("\nLess than operator (<)");
// let productPrice = 25;
// let budget = 50;
// console.log(
//   "Is the product price less than the available budget?",
//   productPrice < budget
// ); // true

// Greater than or equal to (>=)
// console.log("\nGreater than or equal to operator (>=)");
// let userPoints = 100;
// let requiredPoints = 100;
// console.log(
//   "Does the user have enough points to unlock the feature?",
//   userPoints >= requiredPoints
// ); // true

// // Less than or equal to (<=)
// console.log("\nLess than or equal to operator (<=)");
// let itemQuantity = 5;
// let minimumQuantity = 10;
// console.log(
//   "Is the item quantity less than or equal to the minimum required?",
//   itemQuantity <= minimumQuantity
// ); // true

// //NOTE - LOGICAL OPERATOR

// Logical AND (&&)
// console.log("Logical AND operator (&&)");
// let isLoggedIn = true;
// let isAdmin = true;
// console.log("Is the user logged in and an admin?", isLoggedIn && isAdmin);

// Logical OR (||)
// console.log("\nLogical OR operator (||)");
// let isMember = true;
// let isPremium = false;
// console.log("Is the user a member or a premium user?", isMember || isPremium);

// Logical NOT (!)
// console.log("\nLogical NOT operator (!)");
// let hasPermission =false;
// console.log("Does the user not have permission?", !hasPermission);

// Combining logical operators

// console.log("\nCombining logical operators");
// let isStudent = true;
// let isEmployee = false;
// let hasAccess = isStudent && !isEmployee;
// console.log("Does the user have access?", hasAccess);

// // Using logical operators with comparison operators
// console.log("\nUsing logical operators with comparison operators");
// let age = 25;
// let isAdult = age >= 18 && age <= 60;
// console.log("Is the person an adult?", isAdult);

// Short-circuit evaluation
// console.log("\nShort-circuit evaluation");
// let result = true || (console.log("This won't be executed"), false);
// console.log("Result:", result);

// //NOTE - Operator precedence
// Arithmetic Operators
// let result1 = 10 + 5 * 2; // Multiplication has higher precedence than addition
// console.log("Arithmetic Operators:", result1);

// // // Logical Operators
// let result2 = true || false && true; // Logical AND has higher precedence than logical OR
// console.log("Logical Operators:", result2);

// // Comparison Operators
// let result3 = 10 > 5 === true; // Greater than has higher precedence than strict equality
// console.log("Comparison Operators:", result3);

// // Assignment Operators
// let num = 10;
// num += 5 * 2; // Multiplication has higher precedence than assignment  // num = num + 10
// console.log("Assignment Operators:", num);

// Grouping with Parentheses
// let result4 = (10 + 5) * 2; // Parentheses have the highest precedence, forcing addition before multiplication
// console.log("Grouping with Parentheses:", result4);

// let a = prompt("enter your first name")
// let b = prompt("enter your last name")

// alert(a + " " + b);

// strings and template literals

// let firstName = "Ritesh";
// let lastName = "Patidar";
// let fullName = "I'm" +  " " + firstName + lastName ;
// let fullName = `Im ${firstName} ${lastName}`

// console.log("fullName:", fullName);

// let college = "GITS" ;
// let departMent = "CSE" ;
// let details = `I m a student of ${college}`
// let fullName = `hello  I'm ${firstName} ${lastName}`
// console.log("details:", details);
// console.log(fullName);

// //with using the template literals ;

//ex2 multiline
// let message =
//   `This is a long message
//   that spans multiple lines
//   using traditional concatenation`
// console.log(message);

// //NOTE - if else  condition

// let temperature = 25;

// if (temperature >= 30) {
//   console.log("It's a hot day!");
// } else if (temperature >= 20 && temperature < 30) {
//   console.log("It's a pleasant day.");
// } else {
//   console.log("It's a cold day.");
// }

// //Note  = age,transaction

// //Note = Interaction function

// //Note = prompt , alert

// Note = truthy and falsy values

// truthy values  = !0 or !'' ;
// falsy values = '' , 0 , undefined , null , NaN ;

// let a =  '' ;

// if(a) {
//   console.log('hello')
// }else {
//   console.log('bye')
// }

// Note = statement and expression

// ternary operator

//  condition ? if true this will run : else this will run

//  let age  = 20  ;

//  let isAdult = (age >= 18) ? "adult" : "minor" ;
//  console.log(isAdult)

// difference between == and === ?
let num = 10;

let strNum = '10';

console.log(num === strNum);

// let dataTypeStrNum = typeof strNum;

// console.log(dataTypeStrNum, datatypeNum);

// === working behind the scene
// checking the values and also data type of the variables

// if (dataTypeStrNum === datatypeNum) {
//   console.log("both are equal");
// } else {
//   console.log("both are not equal");
// }

//loose equality = not check the data types of the varibales

//strict = always check the data type of the variables

// Loose equality (==) comparison

//switch statement

// let grade = "B";
// let gradeDescription;

// if (grade === "A" || grade === "B") {
//   gradeDescription = "Excellent";
// } else if (grade === "C") {
//   gradeDescription = "Good";
// } else if (grade === "D") {
//   gradeDescription = "Fair";
// } else if (grade === "F") {
//   gradeDescription = "Poor";
// } else {
//   gradeDescription = "Invalid grade";
// }

// // console.log(`The grade "${grade}" is ${gradeDescription}`);

// //swtich statement
// let grade = "B";
// let gradeDescription;

// switch (grade) {
//   case "A":
//   case "B":
//     gradeDescription = "Excellent";
//     break;
//   case "C":
//     gradeDescription = "Good";
//     break;
//   case "D":
//     gradeDescription = "Fair";
//     break;
//   case "F":
//     gradeDescription = "Poor";
//     break;
//   default:
//     gradeDescription = "Invalid grade";
//     break;
// }

// console.log(`The grade "${grade}" is ${gradeDescription}`);

// 'use strict';

//NOTE -Types OF console
// Standard output
// console.log("Hello, World!");
// Error message
console.error('Oops! Something went wrong.');

// Warning message
console.warn('This is a warning message.');

// Informational message

// Please Check the use case of the both
//TODO - task
// console.log('This is an informational message.');
// console.info("This is an informational message.");

// Assertion message (only logs if the assertion is false)
// console.assert(5 > 10, "5 is not greater than 10.");
// console.assert(10 > 5, "10 is not greater than 5.");

// Object inspection
// Example object with nested properties
// let person = {
//   name: "Ritesh",
//   age: 27,
//   address: {
//     city: "Jaipur",
//     zipCode: "302033"
//   },
//   hobbies: ["Reading",  "Hiking"]
// // };

// // Logging the object using console.dir()
// console.dir(person);

// // Tabular data
// let data = [
//   { name: 'Ritesh', age: 30, city: 'New York' },
//   { name: 'Utsav', age: 25, city: 'Los Angeles' },
//   { name: 'Aman', age: 35, city: 'Chicago' },
// ];

// Logging data in tabular format
// console.table(data);
// console.log(data); // Logs a table with the data

// Grouped messages

// console.group('Group');
// console.log('Message 1');
// console.log('Message 2');
// console.groupEnd();

// Counting occurrences
// console.count("Counter");
// console.count("Counter");
// console.count("Counter");

// Execution time measurement
// console.time('Timer');
// Some code to measure
// for (let i = 0; i < 1000000000; i++) {
//   Math.sqrt(i);
// }
// console.timeEnd('Timer');

//NOTE - USE STRICT MODE ;

// myName = 'ritesh';
// console.log(myName);

// function add(a, a, b) {
//   return a + a + b;
// }

// const sum = add(2, 3, 4);
// console.log(sum);

//NOTE FUNCTIONS ;

// // to callfunction
// const myName = fullName('Ritesh' , 'patidar')
// const otherName = fullName('abc' , 'xyz')
// console.log("fullName:", myName);
// console.log("otherName :", otherName);

//NOTE FUNCTION DECLARATION AND FUNCTION EXPRESSION  ;

//function declaration

//when you call the function declaration before declare it it doest not give you an  error this is due to the concept in js which is called "HOISTING"
// const fullName2 = fullName('abc', 'xyz');

// function fullName(firstName, lastName) {
//   return `my name is ${firstName} ${lastName}`;
// }

// //calling the function expression before declaring it  "GIVES YOU INitialization error"
// const sum = add(2, 3);
// //function expression
// const add = function(a,b) {
//   return a +  b ;
// }

//NOTE - ARROW FUNCTIONS

//Normal function
function sum(a, b) {
  return a + b;
}

//arrow function single line
const sum1 = (a, b) => a + b;


//arrow function multi line ;
const fullName = (firstName, lastName) => {
  return `my name is ${firstName} ${lastName}`;
};
//shorter Format to write the functions in the javascript ;

//NOTE Arrow function

// }

//NOTE - FUNCTION CALLING ANOTHER FUNCTIONS

// NOTE - ARRAYS NON PRIMITIVE DATATYPES
//array can save multiple data types simultaneously like string number , boolean
const example = ['mango', 8, true];
// this example array contains multiple data types like string , number and boolean
const fruits = ['mango', 'grapes ', 'apple'];
// 0           1          2

//to access the items in the array each item have there own index value start with 0
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//To change the value at a particular index
fruits[0] = 'watermelon';
//when i am consoling the above fruits array the position of the mango will swap with the watermelon ;
console.log(fruits);

//other way to create an array ;

const fruit2 = new Array('mango', 'papaya', 'grapes', 'strawberry');
console.log(fruit2);

//3rd way to create an array
//push is a method which i call on the fruit3 array to add the items in the array
const fruit3 = [];
fruit3.push('mango');
fruit3.push('papaya');
fruit3.push('grapes');
console.log(fruit3);

//NOTE - METHODS OF THE ARRAY ;
//pop //push //shift //unshift //indexOF //includes

// we can use pop to delete the last item in the array
fruit3.pop();
console.log(fruit3);

//we can use push method to add an itmem in the array to the last
fruit3.push('blacberry');

//to remove the item from the first we can use the shift method
fruit3.shift();

//to add the item in the first position we can use the unshift method
fruit3.unshift('guava');

//to check the index of the particular item in a array we can use indexOf
fruit3.indexOf('papaya');
// if true it will return the index value if false it will return -1

//includes method check if a particular item is includes in a array return true and false
fruit3.includes('apple');

//TODO - tasks
// pop():
// Task 1: Create an array of fruits. Use the pop() method to remove the last element from the array. Print the removed element and the modified array.

// push():
// Task 1: Create an empty array. Use the push() method to add three numbers to the array. Print the array after each addition.

// shift():
// Task 1: Create an array of colors. Use the shift() method to remove the first element from the array. Print the removed element and the modified array.

// unshift():
//Task 1: Create an array of animals. Use the unshift() method to add a new animal to the beginning of the array. Print the modified array.

// indexOf():
// Task 1: Create an array of numbers. Use the indexOf() method to find the index of a specific number in the array. Print the index.

// includes():
// Task 1: Create an array of cities. Use the includes() method to check if a specific city is present in the array. Print the result.

//NOTE - OBJECTS ;
//objects are generally start with {} curly brackets and have "KEY : VALUE" pair similar like dictonary in the python

const booking = {
  trainName : 'xyz' ,
  trainNo : 12334 ,
  passengerNames : ['a', 'b' , 'c']
}
// tO ACCESS THE OBJECT ITEMS WE CAN USE TWO METHODS -
//dot notation 
console.log(booking.trainName)
//bracket notation 
console.log(booking['trainNo'])
// to access the array item in the object
console.log(booking.passengerNames[0]);
//To update the value


const details = {
  firstName: 'abc',
  lastName: 'abc',
  //nested object
  address: {
    street: 'abc',
    city: 'udaipur',
    state: 'Rajasthan',
    country: 'india',
  },
};
// //to access the nested object properties
console.log(details.address.state);
console.log(details.address.city);
console.log(details.address.country);
// // second way to access the key:values of the object
// // 2. BRACKET NOTATION
console.log(details['firstName']);
console.log(details['lastName']);
console.log(details['address']['city']);

const info = {
  firstName: 'abc',
  lastName: 'xyz',
  //the function we used inside a object is called "methods"
  // here formattedName is the name of the function and its value is your function defination
  formattedName: function () {
    //"this" is a javascript keyword which always point to the current object when you console the "THIS" keyword it will give you the whole object.
    console.log(this);
    return `my name is ${this.firstName} ${this.lastName}`;
  },
};
console.log(info.formattedName());
// //TODO - task
// let fruit = "apple";
// let fruitColor;

// if (fruit === "apple" || fruit === "cherry" || fruit === "strawberry") {
//   fruitColor = "red";
// } else if (fruit === "banana") {
//   fruitColor = "yellow";
// } else if (fruit === "orange") {
//   fruitColor = "orange";
// } else {
//   fruitColor = "unknown";
// }

// console.log(`The color of ${fruit} is ${fruitColor}`);

// //strict mode

// // NOTE  TASK
// //TODO TASK 1 - User Authentication:
// Prompt the user to enter their username and password.
// Use logical AND (&&) to check if the username is "admin" and the password is "admin123".
// If both conditions are true, display "Authentication successful". Otherwise, display "Authentication failed".

// //Todo Task 2
// // Access Control:
// Prompt the user to enter their role (admin or user) and age.
// Use logical OR (||) to check if the role is "admin" or the age is 18 or above.
// If either condition is true, display "Access granted". Otherwise, display "Access denied".

// //TODO - task 3
// // Product Discount:
// Ask the user if they are a premium member (yes/no) and if they are a student (yes/no).
// Use logical NOT (!) to check if the user is not a premium member and not a student.
// If the user is neither a premium member nor a student, inform them that they get a discount of 10%. Otherwise, inform them that they do not qualify for a discount.

// let inputUser1 = prompt("You are student");
// let inputUser2 = prompt("you have premium ");

// if (inputUser1 != "yes" && inputUser2 != "yes") {
//   alert("You got 10% discount");
// } else {
//   alert("sorry! you can't get any discount");
// }

// //TODO - task 4
// // Membership Eligibility:

// Prompt the user to enter their age and employment status (employed/unemployed).
// Use logical AND (&&) to check if the age is between 18 and 60 (inclusive) and the user is employed.
// If both conditions are true, inform the user that they are eligible for membership. Otherwise, inform them that they are not eligible.

// //TODO -  task 5
// // Shipping Eligibility:

// Ask the user for their order total amount and if they are a premium member (yes/no).
// Use logical OR (||) to check if the order total is greater than or equal to $50 or the user is a premium member.
// If either condition is true, inform the user that they are eligible for free shipping. Otherwise, inform them that shipping charges apply.

// // Todo String literals
