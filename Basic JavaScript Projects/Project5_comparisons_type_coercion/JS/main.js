document.write(typeof "Word"); //placing the word "string" onto the webpage
function Nan() { //creating the function for NaN test
    document.getElementById("Nan").innerHTML = 0/0; //putting NaN onto the webpage through an equation that is not possible
} //closing the function for the NaN test
function True() { //creating the function for the True test
    document.getElementById("True").innerHTML = isNaN('this is a string'); //putting True onto the webpage through making a true statement using 'isNaN'
} //closing the function for the True test
function False() { //creatubg the function for the False test
    document.getElementById("False").innerHTML = isNaN('777'); //putting False onto the webpage by making a false statement using 'isNaN'
} //closing the function for the False test
document.write("<br><br>"); //creating a line break in-between the different .write codes
document.write(4E310); //writing infinity to the website
document.write("<br><br>"); //creating a line break in-between the different .write codes
document.write(-5E310); //writing negative infinity to the website
document.write("<br><br>"); //creating a line break in-between the different .write codes
document.write(11>3); //writing true on the website
document.write("<br><br>"); //creating a line break in-between the different .write codes
document.write(4>9); //writing false on the website
console.log(4 + 5); //utilizing the console log to display the addition of 4 and 5
document.write("<br><br>"); //creating a line break in-between the different .write codes
document.write("112" + 13); //creating the number 11213 using coercion coding
console.log("12" + 3<12 + 3) //producing the word false through boolean and coercion in the console log
document.write("<br><br>"); //creating a line break in-between the different .write codes
document.write(7==7); //generating a true statement through comparison
document.write("<br><br>"); //creating a line break in-between the different .write codes
document.write(5==7); //generating a false statement through comparison
document.write("<br><br>"); //creating a line break in-between the different .write codes
X=10 //setting the number 10 to the variable X
Y=10 //setting the number 10 to the variable Y
document.write(X===Y); //generating a true statement through comparison
document.write("<br><br>"); //creating a line break in-between the different .write codes
A='False' //setting False to the variable A
B='false' //setting false to the variable B
document.write(A===B); //generating a false statment through comparison
document.write("<br><br>"); //creating a line break in-between the different .write codes
C=9 //setting the number 9 to the variable C
D='FALSE' //setting FALSE to the variable D
document.write(C===D); //generating a false statement through the use of different types when comparing
document.write("<br><br>"); //creating a line break in-between the different .write codes
E='one' //setting one to the variable E
F=1 //setting the number 1 to the variable F
document.write(E===F); //generating a false statement throught use of the same value, with different types for comparison
document.write("<br><br>"); //creating a line break in-between the different .write codes
document.write(3<4 && 4<5); //generating a true statement through the 'and' comparison
document.write("<br><br>"); //creating a line break in-between the different .write codes
document.write(4>3 && 3>4); //generating a false statement through the 'and' comparison
document.write("<br><br>"); //creating a line break in-between the different .write codes
document.write(5>6 || 6>5); //generating a true statement throught the 'or' comparison
document.write("<br><br>"); //creating a line break in-between the different .write codes
document.write(7>8 || 6>7); //generating a false statment through the 'or' comparison
function Not1() { //creating a function for the Not1 test
    document.getElementById("Yes").innerHTML = !(13 > 9); //placing the False statement on the webpage due to the statement being true with a 'not' code
} //closing the function for the Not1 test
function Not2() { //creating a function for the Not2 test
    document.getElementById("No").innerHTML = !(6 > 18); //placing the True statement on the webpage due to statement being false with the 'not' code
} //closing the function for the Not2 test