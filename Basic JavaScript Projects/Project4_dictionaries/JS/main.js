function Dictionary() { //creating a dictionary for webpage
    var Animal = { //creating the variable to be defined
        Species:"Cat", //defining the variable's species
        Color:"Orange", //defining the color
        Breed:"Toyger", //defining the breed
        Age:8, //providing an age
        Sound:"Meow!" //providing the sound it uses
    }; //closing the definition of the variable
    delete Animal.Sound; //deleting the definition for Sound from the Animal variable
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //placing the defined variable's sound onto the website
} //closing the dictionary for the webpage