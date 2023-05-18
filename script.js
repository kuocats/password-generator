// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//var letterLowercase; 
//var letterUppercase;
//var valueNumeric;
//var specialChar; 
//var passwordLength;

//var passwordGenerator = []

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Variables
var numbers = ["0123456789"];
var characters = ["!@#$%^&*()"];
var lowercaseL =["abcdefghijklmnopqrstuvwxyz"];
var uppercaseL = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var variableSelect = "";
var randomPassword = "";

password.value === "";


// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
//passwordText.value = password;
//}
  // Password Choices
  var passwordLength = prompt ("To begin, choose a password lenghth of a minimum of 8 characters, no more than 128 characters.");
  var numericValue = confirm("Do you want to include numbers?");
  var specialChar = confirm("Do you want to include special characters?");
  var letterLowercase = confirm("Do you want lowercase letters?");
  var letterUppercase = confirm("Do you want upppercase letters");


// Function specifically for 8 to 128 characters requirement
//function generatePassword () {
 // passwordLength = prompt("To begin, please choose between 8 to 128 characters for your password.");
  //console.log("Password Length" + passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Please begin with the following prompts.");
    var passwordLength = prompt("To begin, choose a password lenghth of a minimum of 8 characters, no more than 128 characters.");

  } 
  
  else if (numericValue === false && specialChar === false && letterLowercase === false && letterUppercase === false) {
    var numericValue = confirm("Do you want to include numbers?");
    var specialChar = confirm("Do you want to include special characters?");
    var letterLowercase = confirm("Do you want lowercase letters?");
    var letterUppercase = confirm("Do you want upppercase letters");
  }

  //Selections to generate password
  if (numericValue) {
    variableSelect += numbers;
  }

  if (specialChar) {
    variableSelect += characters;
  }

  if (letterLowercase) {
    variableSelect += lowercaseL;
  }

  if (letterUppercase) {
    variableSelect += uppercaseL;
  }

  for (var i = 0; i < passwordLength; i++) {
    randomPassword += variableSelect.charAt(Math.floor(Math.random() * variableSelect.length));
  }
  password.value = randomPassword;

}

    //letterLowercase = confirm ("Do you want lowercase letters?");
    //console.log("Lowercase" + letterLowercase);
    //letterUppercase = confirm ("Do you want uppercase letters?");
    //console.log("Uppercase" + letterUppercase);
    //valueNumeric = confirm ("Any numbers in your password?");
   // console.log("Numbers" + valueNumeric);
    //specialChar = confirm ("Will there be any special Characters?");
   // console.log ("Special Characters" + specialChar);
  //};


