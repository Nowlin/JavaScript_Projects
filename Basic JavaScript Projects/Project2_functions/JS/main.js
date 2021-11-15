function Colors() {
    var str = "This text has a color!"
    var result = str.fontcolor("darkgreen")
    document.getElementById("Color_Text").innerHTML = result;
}

function CLICK_ME() {
    var sentence = "Here is the Time!"
    sentence += " Don't waste it!"
    document.getElementById("message").innerHTML = sentence;
}
