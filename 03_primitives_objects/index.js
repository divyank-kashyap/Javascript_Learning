// nn bb ss u

let a = null
let b = 345;
let c = true;   // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g = undefined    // let g   is same 

console.log(a, b, c, d, e, f, g)
console.log(typeof d)


// Non Primitive Data Type - Objects in Js (is used to define key-value pairs like dictionary in python ;))
const item = {
    "Harry" : true,
    "Shubh" : false,
    "Lovish" : 67,
    "Rohan" : undefined
}

console.log(item["Harry"])