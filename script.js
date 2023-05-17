// Assignment code here
var generateBtn = document.querySelector("#generate");

var letterLowercase; 
var letterUppercase;
var valueNumeric;
var specialChar; 
var passwordLength;

var passwordGenerator = []

//Variables 
var numericValue = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","#","$","%","&","*","~","<",">","?"];
var letterLowercase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var letterUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  passwordLength = prompt("To begin, please choose between 8 to 128 characters for your password.");
  console.log("Password Length" + passwordLength);

  if (!passwordLength){
    alert("Required input");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt ("Password must be between 8 and 128 characters");
    console.log("Password length" + passwordLength);

  } else {
    letterLowercase = confirm ("Do you want lowercase letters?");
    console.log("Lowercase" + letterLowercase);
    letterUppercase = confirm ("Do you want uppercase letters?");
    console.log("Uppercase" + letterUppercase);
    valueNumeric = confirm ("Any numbers in your password?");
    console.log("Numbers" + valueNumeric);
    specialChar = confirm ("Will there be any special Characters?");
    console.log ("Special Characters" + specialChar);
  };


}