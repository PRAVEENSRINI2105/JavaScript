/*const para=document.querySelector('p');
para.addEventListener('click',namechange);

function namechange(){
    const name=prompt('Enter your name');
    para.textContent=`player 1: ${name}`;
}
*/

// function createParagraph() {
//     const para = document.createElement('p');
//     para.textContent = 'You clicked the button!';
//     document.body.appendChild(para);
//   }
  
//   const buttons = document.querySelectorAll('button');
  
//   for (const button of buttons) {
//     button.addEventListener('click', createParagraph);
//   }

// let name1 = 'Bingo';
// name1 += ' says hello!';
// console.log(name1);

// const buttonA = document.querySelector('#button_A');
// const headingA = document.querySelector('#heading_A');

// buttonA.onclick = () => {
//   const name = prompt('What is your name?');
//   alert(`Hello ${name}, nice to see you!`);
//   headingA.textContent = `Welcome ${name}`;
// }

// myName = 'praveen';

// function logName() {
//   console.log(myName);
// }

// logName();

// var myName;


// let myName = 'praveen';

// function logName() {
//   console.log(myName);
// }

// logName();

//  myName;

// let myNumber = '500'; // oops, this is still a string
// console.log(typeof myNumber);

// myNumber = 500; // much better — now this is a number
// typeof myNumber;
// console.log(typeof myNumber);

// const bird = { name : 'peacock'};
// //console.log(bird.name);  

// bird.name = 'pigeon';
// console.log(bird.name);  

// const myInt = 5;
// console.log(typeof myInt);

// const myFloat = 6.667;
// console.log(typeof myFloat);


// const lotsOfDecimal = 1.766584958675746364;
// lotsOfDecimal;

// const twoDecimalPlaces = lotsOfDecimal.toFixed(3);   -->to fixed is used to round up the number
// console.log(twoDecimalPlaces);


// let myNumber = "74";
// myNumber += 3;
// console.log(myNumber)

// let myNumber = "74";
// myNumber = Number(myNumber) + 3;
// console.log(myNumber)

// const num1=10
// const num2=5
// let add;
// let sub;
// let div;
// let mul;
// let pow;
// let comp1;
// let comp2;
// let comp3;

// add=num1+num2;
// console.log(add)

// sub=num1-num2;
// console.log(sub)

// div=num1/num2;
// console.log(div)

// mul=num1*num2;
// console.log(mul)

// pow=num1**num2;
// console.log(pow)

// comp1= 5 + 10 * 3;
// console.log(comp1);

// comp2=(num2 % 9) * num1;
// console.log(comp2)

// comp3=num2 + num1 / 8 + 2;
// console.log(comp3)

// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//   if (btn.textContent === "Start machine") {
//     btn.textContent = "Stop machine";
//     txt.textContent = "The machine has started!";
//   } else {
//     btn.textContent = "Start machine";
//     txt.textContent = "The machine is stopped.";
//   }
// }


// const string = "The revolution will not be televised.";
// console.log(string);


// const badString = string;
// console.log(badString);

// const sin1 = 'Would you eat a "fish supper"?';
// const dbl1 = "I'm feeling blue.";
// console.log(sin1);
// console.log(dbl1);


// const big = 'I've got no right to take my place…';   -->we can't repeat a same quote another time in a string 
// console.log(big)

// const big= 'welcome\'s to aspire';
// console.log(big);

//concatenation
// let greeting='Welcome'
// let name1='praveen'
// console.log(`greeting ${name1}`);
// console.log(`${greeting} ${name1}`);
//console.log(greeting+', '+name1)

// const num=234;
// const name1="aspire";
// console.log(`${num}, ${name1}`)


// const myNum2 = 123;
// const myString2 = myNum2.toString();
// console.log(typeof myString2);

// const output = `I like the song.
// I gave it a score of 90%.`;
// console.log(output);

// const output = "I like the song.\nI gave it a score of 90%.";
// console.log(output);

// const name1= 'welcome';
// console.log(name1.length);
// console.log(name1[2]);
// console.log(name1.length-1);

//Testing if a string contains a substring

/*const name1="firefox";
//const name2="fox";
if(name1.includes("foxe")) {
    console.log("It's found");
}
else{
    console.log("It's not found");
}
*/

// const name1="firefox";
// //const name2="fox";
// if(name1.startsWith("f")) {
//     console.log("It's found");
// }
// else{
//     console.log("It's not found");
// }

// const name1="firefox";
// //const name2="fox";
// if(name1.endsWith("ox")) {
//     console.log("It's found");
// }
// else{
//     console.log("It's not found");
// }


//finding the position of a string
// const tag= 'MDN - Resources for developers, by developers in developers';
// // //console.log(tag.indexOf('developers')); 
// // console.log(tag.indexOf('r'));

// const firstOccurrence = tag.indexOf('developers');
// const secondOccurrence = tag.indexOf('developers', firstOccurrence + 1);
// const thirdoccurrence=tag.indexOf('developers', firstOccurrence + 1,secondOccurrence+1);;
// //console.log(firstOccurrence); 
// //console.log(secondOccurrence); 
// console.log(thirdoccurrence);


// const varname="Mozilla firefox"
// console.log(varname.slice(0,3)) -->(start index, ending index +1)
// console.log(varname.slice(1,3))
// console.log(varname.slice(1,4))


// const name1="welCOme PraVEEn"
// console.log(name1.toUpperCase());
// console.log(name1.toLowerCase());


//replace a string
// const tag="welcome to Aspire";
// console.log(tag.replace("Aspire","Praveen"))


//replace all
// const tag="welcome to london to paris";
// console.log(tag.replaceAll("to","and"))


//array
//let arr=['nokia','samsung','realme','redmi','oneplus','vivo','apple','iqoo']
// let category=[1,2,3,[4,5,6,7]]
// console.log(arr);
// console.log(category);

// console.log(arr.length)
// console.log(category.length)

//  arr[0] = 'micromax';
// console.log(arr)

// const random = ['tree', 795, [0, 1, 2]];
// console.log(random[2][0]);
// console.log(random[2][1])
// console.log(random[2][2])

// console.log(arr.indexOf('samsung'))
// arr.push('techno')
// console.log(arr)


//unshift to push in an start of an array
// arr.unshift('poco')
// console.log(arr)


//Remove an item
// arr.pop()     --> last will remove
// console.log(arr)

//shift used to remove an item first in an array
// arr.shift()
// console.log(arr)

//splice is used to remove an item by using an index number splice(start,end)
// arr.splice(1,3)
// console.log(arr)


//for of print a data inside a array
// for(array of arr)
// console.log(array)

//for in print a index no of array
// for(array in arr)
// console.log(array)


//map is used to rpeat the process inside of all the elements in array
// function twice(number){
// return number*2;
// }
// const numbers=[2,3,4,5,6,7,8]
// const twicenum=numbers.map(twice);
// console.log(twicenum)


//filter is used to arraymatch element only in the new array
// function isLong(city) {
//     return city.length > 8;
//   }
//   const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
//   const longer = cities.filter(isLong);
//   console.log(longer);
  

//split() 
// const cities = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// cities.split(',');
// console.log(cities);

//join()
// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // Expected output: "FireAirWater"

// console.log(elements.join('-'));
// // Expected output: "Fire-Air-Water"

//tostring convert an array into string
// const dogNames = ['Rocket','Flash','Bella','Slugger'];
// dogNames.toString(); // Rocket,Flash,Bella,Slugger


//if else
// const name1=prompt("Enter a name");

// if(name1=='ravi')
// {
//     console.log("you are correct");
// }
// else{
//     console.log("you are wrong");
// }

//if else if else
// let age=prompt("Enter your age?");
// if(age>=18){
//     console.log("you are eligible for vote");
// }
// else if(age=0)
// {
//     console.log("Please enter your correct age")
// }
// else{
//     console.log("You're not eligible to vote")
// }


//nesting if else

//AND, OR, NOT
//Switch

/*
function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}
*/
//Ternary operator
// const select = document.querySelector('select');
// const html = document.querySelector('html');
// document.body.style.padding = '10px';

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// select.addEventListener('change', () => select.value === 'black'
//   ? update('black', 'white')
//   : update('white', 'black')
// );

// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = 'My cats are called ';

// for (const cat of cats) {
//   myFavoriteCats += `${cat}, `
// }

// console.log(myFavoriteCats); 

