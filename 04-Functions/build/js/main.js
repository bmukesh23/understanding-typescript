"use strict";
// Array
let sarr = ['john', 'dave', 'mukesh'];
let snarr = ['Strat', 'Les Paul', 5676];
let mixedData = ['EVH', 1984, true];
sarr[0] = 'Daniel';
sarr.push('Tyler');
snarr[0] = 1984;
snarr.unshift('You');
// array data defining
let test = [];
let bands = [];
bands.push(45);
// tuples
let myTuple = ['Dave', 45, false];
let mixed = ['John', 198, true];
// mixed = myTuple; mixed agree mytuple because mixed is a union array.
// myTuple = mixed; mytuple is a fixed defined array and it wont accept any other type of arrays.
myTuple[1] = 43;
// Objects
let myObj;
myObj = [];
// let myObj: object = []
console.log(typeof myObj);
myObj = bands;
myObj = {};
// object infered the object 'exampleObj' by user inputs.
const exampleObj = {
    prop1: 'Dave',
    prop2: 'true',
};
exampleObj.prop1 = 'you';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [4545, 'john'],
};
let jp = {
    name: 'Dave',
    active: true,
    albums: [634, 'you', 8759],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
})(Grade || (Grade = {}));
console.log(Grade.A);
