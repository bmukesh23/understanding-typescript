"use strict";
// convert to more or less specific 
let a = 'hello';
let b = a; //less specific
let c = a; //more specific
// angle brackets
let d = 'world';
let e = 'world';
// examples
const addConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addConcat(2, 2, 'concat');
// 10 as string
10; // Double casting
// DOM
const img = document.getElementById('img');
img.src;
