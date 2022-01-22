// JavaScript Statements start.
let x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4
document.getElementById("demo").innerHTML =
"The value of z is " + z + ".";

document.getElementById("demo1").innerHTML = "Hello Dolly.";

let a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById("demo2").innerHTML = 
"The value of c is " + c + ".";
// JavaScript Statements end.

// JavaScript Syntax start
let e , f;
e = 6;
f= 8;
document.getElementById("assign").innerHTML = e + f;

document.getElementById("expression").innerHTML = 5 * 6;

document.getElementById("string").innerHTML = "Mehedi" + " "+ "Hridoy";
// JavaScript Syntax end

//Comment
//single line comment
console.log ("hello");
document.getElementById("singleLine").innerHTML = "Single-line Comments";
/*
this is showing only console;
this comment is using multi-line;
*/
document.getElementById("multiLine").innerHTML = "Multi-line Comments";
//Comment

//Variable start
var i = 5;
var j = 9;
var k = x + y;
document.getElementById("variable").innerHTML =
"The value of k is: "+ k;

var ami, tumi, amra;
ami ="Hridoy";
tumi= "Nayem";
amra= ami + tumi;
document.getElementById("variable2").innerHTML =
"The value of amra is: "+ amra;

let ab=10;
let bc=20;
let cd=50;
let ef=(cd - bc) + ab;
document.getElementById("let_variable").innerHTML="The value of ef is: "+ ef ;
// variable end

// let start
let hridoy= 10; // global scope
{
	let hridoy= 20; // block scope
	document.getElementById("let1").innerHTML= hridoy;
}
document.getElementById("let").innerHTML= hridoy;

let carName="VOLVO" // let-hosting
carName="VOLVO"
document.getElementById("let2").innerHTML= carName;

carsName="BMW"
let carsName="BMW" // let-hosting-kaj korbana because value assain undefine kora nah)
document.getElementById("let2").innerHTML= carsName;
// let end

// Constant Start

const cars=["BMW" , "VOLVO", "AUDI", "SAAB"];
cars [2]= "TOYOTA";
cars .push("Hero");
document.getElementById("Constant").innerHTML= cars;


// Constant end