// Operators start

// Arithmetic Operators start

let A, B, C;	// Addition(+) Operator
A = 5;        
B = 6;        
C = A + B;   
document.getElementById("Addition").innerHTML =
"The value of C is " + C + ".";

let x= 50;	// Subtraction(-) Operator
let y= 20;
let z= x - y;
document.getElementById("Subtraction").innerHTML =
"The value of z is " + z + ".";

let a= 5;	// Multiplication(*) Operator
let b= 20;
let c= a * b;
document.getElementById("Multiplication").innerHTML =
"The value of c is " + c + ".";

let X= 20;	// Exponentiation(**) Operator
let Y= 5;
let Z= X ** Y;
document.getElementById("Exponentiation").innerHTML =
"The value of Z is " + Z + ".";

let Xx= 20;	// Division(/) Operator
let Yy= 5;
let Zz= Xx / Yy;
document.getElementById("Division").innerHTML =  
"The value of Zz is " + Zz + ".";

let AA= 88;	// Modulus(%) Operator
let BB= 5;
let CC= AA % BB;
document.getElementById("Modulus").innerHTML =  
"The value of CC is " + CC + ".";

let xx= 88;	// Increment(++) Operator
++ xx;
let zz= xx;
document.getElementById("Increment").innerHTML =  
"The value of zz is " + zz + ".";

let aa= 77;	// decrement (--) Operator
aa --;
let bb = aa;
document.getElementById("decrement ").innerHTML =  
"The value of zz is " + bb + ".";

let aaa= (77 + 44) * 2;	// All Arithmetic (--) Operator
let bbb = aaa;
document.getElementById("Arithmetic").innerHTML =  
"The value of bbb is " + bbb + ".";

let abc= (77 + 44) / 2;	// ALL Arithmetic (--) Operator
let bcd = abc;
document.getElementById("Arithmetic2").innerHTML =  
"The value of abc is " + abc + ".";

// Arithmetic Operators end

// Assignment Operators

let abcd= 77;	// assignment Multiplication (--) Operator
abcd *= 5;
document.getElementById("assignment").innerHTML =  
"The value of abcd is " + abcd + ".";

let xyz= 77;	// assignment divides (--) Operator
xyz %= 5;
document.getElementById("assignment2").innerHTML =  
"The value of xyz is " + xyz + ".";

// Assignment Operators END

// Operators end

//  JavaScript Data Types START

let mehedi = 16 + 4 + "Volvo"; // Number String
document.getElementById("numString").innerHTML = mehedi;

let mehedi1 =  "Volvo"+ 16 + 4; // String Number
document.getElementById("NumString").innerHTML = mehedi1;

let fruits1= "mango"; //String
let fruits2= "banana"
let fruits3= 'pineapple'
document.getElementById("string").innerHTML = fruits1 +"<br>"+ fruits2 +"<br>"+ fruits3;

let x1 = 34.00;  //Number
let x2 = 34;
let x3 = 3.14;
document.getElementById("number").innerHTML =
x1 + "<br>" + x2 + "<br>" + x3;

let a1=6;	//Boolean data type
let b1=6;
let c1=8;
document.getElementById("boolean").innerHTML =
(a1==b1) + "<br>" + (b1==c1); //brackets must be

let hasan;	// Typeof data type
document.getElementById("typeof").innerHTML =
hasan + "<br>" + typeof hasan;

// JavaScript Data Types END  Functions

// JavaScript Functions start
	function myFunction( p1, p2)
	{
		return p1 * p2;
	}
	document.getElementById("functions").innerHTML= myFunction(10, 10);

	function sleep(name,time){
		return (name +" is sleeping from "+ time);
	}
	document.getElementById("functions2").innerHTML= 
	sleep("karim","8am.") + "<br>" + sleep("rohim","10am.") + "<br>" + sleep("hridoy","11am.");

	function toCelsius(f) {
  	return (5/9) * (f-32);
	}
	document.getElementById("functions3").innerHTML = toCelsius(77);

	function ToCelsius(f) {
  	
	}
	document.getElementById("functions4").innerHTML = ToCelsius();

// JavaScript Functions end

// JavaScript Object start
	
let car = "Fiat"; //let use object (car)= variable (Fiat)
document.getElementById("object").innerHTML = car;

// Create constant an object:
const cars = {type:"Fiat", model:"500", color:"white"};

// Display some data from the object showing dot(.):
document.getElementById("object1").innerHTML = "The car type is " + cars.type + "<br>" + "The car color is " + cars.color;

// Create constant an object indivisualy called:
const person = {
	firstName: "Mehedi",
	lastName:"Hasan", 
	age:"21",
	father:"Nurullah",
	mother:"Farmita"
};

// Display some data from the object showing third bracked[]:
document.getElementById("object2").innerHTML = "The Father type is " + person["father"] + "<br>" + "The Mother color is " + person["mother"];

const person1 = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    this.identaty();	// its statement- statement end always colon(;)
    return(this.firstName + " " + this.lastName); 
 	},
  identaty : function() {
    console.log (this.id); 
 	}
};
document.getElementById("object3").innerHTML= person1.fullName();// object function ()/method called

const person2 = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    this.identaty();	// its statement- statement end always colon(;)
    return(this.firstName + " " + this.lastName); 
 	},
  identaty : function() {
    console.log (this.id); 
 	}
};
document.getElementById("object4").innerHTML= person2.fullName; // object a function()/method call na dia ta result print na howa object print howasa.

let NUMBER=100;				// this is declear by type of number data
console.log(NUMBER);
console.log(typeof NUMBER);

let number1= new Number(500); // but this is declear by type of object data (v.i==besi dorkar chara ata use kora jaba nah because loaded)
console.log(number1);
console.log(typeof number1);

let string= new String("Mehedi Hasan"); // but this is declear by type of object data (v.i==besi dorkar chara ata use kora jaba nah because loaded)
console.log(string);
console.log(typeof string);
// JavaScript Object end

