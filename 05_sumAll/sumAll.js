const sumAll = function (start, end) {
    let finalSum = 0;

    if (typeof start !== "number" || typeof end !== "number") {
        return "ERROR";
    } else if (start < 0 || end < 0) {
        return "ERROR";
    } else if (end > start) {
        for (let i = start; i <= end; i++) {
            finalSum += i;
        }
    } else {
        for (let i = end; i <= start; i++) {
            finalSum += i;
        }
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
