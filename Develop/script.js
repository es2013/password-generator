
// Assignment code here

//defining valid characters for password as global variables - previously tried arrays but got too many commas in the pw
var numString = "012345678"  //['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerString = "abcdefghijklmnopqrstuvwxyz "//['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z',];
var upperString = lowerString.toUpperCase //['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z',];
var specialString =  "!#$%&'()*+-./:;<=>?@[\^_`{|}~"; //['!', '#', '$', '%', '&', '/', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '/', '^', '_', '`', '{', '|', '}', '~']; //https://owasp.org/www-community/password-special-characters


//define generatePassword tht is called in writePassword()
function generatePassword() {
  passwordToken = '';
  eligibleString = '';
  //WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = window.prompt("Please choose a number between 8 and 128 for your password length");
  //valid length if greater than 8 AND less than 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Sorry-It is not a valid length- please select a number between 8 and 128.");
    return '';
  }
  // WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters
  //numeric characters in passsword? 
  var passwordNum = confirm("Do you want numbers in your password?");
  if (passwordNum) {
    //add values from that array to elibibleString
    eligibleString += numString;
  };
  //lowercase characters in password? 
  var passwordLower = confirm("Do you want lowercase characters in your password?");
  if (passwordLower) {
    eligibleString += lowerString;
  };
  //uppercase characters in password? 
  var passwordUpper = confirm("Do you want upperchse characters in your password?");
  if (passwordUpper) {
    eligibleString += upperString;

  };
  //special characters
  var passwordSpecial = confirm("Do you want special characters in your password?");
  if (passwordSpecial) {
    eligibleString += specialString;
    console.log(eligibleString);

  }
  for (var i = 0; i < passwordLength; i++) {
    passwordString = eligibleString[Math.floor(Math.random() * eligibleString.length)];
    passwordToken += passwordString;

    console.log(password);
    console.log(passwordToken);

  }
  return passwordToken;

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);