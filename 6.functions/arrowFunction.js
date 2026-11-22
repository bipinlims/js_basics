//* eg.1
const value = () => {
    return "value"
}
const val = value();
console.log(val);

//*eg.2
const sub = (a, b) => {
    return a - b;
}
const sub1 = sub(21, 7);
console.log(sub1);

//*eg.3 calculate radius of circle
const area = (r) => {
    return Math.PI * r * r;
}
const area1 = area(4);
console.log(area1);

//? this operator
//* arrow function do not have own this value
//*they inherit this value from surroundings
const name = {
    fName: 'John',
    getName: function getName() {
        return this.fName;
    }
}
console.log(name.getName());