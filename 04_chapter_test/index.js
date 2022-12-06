// Q1 : Create a variable of type string and try to add a number to it 

let variable1 = 'Divyank'
let variable2 = 2
console.log(variable1 + variable2)

// Q2 :  Use typeof operator to find the datatype of the string in last question

console.log("Datatype of variable1 is : " + typeof (variable1 + variable2))


// Q3 : Create a const object in javascript. Can you change it to hold a number later?

const object1 = {
  name : "Divyank",
  section : 1,
  isPrinciple : false
}
// object1 = 5
// No


// Q4 : Try to add a new to key to the const object in problem 3. Were uou able to do it?
object1['Friend'] = "Akshay"
object1['name'] = 'Ankit'
console.log(object1)
//yes


// Q5 : Write a Js program to create a word-meaning dictionary of 2 words

const dict = {
  appreciate : "recogize the full worth of.",
  ataraxia : "a state of freedom from emotional disturbances and anxiety"
}

console.log(dict.appreciate)