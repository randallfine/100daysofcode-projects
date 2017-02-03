 var evenOrOdd = +process.argv[2];
 var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
 var sum = +process.argv[3] + evenOrOdd;
 //  var obj = {};
 //  obj[evenOrOddKey] = evenOrOdd;
 //  obj[sum] = sum;

 // EXAMPLES
 // var obj = {
 //       [prop]: "bar"
 //     };

 // var obj = {
 //       // using an inline function
 //       [(()=>"bar" + "baz")()]: "foo"
 //     };
 //  let obj = {
 //      [evenOrOddKey]: evenOrOdd,
 //      [sum]: sum
 //  }

 console.log({
     [+process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
     [+process.argv[2] + +process.argv[3]]: +process.argv[2] + +process.argv[3],
 });