// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwordLength = 0;
let charOpt = false;
let numOpt = false;
let lowerCaseOpt = false;
let upperCaseOpt = false;
// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength += prompt("please state the length of the password in numbers.");
  charOpt = confirm("Would you like special characters in your password?");
  numOpt = confirm("Would like the password to contain numbers?");
  lowerCaseOpt = confirm("Can the password contain lowercase letter?");
  upperCaseOpt = confirm("Do you require uppercase letters in the password?");

  console.log(passwordLength)

  let optionArray = [charOpt, numOpt, lowerCaseOpt, upperCaseOpt];
  console.log(optionArray);
  

 
  /*console.log(passwordLength);
  console.log(charOpt);
  console.log(numOpt);
  console.log(lowerCaseOpt);*/

}
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)] 
  

}
let newPassword = "";
// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  console.log(passwordLength)
  for (i = 0; i < passwordLength; i++) {
    if (charOpt) {
      newPassword += getRandom(specialCharacters);
      console.log(newPassword);
    } 
    if (numOpt) {
      newPassword += getRandom(numericCharacters);
    }
    if (lowerCaseOpt) {
      newPassword += getRandom(lowerCasedCharacters);
    }
    if (upperCaseOpt) {
      newPassword += getRandom(upperCasedCharacters);
    }
  }
console.log(newPassword)
return newPassword

  
  

}

console.log(passwordLength)

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);