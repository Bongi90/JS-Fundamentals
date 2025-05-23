// Access the first user-provided argument
// If no argument is passed, process.argv[2] will be undefined
const firstArg = process.argv[2];

// Check if the first argument is undefined (i.e., no argument was passed by the user)
if (firstArg === undefined) {
  console.log("No argument");
} else {
  // If an argument is present, print it
  console.log(firstArg);
}