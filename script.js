// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var lowCharacters = [
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

var aNumber = ""

// Retrieve a reference to the button with an id of generate
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  password = password.slice(0, aNumber)
  passwordText.value = password;
}

function generatePassword() {
  // Prompt user for password length
   // Make sure that password length between 8 and 128(inclusive)
  aNumber = window.prompt("how long to do want the password?");
    if (aNumber < 8 || aNumber > 128) {
      alert("please enter number 8 through 128");
      return;
    } else if (NaN) {
      alert("please enter valid numbers");
      return;
    }

  //   Using a confirm prompt the user for special characters
  var specialCharactersQuestion = confirm("have special characters?");
  //   Using a confirm prompt the user for numeric characters
  var numberCharactersQuestion = confirm("have numbers?");
  //   Using a confirm prompt the user for uppercase characters
  var upperCharactersQuestion = confirm("have upper case characters?");
  //   Using a confirm prompt the user for lowercase characters
  var lowCharactersQuestion = confirm("have low case characters?");
  // Algo for password generation goes below
  var password = "";

  for (var i = 0; i < aNumber; i++){
    if(specialCharactersQuestion === true){
      password += getRandomItem(specialCharacters)
    }
    if(numberCharactersQuestion === true){
      password += getRandomItem(numberCharacters)
    }
    if(upperCharactersQuestion === true){
      password += getRandomItem(upperCharacters)
    }
    if(lowCharactersQuestion === true){
      password += getRandomItem(lowCharacters)
    }}
  // return the build password
  return(password);
}

// Retrieve a random item from the provided array
function getRandomItem(arr) {
  // Generate a random index from 0 to the length - 1 of our array
  var randomIndex = Math.random() * arr.length;
  // round down our random index
  randomIndex = Math.floor(randomIndex);
  // return the random item based off of our random index
  console.log(getRandomItem)
  return arr[randomIndex];
}
