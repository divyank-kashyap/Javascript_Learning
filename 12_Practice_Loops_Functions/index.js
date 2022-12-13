// Q1 : Write a program to print the marks of a student in an object using for loop
obj = {harry : 98, rohan : 70, aakash : 7}
let marks = {harry : 98, rohan : 70, aakash : 7}

for (let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of ", Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}


// Q2 : Write the program in Q1 using for in loop
for (let a in marks){
    console.log("Marks of ", a, " = ", marks[a])
    a++
}

// Q3 :  Write a program to print "try again" until the user enters the corrent number 

let orgNum = 10
let guessNum 
while (guessNum != orgNum){
  console.log("Try Again")
  guessNum = prompt("Enter number : ")
}
console.log("You have entered a correct number")

// Q4 : Write a function to find mean of 5 numbers 

/*
function mean(a, b, c, d, e){
  return (a+b+c+d+e)/5
}
*/
const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5
  }
  
  let num1 = 10, num2 = 20, num3 = 30, num4 = 40, num5 = 50
  
  console.log(mean(num1, num2, num3, num4, num5))