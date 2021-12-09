// Assignment #55
let Ball = {
    weight: "15",
    color: "green",
    oil: "medium",
    drill: "fingertip",
    description : function() {
        return "The ball weighs " + this.weight + " it is " + this.color + " drilled as " + this.drill + " it is for " + this.oil + " oil pattern.";
    }
};
document.getElementById("Ball_Object").innerHTML = Ball.description();
// End of Assignment #55
// Function for Assignment #50 Loop
function Call_Loop() {
    var Digit = "";
    var A = 1;
    while (A < 11) {
        Digit += "<br>" + A;
        A++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
// End of function for Assignment #50 Loop
// Function for Assignment #51 'For Loop'
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute", "Clarinet", "Oboe", "Tuba"];
var Content = "";
var S;
function for_Loop() {
    for (S = 0; S < Instruments.length; S++) {
    Content += Instruments[S] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
// End of function for Assignment #51 'For Loop'
// Function for Assignment #52 'Array Function'
function array_Function() {
    var Music = [];
    Music[0] = "classical";
    Music[1] = "jazz";
    Music[2] = "hymns";
    Music[3] = "rock";
    document.getElementById("Array").innerHTML = "The music in this case is " +
        Music[2] + ".";
}
// End of function for Assignment #52 'Array Function'
// Function for Assignment #53 'Constant Function'
function constant_function(){
    const Video_Game = {console:"PC", genre:"RPG", game:"Final Fantasy"};
    Video_Game.console = "Xbox One";
    Video_Game.genre = "Sandbox";
    document.getElementById("Constant").innerHTML = "The game they played was on the " +
        Video_Game.console + " it was from the genre of " + Video_Game.genre + " and they played " +
        Video_Game.game;
}
// End of function for Assignment #53 'Constant Function'
// Assignment #54
let A = 13;
document.write("<br>" + A);
// End of Assignment #54
