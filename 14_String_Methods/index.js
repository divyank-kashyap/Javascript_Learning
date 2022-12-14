// Strings are immutable 

let name = "Harry"
console.log(name.length)        // property

console.log(name.toUpperCase())     // function
console.log(name.toLowerCase())
console.log(name.slice(2,4))
console.log(name.slice(2))
console.log(name.replace("Har", "Per"))

let friend = "Naman"
console.log(name.concat("is a friend of "+ friend))
let friend2 = "         Meena"
console.log(friend2)
console.log(friend2.trim())     // removes spaces from starting and end

let fr = "Shivika"
fr[0] = "H"     // This is not possible 
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])

// Quick quiz : Use a for loop to print a string 
let name2 = "Divyank"
for (let i = 0; i<name2.length; i++){
    console.log(name2[i])
}


