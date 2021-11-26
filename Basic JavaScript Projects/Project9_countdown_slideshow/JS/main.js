function Count() { //creating function for counter exercise
    var seconds = document.getElementById("seconds").value; //grabbing the input from the webpage and placing into function

    function tick() { //creating the function to count down the seconds
        seconds = seconds - 1; //inputing the command to begin the countdown
        time.innerHTML = seconds; //placing the countdown onto the webpage
        setTimeout(tick, 1000); //creating the command for how long the program waits between each count
    if(seconds == -1) { //an if statement that affects the timer once it reaces -1
        alert("Out of time!"); //creating the message to be displayed when the if statement is true
    } //closing the if statement
    } //closing the tick function
    tick(); //creating the loop for the tick function
} //closing the count function

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}