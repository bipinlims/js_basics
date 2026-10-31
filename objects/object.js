//? object is data structure used to store multiple values of object in a variable in key value pair


//normal way to store value
let id0 = 0;
let name0 = "john";
let email0 = "hogn@gmail.com";
let contact = 98765566;

//? two types of object
//*new keyword/object constructor
const obj = new Object();  //returns empty object {}
//*object literal
const obj1 = {};   // returns empty object {}
//{key:value,key:value}  //! here key must be string and value can be any data type
//storing value using object
const user = {
    id: 1,
    name: 'john doe',
    email: "john123gmail.com",
    contact: 9872767,
    password: 12312
}
console.log(user);
//* accessing user properties
//? dot notation
const userName = user.name;
console.log(userName);   //output:john doe
console.log(user.contact); //output:9872767

//? bracket notation
const userName1 = user['name'];
console.log(userName1);    //output:john doe
console.log(user['email'])  //output:john123gmail.com

//! dynamic key

const keyToRead = "password";
// console.log(user.keyToRead)  // gives error
console.log(user[keyToRead]);
// console.log(user["keyToRead"]);

//* adding new properties to object
//? dot notation
user.address = "Ktm";

//? bracket notation
user.phone = 98342344;
console.log(user);

//*modifying properties
//?dot notation
user.phone = 98;
//?bracket notation
user.address = "Nepal";
console.log(user);

//*deleting properties
delete user.phone;
console.log(user);

//*keys
console.log(Object.keys(user));

//*values

console.log(Object.values(user));

//*entries
console.log(Object.entries(user));
let a = [
    ['id', 1],
    ['name', 'john doe'],
    ['email', 'john123gmail.com'],
    ['contact', 9872767],
    ['password', 12312],
    ['address', 'Nepal']
]

//*fromEntries
console.log(Object.fromEntries(a));

//*Seal
//Object.Seal() prevents from modifying , adding,deleting values

//*freeze
//Object.freeze() allows modifying existing values