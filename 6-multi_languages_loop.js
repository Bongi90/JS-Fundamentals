// Define an array of strings
const lines = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Initialize an empty string to build the final output
let outputString = "";

// Use a for loop to iterate through the array
for (let i = 0; i < lines.length; i++) {
  outputString += lines[i]; // Add the current line to the string
  if (i < lines.length - 1) { // If it's not the last line, add a newline character
    outputString += "\n";
  }
}

// Print the entire string using only one console.log
console.log(outputString);