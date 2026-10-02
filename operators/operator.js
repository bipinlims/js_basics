//**Operators always returns result */
//! Arithmetic operator
//-> mathematical operators +,-,*,/,
//** + operator is overloaded in js 1.to sum numbers 2. to concat string */
let sum = 3 + 4;
console.log(sum);

let division = 14 / 3.;
console.log(division.toFixed(2));  //toFixed gives numbers behind dot


//! Assignment operator
//-> =,+=,-=,*=,/=
let i = 2;
let j = 3;
i += j;  //output :5
i += 10;
console.log(i)  //output:15


//! Comparison operator
//-> gives output in boolean ==,===,<,>,<=,>=,!=, !==
let compOp1 = 12;
let compOp2 = 12;
console.log(compOp1 == compOp2);
console.log(compOp1 === compOp2);
//another eg
let compOp3 = 12;
let compOp4 = "12";
console.log(compOp1 == compOp2);  //==compares only value => applies type coercion
console.log(compOp3 === compOp4);  //=== compares both value and datatype => do not applies type coercion


//! Logical operator
//->gives output in boolean: true or false
//->AND:&&,OR:||,NOT:!


//! Unary operator
//-> preincrement: ++a, postincrement: a++, post decrement :a--, predecrement:--a
let value = 12;
++value;
console.log(value); //output:13
value--;
console.log(value); //output:12
--value;
console.log(value); //output:11
console.log(value--); //output:11
console.log(--value); //output:9


//! Ternary operator
let age = 20;
let result = null;
if (age >= 18) {
    console.log("adult");
    result = "adult";
} else {
    console.log("minor");
    result = "minor";
}

//using ternary operator
//-> is a short hand or single line code  of if-else statement
let age1 = 12;
let result1 = age1 >= 18 ? "adult" : "minor";  // here : represents else
console.log(result1);


//! Typeof
//->returns the datatype of variable
console.log(typeof (result1));  //output:string
console.log(typeof (age1));  //output:number
console.log(typeof (null));  //output:object
console.log(typeof (undefined));  //output:undefined


//!type conversion
//->explicit conversion
console.log(Number('1232'));
console.log(Number('abcd'));  //output:NaN->not a number
console.log(typeof String(34422));
//->implicit conversion-> type coercion

//! Type coercion
//->automatic data conversion of values from one data type to another
console.log("10" + 10);  //output:1010
console.log(10 + 10);  //output:20
console.log("10" - 1);  //output:9
console.log("sad10" - 1);  //output:NaN

//! Bitwise operator
console.log(2 & 1); //output:0
//2=010
//1=001
//  000->0


//!truthy and falsy value
//->values that are evaluated true when used as boolean
// eg?
if (10) {
    console.log("this is truthy value")
}

//->values that are evaluated false when used as boolean
// eg
if (0) {
    console.log("this is falsy value");
}
//** falsy values are = 0, -0,"", false, null, undefined, NaN*/

console.log("")  //output:false
console.log(0)  //output:false
console.log(-0)  //output:false
console.log(" ")  //output:true
console.log({})  //output:true ->object are truthy
console.log([])  //output:true -> array is truthy
