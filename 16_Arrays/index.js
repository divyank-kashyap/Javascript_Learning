let marks_class_12 = [91, 82, 63, 84, false, "Not present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])  // will be undefined, because index 6 does not exist

console.log("The length of marks_class_12 is :", marks_class_12.length)

marks_class_12[6] = 89  // Addind a new value to the array
marks_class_12[0] = 96  // Changing the vaalue of an array

console.log(marks_class_12)
console.log(typeof marks_class_12)

// Traversing all elements of array using for loop
console.log("\n // Traversing all elements of an array using for loop ") 
for (let i = 0; i<marks_class_12.length; i++){
    console.log(marks_class_12[i])
}


