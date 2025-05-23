// Access the first user-provided argument
const arg = process.argv[2];

// Attempt to convert the argument to a number
// If arg is undefined or an empty string, Number(arg) will be NaN
// If arg is "89.89", Number(arg) will be 89.89
// If arg is "School", Number(arg) will be NaN
const convertedNumber = Number(arg);

// Check if the converted number is NOT NaN (meaning it's a valid number)
// Also, ensure the original argument actually exists (is not undefined)
// This helps distinguish between no argument (undefined) and a valid number 0
if (!isNaN(convertedNumber) && arg !== undefined) {
  // If it's a valid number, print it as an integer (truncates decimals)
  console.log(`My number: ${Math.floor(convertedNumber)}`);
} else {
  // If it's NaN or no argument was provided, print "Not a number"
  console.log("Not a number");
}