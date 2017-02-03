//Process the variables that are passed - in through process.argv and output the first letter of words in a row.

const inputs = process.argv.slice(2);
let result = inputs.map((element) => element[0].toUpperCase()).reduce((a, b) => a.concat(b));
console.log(result);

// For example, in
// case of["Hello", "Arrow", "Function"] should result in "HAF".Here is a full example:

//     $ babel - node program.js Hi this is yosuke
//     HTIY