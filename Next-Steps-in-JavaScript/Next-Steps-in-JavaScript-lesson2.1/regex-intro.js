//PHONE NUMBER VALIDATOR WITHOUT REGEX
let phoneFormatted = function(submission) {
    let counter;
    let current;
    let submissionLength = submission.length;
    let numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let separator = "-";
    if (typeof submission !== "string" || submissionLength !== 8) {
        return false;
    }
    for (counter = 0; counter < submissionLength; counter++) {
        current = submission[counter];
        if (numberArray.indexOf(current) === -1) {
            if (counter !== 3) {
                return false;
            } else if (current !== separator) {
                return false;
            }
        }
    }
    return true;
};

console.log(phoneFormatted("1234567"));
console.log(phoneFormatted("123-4567"));

//PHONE NUMBER VALIDATOR USING REGEX
let phoneFormattedRegex = function(submission) {
    return /^\d{3}-\d{4}$/.test(submission);
}

console.log(phoneFormattedRegex("1234567"));
console.log(phoneFormattedRegex("123-4567"));