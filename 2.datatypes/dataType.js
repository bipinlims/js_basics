//!primitive datatypes
//* 1.number(int+float)
let a = 12;
let b = 12.3;
let sum = a + b;

//* 2.String
let name = "John Doe";
//* template literal (``)->back tik
console.log(`sum of a and b is:${sum} `)
let fullName = "John Doe"
console.log(`Full name is:${fullName}`);

//* 3.Boolean
let y = true;

//* 4.undefined
//-> js uses internally or uses while throwing error
// -> variable declared but not initialized or used
let x; //undefined

//* 5.null
let z = null;  // null
// -> intentionally created value null or empty

//* 6.bigint
//-> represents numbers larger than 2 the power of 53-1
let bigint = BigInt(2432435452454534);
let bigint1 = 223n;  //to represent bigint


//* 7. Symbol
// used to create a unique variable
//->every symbol is unique
const id1 = Symbol("id1");
const id2 = Symbol("id1");
let result = id1 === id2;  //output:false


//! Non primitive
// 1.object
// 2.array
// 3.function