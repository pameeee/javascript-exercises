const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let first = 0;
    let second = 1;
    
    for (let i = 2; i <= count; i++) {
        let current = first + second;
        second = first;
        first = current;
        console.log("first: ", first);
        console.log("second: ", second);
        console.log("");
    }

    return first;
};

console.log(fibonacci(5));

module.exports = fibonacci;
