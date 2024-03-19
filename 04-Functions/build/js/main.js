"use strict";
// literal types
let myName;
let userName;
userName = 'Amy';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
let subtract = (c, d) => {
    return c - d;
};
let multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters 
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(3, 4, 3));
// never for never executing output eg: TLE
const createError = (errMsg) => {
    throw new Error(errMsg);
};
