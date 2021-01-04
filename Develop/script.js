//define valid characters for password as global variables
var validChar = "0123456789abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]/^_`{|}~" 
//https://owasp.org/www-community/password-special-characters


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //var passwordLength = window.prompt("Choose a number between 8 and 128 for your password length");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria
window.alert("Welcome to Erika's password generator!");
//WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
window.prompt("Please choose a number between 8 and 128 for your password length");

// WHEN prompted for password criteria THEN I select which criteria to include in the password
// WHEN prompted for the length of the password THEN I select which criteria to include in the password

// WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered THEN a password is generated that matches the selected criteria
// WHEN the password is generated THEN the password is either displayed in an alert or written to the page