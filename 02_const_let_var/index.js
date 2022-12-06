console.log("Javascript 02_const_let_var ")

var a = 45;   // var is globally scoped
var a = 10;    // var can be redeclare
var b = "Harry";
var c = null;
var d = undefined;
let e = "Harry";
const  author = "Harry"    // constant cannot be changed
// const harry;       this will throw error.. assign it some value


console.log(b)
{
  let e = 'this'  // blocked scoped
  //  let e = 30   error 
  console.log(e)
}
console.log(e)