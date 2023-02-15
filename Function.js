//Function keydown is using to display which key is pressed
function logKey(event) {
    console.log(`You pressed "${event.key}".`);
  }
  
  textBox.addEventListener('keydown', logKey);
  
//Alternate method

  textBox.addEventListener('keydown',function(event) {
    console.log(`You pressed "${event.key}".`);
  });


//using an arrow function
textBox.addEventListener('keydown',(event)=> {
    console.log(`You pressed "${event.key}".`);
});

//single line arrow function
textBox.addEventListener("keydown",(event)=>console.log(`you pressed ${event.key}".`));

//the function take only one parameter so omit the bracket

textBox.addEventListener("keydown",event=>console.log(`You pressed ${event.key}".`));


//using an map
 const list=[1,2,3,4,5]
const result=list.map((re=>re*2))
console.log(result);

//alert the user
alert("Hello ")



// const body = document.body;

// const panel = document.createElement('div');
// panel.setAttribute('class','msgBox');
// body.appendChild(panel);

// const msg = document.createElement('p');
// msg.textContent = 'This is a message box';
// panel.appendChild(msg);

// const closeBtn = document.createElement('button');
// closeBtn.textContent = 'x';
// panel.appendChild(closeBtn);

// closeBtn.addEventListener('click', () => panel.parentNode.removeChild(panel));


// const res = document.querySelector('.btn');

// function random(number) {
//   return Math.floor(Math.random() * (number+1));
// }

// res.addEventListener('click', () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });


//Remove the listeners
btn.removeEventListener('click', changeBackground);

//Event objects
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener('click', bgChange);


//display the key pressed
// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");
// textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);


//prevent the event
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
});


//Event Bubbling
const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector('#container');
const button = document.querySelector('button');

document.body.addEventListener('click', handleClick);
container.addEventListener('click', handleClick);
button.addEventListener('click', handleClick);


//fixing the event bubbling
const btn = document.querySelector('button');
const box = document.querySelector('div');
const video = document.querySelector('video');

btn.addEventListener('click', () => box.classList.remove('hidden'));
video.addEventListener('click', () => video.play());
box.addEventListener('click', () => box.classList.add('hidden'));


//stop propogation()
const btn = document.querySelector('button');
const box = document.querySelector('div');
const video = document.querySelector('video');

btn.addEventListener('click', () => box.classList.remove('hidden'));

video.addEventListener('click', (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener('click', () => box.classList.add('hidden'));


//Event capture least nested to highest nested
const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector('#container');
const button = document.querySelector('button');

document.body.addEventListener('click', handleClick, { capture: true });
container.addEventListener('click', handleClick, { capture: true });
button.addEventListener('click', handleClick);

//Event Delegation random color change
function random(number) {
    return Math.floor(Math.random()*number);
  }
  
  function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
  }
  
  const container = document.querySelector('#container');
  
  container.addEventListener('click', (event) => event.target.style.backgroundColor = bgChange());
  