// Array Methods
let num = [1, 2, 3, 34, 4]
let b = num.toString()      // b is now a string 
console.log(b)
console.log(typeof b)

let c = num.join("_")
console.log(c, typeof c)

let pop1 = num.pop()   // pop removes the last element
console.log(num, pop1)

let push1 = num.push(56)   // push adds the element in the end 
console.log(num, push1)

let shift1 = num.shift()    // shift removes the first element
console.log(shift1, num)     

let unshift1 = num.unshift(71)  // unshift add element in the starting
console.log(unshift1, num)

