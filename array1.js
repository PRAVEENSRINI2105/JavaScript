const fruits = [];
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6


copywithin

console.log([1, 2, 3, 4, 5].copyWithin(-2));


console.log([1, 2, 3, 4, 5].copyWithin(0, 3));


console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));


console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));


every function is used to find the number is in threshold or not
function isBigEnough(element, index, array) {
    return element >= 10;
  }
  console.log([12, 5, 8, 130, 44].every(isBigEnough)); 
  console.log([12, 54, 18, 130, 44].every(isBigEnough)); 
  

Check the array is a subset of another array
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); 
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); 


every() is used to identifies the element in array is same or not
console.log([1, , 3].every((x) => x !== undefined)); 
console.log([2, , 2].every((x) => x === 2)); 


Entries is used to iterate
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);

console.log(iterator1.next().value);


fill method is used to fill the number throughout the array
const array1 = [1, 2, 3, 4];

console.log(array1.fill(0, 2, 4));


console.log(array1.fill(5, 1));


console.log(array1.fill(6));


find method is used to find the element and print the first element
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

find method is used to find the element and print the first index position
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));

findlast is used to find the element and print the first index element and checks from last
const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);

findLastIndex() is used to find the index and print the first index position and checks from last
const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));

flat() method creates new array and print the element in the array and subarray
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());


const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));

flatmap method first map and then flat it creates new array and print the element in the array and subarray
const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => num);

console.log(flattened);

for each() is itearte through an element and print the separate array element
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

from method makes a hallow-copied Array instance from an iterable
console.log(Array.from('foo'));

console.log(Array.from([1, 2, 3], x => x + x));

isarray() is used to check whether it is an array or not
console.log(Array.isArray([1, 3, 5]));


console.log(Array.isArray('[]'));


console.log(Array.isArray(new Array(5)));


console.log(Array.isArray(new Int16Array([15, 33])));

keys() method gives an array index
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);

Array.of() is used to make an array
console.log(Array.of('foo', 2, 'bar', true));

console.log(Array.of());

reduce() is used to reduce a complex method into simple
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

reduceRight() is used to reduce a complex method into simple from the right side
const array1 = [[0, 1], [2, 3], [4, 5]];

const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(result);

some() method is used to find an atleast one element is passes the condition or not
const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;

console.log(array.some(even));

