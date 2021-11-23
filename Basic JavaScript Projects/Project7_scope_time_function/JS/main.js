var A = 7;
function Add_numbers_1() {
    document.write(70 + A + "<br>");
}
function Add_numbers_2() {
    var B = 7;
    document.write(770 + B);
}
Add_numbers_1();
Add_numbers_2();
function Greeting(){
    if (new Date().getHours() < 23) {
    document.getElementById("Hello").innerHTML = "Well, howdy partner!";
    }
}
if (6 < 7) {
    document.write("<br>","six is less than seven, ya dig?");
}
function Color_Function() {
    Color = document.getElementById("Color").value;
    if (Color == "green") {
        Favorite = "You have an awesome favorite color!";
    }
    else if (Color == "Green") {
        Favorite = "You have an awesome favorite color!";
    }
    else {
        Favorite = "Green should be your favorite color.";
    }
    document.getElementById("What_is_your_favorite_color?").innerHTML = Favorite;
}
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}