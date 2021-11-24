function assignment_44() { //creating the function for assignment 44, concat
    var A = "This is "; //creating variable A
    var B = "a sentence "; //creating variable B
    var C = "for assignment"; //creating variable C
    var D = " 44."; //creating variable D
    var sentence = A.concat(B,C,D); //giving the command to combine A, B, C, and D variables
    document.getElementById("Assignment_44").innerHTML = sentence; //pushing the assignment to the webpage
} //closing the function for assignment 44
function assignment_45() { //creating the function for assignment 45, sentence slice
    var Sentence = "This sentence is for Assignment 45."; //creating the variable Sentence
    var Section = Sentence.slice(21,35); //establishing the part of the sentence to be sliced
    document.getElementById("Assignment_45").innerHTML = Section; //pushing the assignment to the webpage
} //closing the function for assignment 45
function challenge_10a() { //opening the function for challenge 10a, toUppercase()
    let text = "Challenge # 10b"; //creating the text to be modified
    let result = text.toUpperCase(); //giving the command to modify
    document.getElementById("Challenge_10a").innerHTML = result; //pushing the modified text to the webpage
} //closing the function for challenge 10a
function challenge_10b() { //creating the function for challenge 10b, position of text
    let text = "This is for the Challenge # 10b, for this."; //giving the text to be searched
    let position = text.search("this"); //creating the parameters for the search 
    document.getElementById("Challenge_10b").innerHTML = position; //pushing the position to the webpage
} //closing the function for challenge 10b
function assignment_46() { //creating a function for assignment 46, toString()
    var S = 70; //creating a variable S to apply the toString() to
    document.getElementById("Assignment_46").innerHTML = S.toString(); //placing the toString() affected S variable on the webpage
} //closing the function for assignment 46
function assignment_47() { //opening the assignment 47 function, toPrecision()
    var A = 13579.02468; //providing the varialbe A to be modified
    document.getElementById("Assignment_47").innerHTML = A.toPrecision(100); //pushing the modified variable to the webpage
} //closingthe function for assignment 47
function challenge_11a() { //creating function for challenge 11a, toFixed()
    let num = 8.95867; //establishing variable num and defining it
    let n = num.toFixed(3); //creating command to modify num into variable n
    document.getElementById("Challenge_11a").innerHTML = n; //placing the new variable, n, onto the webpage
} //closing the function for 11a
function challenge_11b() { //opening the function for challenge 11b, valueOf()
    let num = 12; //creating the num variable and defining it
    let n = num.valueOf(); //modifying the variable into the new variable n
    document.getElementById("Challenge_11b").innerHTML = n; //placing the variable n onto the webpage
} //closing the function for challenge 11b