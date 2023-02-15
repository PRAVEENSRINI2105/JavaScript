//array declaration
let arr=['nokia','samsung','realme','redmi','oneplus','vivo','apple','iqoo']
let category=[1,2,3,[4,5,6,7]]
console.log(arr);
console.log(category);

//finding a length
console.log(arr.length)
console.log(category.length)

//assigning a new values based on index position
 arr[0] = 'micromax';
console.log(arr)

//complex array
const random = ['tree', 795, [0, 1, 2]];
console.log(random[2][0]);
console.log(random[2][1])
console.log(random[2][2])

//using a push function
console.log(arr.indexOf('samsung'))
arr.push('techno')
console.log(arr)


//unshift to push in an start of an array
arr.unshift('poco')
console.log(arr)


//Remove an item using a pop function
arr.pop()     //Last will remove
console.log(arr)

//shift used to remove an item first in an array
 arr.shift()
console.log(arr)

//splice is used to remove an item by using an index number splice(start,end)
arr.splice(1,3)
console.log(arr)


//for of print a data inside a array
for(array of arr)
console.log(array)

//for in print a index no of array
for(array in arr)
console.log(array)


//map is used to rpeat the process inside of all the elements in array
function twice(number){
return number*2;
}
const numbers=[2,3,4,5,6,7,8]
const twicenum=numbers.map(twice);
console.log(twicenum)


//filter is used to arraymatch element only in the new array
function isLong(city) {
    return city.length > 8;
  }
  const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
  const longer = cities.filter(isLong);
  console.log(longer);
  

//split() 
const cities = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
cities.split(',');
console.log(cities);

//join()
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());


console.log(elements.join(''));


console.log(elements.join('-'));


//tostring convert an array into string
const dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); // Rocket,Flash,Bella,Slugger


//if else
const name1=prompt("Enter a name");

if(name1=='ravi')
{
    console.log("you are correct");
}
else{
    console.log("you are wrong");
}

//if else if else
let age=prompt("Enter your age?");
if(age>=18){
    console.log("you are eligible for vote");
}
else if(age=0)
{
    console.log("Please enter your correct age")
}
else{
    console.log("You're not eligible to vote")
}


//nesting if else
//AND, OR, NOT
//Switch
//Ternary operator



//bgcolor and text color setting
const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}


//ternary operator in a event
select.addEventListener('change', () => select.value === 'black'
  ? update('black', 'white')
  : update('white', 'black')
);

//using a const and let
const cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

for (const cat of cats) {
  myFavoriteCats += `${cat}, `
}

console.log(myFavoriteCats); 

