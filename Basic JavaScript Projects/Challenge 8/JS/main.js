function Age_Function() {
    var Age, Verify;
    Age = document.getElementById("Age").value;
    Verify = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Verify").innerHTML = Verify + " to vote.";
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Eric drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    ", manufactured in " + Erik.Vehicle_Year;
}