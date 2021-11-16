function addition_Function() { //a function for addition
    var addition = 3 + 4; //the variables to be added
    document.getElementById("Math").innerHTML = "3 + 4 = " + addition; //putting the equation onto the website
}

function subtraction_Function() { //a function for subtraction
    var subtraction = 7 - 2; //the variables to be subtracted
    document.getElementById("Math2").innerHTML = "7 - 2 = " + subtraction; //putting the equation onto the website
}

function multiplication_Function() { //a function for multiplication
    var multiplication = 5 * 6; //the variables to be multiplied
    document.getElementById("Math3").innerHTML = "5 * 6 = " + multiplication; //putting the equation onto the website
}

function division_Function() { //a function for division
    var divide = 30 / 10; //the variables to be divided
    document.getElementById("Math4").innerHTML = "30 / 10 = " + divide; //putting the equation onto the website
}

function cycle_Function() { //a function for +-*/
    var MATH = ((3 + 4 - 2)*6) / 10; //the variables to be used
    document.getElementById("MATH").innerHTML = "3 + 4 = 7 - 2 = 5 * 6 = 30 / 10 = " + MATH; //putting the equation onto the website
}

function modulus_Operator() { //a function to provide a remainder
    var remainder = 4 % 3; //the variables used to determine the remainder
    document.getElementById("Leftovers").innerHTML = "when you divide 4 by 3 you have a remainder of: " + remainder; //putting the remainder onto the website
}

function negation_Operator() { //a function to provide a negative number
    var s = 7; //the variable used to create the negative number
    document.getElementById("Negate").innerHTML = -s; //putting the negative number onto the website
}

var X = 8; //providing a variable
X++; //increasing the variable by an increment
document.write(X); //putting the increased variable onto the website

var Y = 7.3; //providing a variable
Y--; //decreasing the variable by an increment
document.write(Y); //putting the decreased variable onto the website

window.alert(Math.random()); //putting a random number onto the website

document.write(Math.PI); //putting PI onto the website

document.write(Math.round(5.89)); //rounding up 5.89 to the nearest full integer and placing that onto the website

