objects
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
  
console.log(person.name);
console.log(person.name[0]);
console.log(person.age);
console.log(person.bio());
console.log(person.introduceSelf());


Objects as object properties
const person1={
    name:{
        first:"praveen",
        second:"balaji"
    },
};
dot notation
console.log(person1.name.first);
console.log(person1.name.second);
console.log(person1.name[0]);
console.log(person1.name[1]);


bracket notation
console.log(person1.name["first"]);
console.log(person1.name["second"]);



const person2 = {
    name: ["Bob", "Smith"],
    age: 32,
  };
  
  function logProperty(propertyName) {
    console.log(person2[propertyName]);
  }
  
  console.log(logProperty("name"));
  
 console.log(logProperty("age"));

object value changing

   person2.age=42
  console.log(person2.age);




const person1 = {
    name: "Chris",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };
console.log(person1.introduceSelf());

  const person2 = {
    name: "Deepti",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };
  
  console.log(person2.introduceSelf());


constructors
function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }

  const salva = new Person("Salva");
salva.name;
console.log(salva.introduceSelf());

const frankie = new Person("Frankie");
frankie.name;
console.log(frankie.introduceSelf());


//The prototype chain
const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
  console.log(myObject.greet()); 

  console.log(myObject.toString()); 

  console.log(Object.getPrototypeOf(myObject)); 



  