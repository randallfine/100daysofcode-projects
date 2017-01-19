 let itMatches = /it/;
 let source = "The kittens have mittens";
 // let result = itMatches.test(source);
 // console.log(result);

 let something = "cats";
 let somethingMatches = new RegExp(something);
 let result = somethingMatches.test(source);
 console.log(result);

 let source2 = "The cats have hats";
 let result2 = somethingMatches.test(source2);
 console.log(result2);

 let itMatchesInsensitive = /it/i; //i = insensitive, ignores case sensitivity
 let itAlsoMatchesInsensitive = new RegExp("it", "i")
 let words = "The KiTtEnS HAVE MiTtENs";
 console.log(itMatches.test(words));
 console.log(itMatchesInsensitive.test(words));
 console.log(itAlsoMatchesInsensitive.test(words));