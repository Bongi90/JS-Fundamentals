// Access the first user-provided argument (index 2)
// If not provided, it will be undefined
const arg1 = process.argv[2];

// Access the second user-provided argument (index 3)
// If not provided, it will be undefined
const arg2 = process.argv[3];

// Print the arguments in the specified format
// JavaScript's 'undefined' will be printed directly
console.log(`${arg1} is ${arg2}`);