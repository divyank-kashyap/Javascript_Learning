function avg(x, y){
    return (x + y)/2
}

const hello = ()=>{
    console.log("Hey How are you. I am fine yaar")
    return "Hiii "

}
const sum = (p, q)=>{
    return p + q
}

let a = 1;
let b = 2;
let c = 3;
let v = hello()

console.log("Average of a and b is ",  (a + b)/2)
console.log("Average of a and b is ",  (b + c)/2)
console.log("Average of a and b is ",  (c + a)/2)

console.log(avg(a, b)) 
console.log(avg(b, c)) 
console.log(avg(c, a)) 

console.log(sum(9, 7))

hello()
console.log(v)