//Name will change and update your name
const para=document.querySelector('p');
para.addEventListener('click',namechange);

function namechange(){
    const name=prompt('Enter your name');
    para.textContent=`player 1: ${name}`;
}

//You clicked the button will display in the screen
function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }
  
//create paragraph will display for all the buttons used in the HTML
  const buttons = document.querySelectorAll('button');
  
  for (const button of buttons) {
    button.addEventListener('click', createParagraph);
  }

//Bingo says hello wil be display
let name1 = 'Bingo';
name1 += ' says hello!';
console.log(name1);

//A name you entered and print the hello name, nice to see you
const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = () => {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
}

//function will be created and display a myName var datatype
myName = 'praveen';

function logName() {
  console.log(myName);
}

//logName();

var myName;


//let data type
let myName = 'praveen';

function logName() {
  console.log(myName);
}

// logName();

//  myName;


//typeof used to check what data types these are

let myNumber = '500'; // oops, this is still a string
console.log(typeof myNumber);

myNumber = 500; // much better — now this is a number
typeof myNumber;
console.log(typeof myNumber);



//objects
const bird = { name : 'peacock'};
//console.log(bird.name);  

bird.name = 'pigeon';
console.log(bird.name);  

//Integer
const myInt = 5;
console.log(typeof myInt);

//Float
const myFloat = 6.667;
console.log(typeof myFloat);


// const lotsOfDecimal = 1.766584958675746364;
// lotsOfDecimal;

const twoDecimalPlaces = lotsOfDecimal.toFixed(3);   //to fixed is used to round up the number
console.log(twoDecimalPlaces);


//concatenate of the number
let myNumber = "74";
myNumber += 3;
console.log(myNumber)

//sum  the values 
let myNumber = "74";
myNumber = Number(myNumber) + 3;
console.log(myNumber)


//Arithmetic Operators

const num1=10
const num2=5
let add;
let sub;
let div;
let mul;
let pow;
let comp1;
let comp2;
let comp3;

add=num1+num2;
console.log(add)      //addition

sub=num1-num2;
console.log(sub)      //subtraction

div=num1/num2;
console.log(div)      //Division

mul=num1*num2;
console.log(mul)      //Multiplication

pow=num1**num2;
console.log(pow)      //Power

comp1= 5 + 10 * 3;
console.log(comp1);       //complex number

comp2=(num2 % 9) * num1;
console.log(comp2)          //operator precedence

comp3=num2 + num1 / 8 + 2;
console.log(comp3)          //operator precedence


//start machine and stop machine will displays
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}


