type One = string
type Two = string | number;
type Three = 'hello'

// convert to more or less specific 
let a: One = 'hello'
let b = a as Two //less specific
let c = a as Three //more specific


// angle brackets
let d = <One>'world'
let e = <Two>'world'

// examples
const addConcat = (a: number, b: number, c: 'add' | 'concat') => {
    if(c === 'add') return a + b;
    return '' + a + b;
}

let myVal: string = addConcat(2, 2, 'concat') as string;


// 10 as string
(10 as unknown) as string;  // Double casting


// DOM
const img = document.getElementById('img') as HTMLImageElement
img.src
