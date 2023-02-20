// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// indicating all of the possible characters the user can include in password 
var possibleUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var possibleLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var possibleNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var possibleSpecialChar = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// setting variables to hold possible characters indicated by user
var userAnswers = [];
var userCharset = [];
// prompts for setting password parameters 
  var passwordLength = prompt ("How long do you want your password to be? (Enter number between 8 and 128 characters)");
  var numbersPrompt = confirm ("Do you want to include numbers in your password?");
  var uppercaseLetters = confirm ("Do you want to include uppercase letters in your password?");
  var lowercaseLetters = confirm ("Do you want to include lowercase letters in your password?");
  var specialCharacters = confirm ("Do you want to include special characters in your password?");


// setting conditions for the user generated password
if (numbersPrompt){
  userAnswers = userAnswers.concat(possibleNumbers);
  
}

if (uppercaseLetters){
  userAnswers = userAnswers.concat(possibleUppercase);

}

if (lowercaseLetters){
  userAnswers = userAnswers.concat(possibleLowercase);

}

if (specialCharacters){
  userAnswers = userAnswers.concat(possibleSpecialChar);
}
console.log(userAnswers)


for (var i = 0; i < passwordLength; i++) {
      
  userCharset.push (userAnswers[Math.floor(Math.random() * userAnswers.length)]); 
  }

  return userCharset.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
