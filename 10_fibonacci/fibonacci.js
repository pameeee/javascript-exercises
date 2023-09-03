const fibonacci = function(num) {

    if (num < 0) {
        return "OOPS"
    } else {
        arr = [1, 1]
        for (let i = 2; i <= num; i++) {
            arr.push(arr[i-1] + arr[i-2]);
        }
        return arr[num - 1]
    }
}; 


// NOTE TO DO NEXT: USE REDUCE!!!!!

console.log(fibonacci(9));

// Do not edit below this line
module.exports = fibonacci;
