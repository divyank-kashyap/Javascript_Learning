// Program to print sum upto n natural numbers 
let sum = 0
let n =  prompt("Enter number : ")
for (var i = 0; i<=n; i++){  // let has block level scope
    sum += i                 // but var has global scope
}
console.log(sum)
console.log(i)


// For in loop
let obj = {
    harry : 90,
    shubh : 45,
    shivika : 56,
    ritika : 57,
    shiv : 23
  }
  
  for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
  }

// For of loop

  for (let b of "Harry"){
    console.log(b)
  }
