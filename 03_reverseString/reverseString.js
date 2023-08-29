const reverseString = function(input) {

    let reversedInput = "";

    for (let i = input.length - 1; i >= 0; i--) {
        reversedInput += input[i];
    }

    return reversedInput;
};

// reverseString("Hello");
// Do not edit below this line
module.exports = reverseString;
