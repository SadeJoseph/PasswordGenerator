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

// Function to prompt user for password options
function getPasswordOptions() {
  var characterLength;
  var specialC;
  var numbers;
  var capitals;
  var lowercase;

characterLength=prompt("Please enter your desired password length. Between 10 and 64 characters");

if (characterLength===null){
  alert("Click the 'Generate Password' button to start");
  return 0;
}
else if (characterLength <10 || characterLength >64) {
  alert("Please enter a number of character between 10-64");
  return 0;
}
else if (isNaN(characterLength)) {
alert("Please enter a numerical value");
  return 0;
}

specialC= confirm("Would you like to add special characters? (i.e '@', '$') ");
numbers =confirm("Would you like to add numbers? ");
capitals =confirm("Would you like to add capital letters?");
lowercase=confirm("Would you like to add  lowerse letters?");

return [characterLength, specialC, numbers, capitals, lowercase];
}

// Function for getting a random element from an array
function getRandom(arr) {

  var index =Math.floor(Math.random() * arr.length -1);
  return arr[index]
}

// Function to generate password with user input
function generatePassword() {
var password = "";
var index;
var characterLength;
var specialC;
var capitals;
var lowercase;
var numbers;
var options;

options = getPasswordOptions;

if (options.length> 0) {
  characterLength=parseInt(options[0]);
  specialC=options[1];
  capitals=options[2];
  lowercase=options[3];
  numbers=options[4];

  while (password.length !=characterLength) {
    if (specialC || capitals|| lowercase || numbers ){
      index=(Math.floor(Math.random() *4));
      switch (index) {
        case 0:
        {if (specialC) 
        password+= getRandom(specialCharacters);
      }
      break;
      }
      case 1:
      {}
  }



}

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