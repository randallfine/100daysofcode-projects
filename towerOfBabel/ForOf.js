// ## FizzBuzz Problem

// List the numbers from 1 to the max (passed in using process.argv). However for every number that is divisible by 3 you write Fizz and for ever number that is divisible by 5 you write Buzz and for every number that is divisible by both 3 and 5 you write FizzBuzz.

// Here is an example.

const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        // here belongs the FizzBuzz logic
        let start = 0;
        // Hint：
        // When it's finished you have to return an object
        // with the property `done: true` but before you
        // have to set `done: false`
        return {
            next() {
                start++;
                if (start <= max) {
                    if (start % 3 === 0 && start % 5 === 0) {
                        return { done: false, value: "FizzBuzz" };
                    } else if (start % 3 === 0) {
                        return { done: false, value: "Fizz" };
                    } else if (start % 5 === 0) {
                        return { done: false, value: "Buzz" };
                    } else {
                        return { done: false, value: start };
                    }
                }
                return { done: true };
            }
        }
    }
}


for (var n of FizzBuzz) {
    console.log(n);
    // // 1
    // // 2
    // // Fizz
    // // 4
    // // Buzz
    // // Fizz
    // // 7
    // // 8
    // // Fizz
    // // Buzz
    // // 11
    // // Fizz
    // // 13
    // // 14
    // // FizzBuzz
    // // 16
    // // 17
    // // Fizz
    // // 19
    // // Buzz
    // // Fizz
    // // 22
    // // 23
    // // Fizz
    // // Buzz
    // // 26
    // // Fizz
    // // 28
    // // 29
    // // FizzBuzz
    // // ...
}