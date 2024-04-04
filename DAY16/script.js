//Task

//create a "p" tag using js .
//add content inside the p tag.
//set the background-color of the p tag red
//append the p tag inside the body tag

//asynchronous javascript
//Timers make the javscript asynchronous
//Timer function , the timer functions are provided by a browser object called "window" it is not included in the javascript..

//NOTE -  1 setTimeout 2. setinterval
// console.log( "code executed on line 12 :",'hello')
// setTimeout(()=>{
//  console.log('this code is executed after 4 sec')
// },4000)
// console.log("code executed on line 13 :" ,'hi')
// console.log("code executed on line 14 :",'hey')

// setInterval(()=>{
//     console.log('this code is executed after every 3 sec')
// },3000)

// callback functions
// function fetchData(callback){
//     console.log(callback)
//     setTimeout(()=>{
//         const data  = 'hello world' ;
//        callback(data)
//     },2000)

// }
// fetchData(function(data){
//     console.log(data)
// }) ;

// //callback hell
// function f1(callback){
//     setTimeout(()=>{
//         callback()
//         console.log('f1 is executed')
//     })
// }
// function f2(callback){
//     setTimeout(()=>{
//         callback()
//         console.log('f2 is executed')
//     })
// }
// function f3(callback){
//     setTimeout(()=>{
//         callback()
//         console.log('f3 is executed')
//     })
// }
// function f4(callback){
//     setTimeout(()=>{
//         callback()
//         console.log('f4 is executed')
//     })
// }
// function f5(){
//     setTimeout(()=>{

//         console.log('f5 is executed')
//     })
// }

// f1(()=>{
//     f2(()=>{
//         f3(()=>{
//             f4(()=>{
//                 f5()
//             })
//         })
//     })
// })

//promises
// promises is a object which is a placeholder for feature value of excecution of asyunchronous code.

// const returnedPromise = fetch('https://restcountries.com/v3.1/all');

// returnedPromise.then((res)=>{
//    return res.json()
// }).then((data)=>{
//     console.log(data)
// })
//how to create a promise in the javascript

// function returnPromise() {
//   return new Promise((resolve, reject) => {
//     resolve('hello');
//   });
// }
// const promise = returnPromise()
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

//async await 

// async function AsyncAwait(){
//     return new Promise((resolve , reject)=>{
//         resolve('hello')
//     })
// }

// async function fetchAsync(){
//     const data = await AsyncAwait() ;
//     console.log(data)
// }

//async wait 

const returnedPromise = fetch('https://restcountries.com/v3.1/all');

returnedPromise.then((res)=>{
   return res.json()
}).then((data)=>{
    console.log(data)
})


const fetchdata = async() =>{
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json()
    console.log(data)
    console.log(res)
}
fetchdata() ;

//   // Example of async/await

// // Using async/await

//oops

// class - a blueprint from which we can create an object
// instances - an object is an instance of class new object created from the class

// class ---> instance  //classiscal
//oops in js : prototypes
// protype --> contains method object can access these method
//ways to implement prototype inheritance
//constructor function
//es6 classes
//object.create
