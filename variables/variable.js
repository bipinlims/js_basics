//1.var
//2.let
//3.const
//* 3major differences
// a)declarations
// b)hoisting
// c)scope


//*variable declarations and initialization

var a; // variable declaration
a=5;   // variable initialization

let k;  // variable declaration
k=3; // variable initialization

const j=4;  //const must be declared and initialized in one line

// 1.VAR ->same name of multiple variables can be declared
var a = 10; 
console.log(a); //printing value of a  output:10

var a = 19;
console.log(a)  //output:19
//*DONT USE VAR

// 2.LET  -> same name of multiple variables can not be created but can be re assign value 
let b = 20;
console.log(b);
b = 30;
console.log(b);

//3.CONST -> used for const value, cant reassign and rename variable
const c = 20;
console.log(c);