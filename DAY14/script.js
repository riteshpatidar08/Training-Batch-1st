//STRING METHOD
// NOTE Methods for extracting parts of a string
1; // charAt method
//return the character available on the given index position

// const strCharAt = str.charAt(1) ;
// console.log(strCharAt) ;

//2 slice
// slice(startIndex , endIndex) ;
// // you always get elements = endIndex - startindex
// const slicedString = str.slice(1,3) ;
// console.log(slicedString)

//NOTE Methods for searching for a substring
// console.log(str.indexOf('e'));
// console.log(str.includes('by'));

// let str = 'Hello, world!';

// //startsWith
// // check if our string start with the following word
// const startWithString = str.startsWith('no');
// console.log(startWithString);

// //endswith
// //check if our string ends with the following word
// const endsWithString = str.endsWith('world!');
// console.log(endsWithString);

//NOTE Methods for modifying a string
// let str = 'Hello world!'
// let replacedString = str.replace('world' , 'friend')
// console.log(replacedString)

// console.log( 'lowercase' , str.toLowerCase());
// console.log('uppercase' ,str.toUpperCase());

// console.log('add a word to string',str.concat(' Goodbye!'));

// //NOTE Methods for trimming whitespaces
// let newStr = '    hello world!   '
// console.log(newStr)
// let newTrimmedString = newStr.trim() ;
// console.log('trimmedString' ,
// newTrimmedString)

//split method converts string into array

// const str = 'Hello world!'

//to reverse a string in the javascript
// const splittedArray = str.split('');
// console.log(splittedArray)
// console.log(splittedArray.reverse().join(''))
//join method convert the array in to string

//Number methods

//NOTE Method 1: toFixed()
// const number1 = 3.14159;
// const roundedNumber1 = number1.toFixed(2);
// console.log(roundedNumber1);

// //NOTE Method 3: toLocaleString()
// const number3 = 1234567.89;
// const localeString = number3.toLocaleString('en-US');
// console.log(localeString);

// //NOTE Method 5: Number.parseInt()
// const stringNumber1 = '123';
// const parsedInt = Number.parseInt(stringNumber1);
// console.log(parsedInt);

// //NOTE Method 6: Number.parseFloat()
// const stringNumber2 = '3.14';
// const parsedFloat = Number.parseFloat(stringNumber2);
// console.log(parsedFloat);

// Date Object Methods

// Method 1: new Date() ;
// to print current time and date in the js
const currentDate = new Date();
console.log(currentDate);

const getDatee = currentDate.getDate();
console.log(getDatee);

const month = currentDate.getMonth();
console.log('Month:', month);

// Method 4: getFullYear()
const year = currentDate.getFullYear();
console.log('Year:', year);

// Method 5: getHours()
const hours = currentDate.getHours();
console.log('Hours:', hours);

// Method 6: getMinutes()
const minutes = currentDate.getMinutes();
console.log('Minutes:', minutes);

// Method 7: getSeconds()
const seconds = currentDate.getSeconds();
console.log('Seconds:', seconds);

// // Method 8: getMilliseconds()
// const milliseconds = currentDate.getMilliseconds();
// console.log('Milliseconds:', milliseconds);

// Method 9: toLocaleDateString()
const localeDateString = currentDate.toLocaleDateString();
console.log('Locale Date String:', localeDateString);

// Method 10: toLocaleTimeString()
const localeTimeString = currentDate.toLocaleTimeString();
console.log('Locale Time String:', localeTimeString);

// Math Object Methods
//NOTE Method
// 1: Math.abs()
const absoluteValue = Math.abs(-8.45);
console.log(absoluteValue);

// //NOTE Method 2: Math.round()
const roundedNumber = Math.round(4.2);
console.log('Rounded Number:', roundedNumber);

// //NOTE Method 3: Math.floor()
const floorValue = Math.floor(6.9);
console.log('Floor Value:', floorValue);

// //NOTE Method 4: Math.ceil()
const ceilValue = Math.ceil(3.2);
console.log('Ceiling Value:', ceilValue);

// //NOTE Method 5: Math.random()
const randomNumber = Math.random();
console.log('Random Number:', randomNumber);

//NOTE Method 6: Math.max()
const arr = [1,2,3,4,5,6,7,8,9]
const maxNumber = Math.max(...arr);
console.log('Max Number:', maxNumber);

//NOTE Method 7: Math.min()
const minNumber = Math.min(...arr);
console.log('Min Number:', minNumber);

//NOTE Method 8: Math.pow()
// const powerResult = Math.pow(2, 3);
// console.log('Power Result:', powerResult);

// //NOTE Method 9: Math.sqrt()
// const sqrtResult = Math.sqrt(25);
// console.log('Square Root Result:', sqrtResult);

//PI
// const piValue = Math.PI;
// console.log(piValue);

console.log('Start');

// Asynchronous operation using setTimeout

//hoisting ,
//pass by value and pass by reference
//execution context
//closures
//call by value
//asynchronous js
//oops
