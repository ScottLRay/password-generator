
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

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
  "x",
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

var password = [];

function generatePassword() {
//   var newArray = arr();
  var Password = [];
    for (var i = 0; i < array.length; i++) {
        var password = math.floor(math.random() * newArray.length - 1) + 1;
        passwword.push(newArry[randomindex]);
    }
    return password.join("");

  
}
function writePassword() {

// need to add prompts and confirms
var aNumber = window.prompt("how long to do want the password?")
    if(aNumber <8 || aNumber > 128){
        alert("please enter number 8 through 128");
        return;
    }
    else if (NaN){
        alert("please enter valid numbers")
        return;
    }
var upperCharactersQuestion = confirm("have upper case characters?")
var lowerCharactersQuestion = confirm("have low case characters?")
var specialCharactersQuestion = confirm("have special characters?")
var numberCharactersQuestion = confirm("have numbers?")

// if (upperCharactersQuestion){password.push(upperCharacter);
// }
// if (lowerCharactersQuestion){password.push(lowerCharacter);
// }
// if (specialCharactersQuestion){password.push(specialCharacter);
// }
// if (numberCharactersQuestion){password.push(numberCharacter);
// }
// else if(!upperCharacters && !lowerCharacters && !specialCharacters && !numberCharacters){
//     alert("please select at one character type")
// }
    var password = generatePassword();

    var passwordText = document.querySelector("#password");


passwordText.value = password;

}


var generateBtn = document.querySelector("#generate");

// // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
