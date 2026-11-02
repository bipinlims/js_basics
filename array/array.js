//! stores multiple element in a single variable in list formate  array-> list
//? data of array are called elements
//? new keyword/array constructor
let array = new Array()   // returns empty array
//? array literal
const arr = [];  // returns empty array

let array1 = new Array(2); //-> gives length of two
let numbers = [1, 23, 43, 3, 23, 435]
//? reading elements
console.log(numbers[2]);
console.log(numbers.length);

//? adding elements in array
//*push() ->adds elements from last index
numbers.push(12);  // is a function that returns the length of array ,
numbers.push(12, 12, 12);
console.log(numbers);

//*unshift() -> adds elements from start
numbers.unshift(0, 1);
console.log(numbers);

//*pop()->removes one elements from last index
//! returns removed element
numbers.pop();
console.log(numbers);

//*shift()->removes element from zero index
numbers.shift();
console.log(numbers);

//*splice()->(start_index, delete_count,...items)
numbers.splice(1, 2);
console.log(numbers);
numbers.splice(1, 0, 1, 2);
console.log(numbers);

//*includes()-> returns true if it finds value and false when it does not find
let fruits = ["apple", "Mango"];
console.log(fruits.includes("apple"));  //output: true
console.log(fruits.includes("Orange")); //output: false

//*indexOf()-> returns first index in which a string or substring can be found and -1 if not found
let text = "hello Mr John"
console.log(text.indexOf("Mr"));   //output:6
console.log(text.indexOf("Mr,14")); //output:-1 not found

//*lastIndexOf()->opposite of indexOf()
let text1 = "hello Mr John"
console.log(text1.lastIndexOf("Mr"));   //output:6
console.log(text1.lastIndexOf("Mrs"));   //output:-1 not found
