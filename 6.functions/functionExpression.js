//*function stored in a variable and that can be used as a function call
//?eg.1
const add = function () {
    return 2 + 3;
}
console.log(add());

//?eg.2
const evenNumber = function (n) {
    if (n % 2 === 0) {
        return "even number";
    } else {
        return "odd number";
    }
}
console.log(evenNumber(40));

//? eg.3
const multi = function (a, b) {
    return a * b;
}
const multi1 = multi(4, 5);
console.log(multi1);
console.log(multi(2, 3));