function Ride_Function() { //creating the function "Ride_Function"
    var Height, Can_ride; //establishing the variables "Height" and "Can_ride"
    Height = document.getElementById("Height").value; //creating the command to pull the data entered in the "Height" input from the webpage
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //creating the equation to whether someone is tall enough to ride or not
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //finishing the command which results in the answer being displayed on the website
} //closing the function "Ride_Function"
function Bowler(Hand, BallWeight, BallSpeed, Step) { //creating the variables for the bowler
    this.Bowler_Hand = Hand //creating the variable for the hand the bowler uses
    this.Bowler_BallWeight = BallWeight //creating the variable for the weight of the ball
    this.Bowler_BallSpeed = BallSpeed //creating the variable for how fast the ball is thrown
    this.Bowler_Step = Step //creating the variable for how many steps the bowler takes to throw the ball
}
var Tom = new Bowler("Right", "16lb", "22mph", 4); //generating the variable for Tom
var Dick = new Bowler("Left", "12lb", "15mph", 5); //generating the variable for Dick
var Harry = new Bowler("Both", "10lb", "28mph", 3); //generating the variable for Harry
function NaTFunction() { //creating the function NaTFunction
    document.getElementById("New_and_This").innerHTML = //pushing the data to the placeholder on the webpage
    "Tom throws with his " + Tom.Bowler_Hand + "-hand, using a " + Tom.Bowler_BallWeight + " ball " + //providing data to display
    ", throwing it " + Tom.Bowler_BallSpeed + " down the lane, using " + Tom.Bowler_Step + " steps to generate the speed."; //continuing the data to be displayed
} //closing the NaTFunction function
function NestFunction() { //creating the NestFunction function
    document.getElementById("Nested_Function").innerHTML = Count(); //pushing the data to the placeholder on the webpage
    function Count() { //creating the Count function
        var Starting_point = 9; //creating the variable starting_point and giving it a value of 9
        function Plus_one() {Starting_point += 1;} //creating the function of Plus_one and finalizing it with the variable Starting_point
        Plus_one(); //initializing the Nested_Function
        return Starting_point; //moving the equation forward
    } //closing the Count function
} //closing the NestFunction function