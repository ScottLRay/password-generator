
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var lowcharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "y",
  "z",
];
var upperCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
var randompassword = [];

function generatePassword(arr, number) {
  var newArray = arr.flat();
  var newPassword = [];
    for (var i = 0; i < array.length; i++) {
        var randomIndex = math.floor(math.random() * new Array.length - 1) + 1;
        passwword.push(newArry[randomindex]);
    }
    return password.join("");

  
}
function writePassword() {

// need to add prompts and confirms
var aNumber = number(window.prompt("how long to do want the password?"))
    if(aNumber <8 || aNumber > 128){
        alert("please enter number 8 through 128");
        return;
    }
    else if (NaN(numberofcharacters)){
        alert("please enter valid numbers")
        return;
    }
var upperCharactersQuestion = windows.confirm("have upper case characters?")
var lowerCharactersQuestion = windows.confirm("have low case characters?")
var specialCharactersQuestion = windows.confirm("have special characters?")
var numberCharactersQuestion = windows.confirm("have numbers?")

if (upperCharactersQuestion){randompassword.push(upperCharacter);
}
if (lowerCharactersQuestion){randompassword.push(lowerCharacter);
}
if (specialCharactersQuestion){randompassword.push(specialCharacter);
}
if (numberCharactersQuestion){randompassword.push(numberCharacter);
}
else if(!upperCharacters && !lowerCharacters && !specialCharacters && !numberCharacters){
    alert("please select at one character type")
}
    var password = generatePassword();

    var passwordText = document.querySelector("#password");


passwordText.value = password;

}


var generateBtn = document.querySelector("#generate");

// // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
