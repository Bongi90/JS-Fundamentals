// Access command-line arguments
// process.argv is an array where:
// process.argv[0] is 'node' executable path
// process.argv[1] is the script file path (e.g., '2-arguments.js')
// Actual user arguments start from index 2
const numArgs = process.argv.length - 2; // Calculate the number of actual arguments

// Use conditional statements (if/else if/else) to print messages
if (numArgs === 0) {
  console.log("No argument");
} else if (numArgs === 1) {
  console.log("Argument found");
} else { // This covers numArgs > 1
  console.log("Arguments found");
}
