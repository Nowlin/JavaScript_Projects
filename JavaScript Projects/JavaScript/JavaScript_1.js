// Assignment #56
function Green() {
    var Green_Output;
    var Greens = document.getElementById("GREEN").value;
    var Green_String = " is a great color!";
    switch(Greens) {
        case "Green":
            Green_Output = "Green" + Green_String;
        break;
        case "Light Green":
            Green_Output = "Light Green" + Green_String;
        break;
        case "Dark Green":
            Green_Output = "Dark Green" + Green_String;
        break;
        case "Forest Green":
            Green_Output = "Forest Green" + Green_String;
        break;
        case "Emerald Green":
            Green_Output = "Emerald Green" + Green_String;
        break;
        default:
        Green_Output = "Please enter a color exactly as written in the list above.";
    }
    document.getElementById("Yeah").innerHTML = Green_Output;
}
// End of Assignment #56
// Assignment #57
function Dude_Function() {
    var D = document.getElementsByClassName("Dude");
    D[0].innerHTML = "We been changed";
}
// End of Assignment #57
