// Constant Start (constant always upora likta hoi)

const cars = ["Saab", "Volvo", "BMW"]; //constrant arry
cars[0] = "Toyota";
cars.push("Audi");
document.getElementById("constant").innerHTML = cars;

const car = {color:"blue", model:"600.m"}; //constrant object

// Change a property:
car.color = "red";
// Change a property:
car.model = "700.b";

// Display the property:
document.getElementById("constant1").innerHTML = "The car model is " + car.model +"<br>" + "The car color is " + car.color; 

const number=500; //constant block scope
{
	const number=800;
	document.getElementById("constant2").innerHTML = "The number is " + number;
}
document.getElementById("constant2").innerHTML = "The number is " + number;

const car_Name = ["Saab","Volvo","BMW"];  //output showing value=0

document.getElementById("car_Name").innerHTML = car_Name[0];

// Constant end

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

//Comment start

//single line comment
console.log ("hello");
document.getElementById("singleLine").innerHTML = "Single-line Comments";
/*
this is showing only console;
this comment is using multi-line;
*/
document.getElementById("multiLine").innerHTML = "Multi-line Comments";

//Comment end

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

let carName="VOLVO" // let-hosting-work it
carName="VOLVO"
document.getElementById("let2").innerHTML= carName;

carsName="BMW"
let carsName="BMW" // let-hosting-Not work because value assain undefine kora nah)
document.getElementById("let2").innerHTML= carsName;

// let end

