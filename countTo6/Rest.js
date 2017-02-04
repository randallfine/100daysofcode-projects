// This exercise uses a slightly different format than usual.This time, your goal is to write a Node module whose
// default
// export is an average
// function.You don 't need to print anything to the console. That is, your solution should look something like:

module.exports = function average(...args) {
    return args.reduce((a, b) => a + b) / args.length;
};

// We 'll test your module by passing it a few different sets of arguments, e.g. average(1, 2, 3) and average(5, 10), and making sure that it works in all cases.

// Otherwise, the process is the same as before: use count - to - 6 verify program.js to test your result, and so on.