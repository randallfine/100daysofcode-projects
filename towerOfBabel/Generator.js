/* let fibonacci = function*(){
      let pre = 0, cur = 1;
      while (pre < 1000) {
        // Here we destruct the former state
        [pre, cur] = [cur, pre + cur];
        // and yield (return) each step
        yield pre;
      }
    }();
    
    for (var n of fibonacci) {
      console.log(n);
    }*/
const max = process.argv[2];
let FizzBuzz = function*() {
    let i = 1;
    while (i <= max) {
        if (i % 3 === 0 && i % 5 === 0) {
            yield "FizzBuzz";
        } else if (i % 3 === 0) {
            yield "Fizz";
        } else if (i % 5 === 0) {
            yield "Buzz";
        } else {
            yield i;
        }
        i++;
    }
}();

for (let n of FizzBuzz) {
    console.log(n);
}