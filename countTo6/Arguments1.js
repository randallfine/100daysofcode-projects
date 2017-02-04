// As in the rest parameters exercise, your goal is to write a Node module whose
// default
// export is a
// function.This time it will take two arguments: a lower bound and an upper bound.Your
// function should
// return the midpoint between those two bounds.

// However, your
// function should have sensible defaults.The lower bound should
// default to 0, and the upper bound should
// default to 1.

// As before, you don 't need to print anything to the console. Your solution should look something like:

module.exports = (low = 0, high = 1) => (low + high) / 2;