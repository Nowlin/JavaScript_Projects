function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " has a " + character.innerHTML + " character trait!");
}