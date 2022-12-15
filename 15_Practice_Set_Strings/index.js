// Q1 : What will the following print in javascript?
//      console.log("har\"".length)

console.log("har\"".length)

// Q2 : Explore the includes, startsWith & endsWith functions of a string

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = 'fox';
console.log(sentence.includes(word))
console.log(sentence.includes("fox"))   // includes()
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

console.log(sentence.endsWith("dog."))  // endsWith()
console.log(sentence.startsWith("The")) // startsWith()
// Q3 : Write a program to convert a given string to lowercase

sentence1 = sentence.toLowerCase()
console.log(sentence1)


// Q4 : Extract the amount out of this string 
        // "Please give Rs 1000"

let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)


// Q5 : Try the change 4th character of a given string.
// Were you able to do it?

let friend = "Deepika"
friend[3] = "R"
console.log(friend)     // friend is not changed, because string is immutable