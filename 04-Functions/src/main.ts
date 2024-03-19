// literal types
let myName: 'Dave'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'

// functions
const add = (a: number, b: number): number => {
    return a + b;
}

const logMsg = (message: any): void => {
    console.log(message);
}

logMsg('Hello!');
logMsg(add(2, 3));

let subtract = (c: number, d: number): number => {
    return c - d;
}

interface mathFunction {
    (a: number, b: number): number
}

let multiply: mathFunction = (c, d) => {
    return c * d;
}

logMsg(multiply(2, 2));


// optional parameters 
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b;
}

logMsg(addAll(3,4,3));

// never for never executing output eg: TLE
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}