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
//--------------------------------- variable declared for prompts -------------------------------//
/* variables will be changed by the data from prompts. This data inputted by end user 
will be then used to create the password in generatePassword() */

let passwordLength = 0; 
let charOpt = false;
let numOpt = false;
let lowerCaseOpt = false;
let upperCaseOpt = false;

//------------------------------------ acquiring user preferences -------------------------------//
// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt("please state the length of the password in numbers.");
  /* if else statement: if the input is less than 10 or more than 64 you get
  an alert tell the end user to retry, the function is then executed again!! */ 
  if (passwordLength < 10 || passwordLength > 64) {
    alert("Sorry, the length of the password must be more than 10 and less than 64, please retry");
    getPasswordOptions();
  } else {
    charOpt = confirm("Would you like special characters in your password?");
    numOpt = confirm("Would like the password to contain numbers?");
    lowerCaseOpt = confirm("Can the password contain lowercase letter?");
    upperCaseOpt = confirm("Do you require uppercase letters in the password?");
  } 
}


//------------------------------------- acquiring random elements---------------------------------//
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)] 
}


//-------------------------------------- Generate the password -----------------------------------//
// Function to generate password with user input
function generatePassword() {
  // execute prompt function (getPasswordOption())
  getPasswordOptions(); 
  // declare variable to store random elements into. 
  let newPassword = "";
  console.log(passwordLength)
  // for: runs up until the length of newPassword = passwordLength(taken from prompt)
  for (i = 0; i < passwordLength; i++) {
    /* if statements: it option variable are chosen to be true, a random element is 
    added using getRandom() function */
    if (charOpt) {
      newPassword += getRandom(specialCharacters);
      
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
return newPassword
}



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