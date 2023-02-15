//String
const string = "The revolution will not be televised.";
console.log(string);


const badString = string;
console.log(badString);



//Printing a correct string
const sin1 = 'Would you eat a "fish supper"?';
const dbl1 = "I'm feeling blue.";
console.log(sin1);
console.log(dbl1);



// we can't repeat a same quote another time in a string 
const big = 'I've got no right to take my place…';  
console.log(big)


//using a two quotes
const big= 'welcome\'s to aspire';
console.log(big);

//concatenation
let greeting='Welcome'
let name1='praveen'
console.log(`greeting ${name1}`);
console.log(`${greeting} ${name1}`);
console.log(greeting+', '+name1)

//printing a both number and string
const num=234;
const name1="aspire";
console.log(`${num}, ${name1}`)


//converting  a number to string
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);


//multiline string print
const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);

//Escaping character \n use

const output = "I like the song.\nI gave it a score of 90%.";
console.log(output);


//Finding a length of the string
const name1= 'welcome';
console.log(name1.length);
console.log(name1[2]);
console.log(name1.length-1);

//Testing if a string contains a substring using a includes

const name1="firefox";
//const name2="fox";
if(name1.includes("foxe")) {
    console.log("It's found");
}
else{
    console.log("It's not found");
}

 const name1="firefox";
const name2="fox";
if(name1.startsWith("f")) {
console.log("It's found");

else{
    console.log("It's not found");
}

//using endswith function check the substring or not
const name1="firefox";
//const name2="fox";
if(name1.endsWith("ox")) {
    console.log("It's found");
}
else{
    console.log("It's not found");
}


//finding the index position of a string
const tag= 'MDN - Resources for developers, by developers in developers';
//console.log(tag.indexOf('developers')); 
console.log(tag.indexOf('r'));

const firstOccurrence = tag.indexOf('developers');
const secondOccurrence = tag.indexOf('developers', firstOccurrence + 1);
const thirdoccurrence=tag.indexOf('developers', firstOccurrence + 1,secondOccurrence+1);;
console.log(firstOccurrence); 
console.log(secondOccurrence); 
console.log(thirdoccurrence);

//using a slice function
const varname="Mozilla firefox"
console.log(varname.slice(0,3)) //(start index, ending index +1)
console.log(varname.slice(1,3))
console.log(varname.slice(1,4))


//uppercase and lowercase
const name1="welCOme PraVEEn"
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());

//Replace a string
replace a string
const tag="welcome to Aspire";
console.log(tag.replace("Aspire","Praveen"))


//replace all the string
const tag="welcome to london to paris";
console.log(tag.replaceAll("to","and"))


