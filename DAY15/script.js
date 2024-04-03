//selection
//creating and inserting element
//add class
//insert html
//adding to the page
//append , prepend , appendChild
// order in the dom tree
//  1st will be document  which contains over whole page
// console.log(document.body);

//seleting the html element
//NOTE -  1st Method selecting element by id
// const heading = document.getElementById('hello');

//2nd method = selecting element by tag Name
// const selectingElementByTagName = document.getElementsByTagName('h1');
// console.log(selectingElementByTagName);

//3rd method = selecting element by className
// const selectingElementByClassName = document.getElementsByClassName('heading1');
// console.log(selectingElementByClassName);

//4th method querySelector
//only select the first element
// const querySelectorMethod = document.querySelector('.heading1');
// console.log('querySelectorMethod', querySelectorMethod);

//5th method  querySelectorAll
// const querySelectorAllMethod = document.querySelectorAll('.heading1');
// console.log('querySelectorAll', querySelectorAllMethod);

//Creating  a new element
// const paraTag = document.createElement('p');
// console.log(paraTag)
// paraTag.textContent="new para added using javascript"
// heading.appendChild(paraTag)

//append method used to append multiple element append(paraTag , anyOtherElmentweHaveCreated)
// appendChild() only used to append single element
//prepend() method attach the element in the start not in the end

// styling the elements using javascript
// heading.style.backgroundColor = 'gray'
// heading.style.padding= '20px'
// heading.style.border = '3px solid black'

//adding the classes using javascript
// heading.classList.add('jsClass')

// //used to remove the applied class
// heading.classList.remove('heading1')
// console.log(heading);

// // heading.textContent = '<h3>hello</h3>';
// // heading.innerHTML = '<h3>hello</h3>';

//EVENTS

//when user interact with the webpage or website it emits event like when i click a button or  hover any section  ,so we  use the emmited

//addEventListener method

// const para = document.getElementById('para') ;
// console.log(para) ;
// const btn = document.getElementById('btn') ;
// console.log(btn) ;

// btn.addEventListener('click', ()=>{
//     para.textContent = 'the button is hovered'
//     para.classList.toggle('jsClass')
//     para.style.color = "blue"
//     para.style.fontSize = "40px"
// })

document.getElementById('form').addEventListener('submit', () => {
  //submit event will fire when the form is submitted by user
  //event.preventDefault prevent the default submit behaviour of the form submission

  event.preventDefault();
  //.value is used to get the input from the input field
  const userName = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  console.log(userName, password);
});
