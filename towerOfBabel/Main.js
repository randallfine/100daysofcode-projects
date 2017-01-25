
    let arg1 = process.argv[2];
    let arg2 = process.argv[3];
    import {PI} from "./Math";
    // let sqrt = require('./Math').sqrt;
    // let square = require('./Math').square;
    import {sqrt} from "./Math";
    import {square} from "./Math";
    console.log(PI);
    console.log(sqrt(+arg1));
    console.log(square(+arg2));
