const leapYears = function(year) {

    if (year % 4 == 0 && year % 10 !== 0) {
        return true;
    } else if (year % 4 == 0 && year % 10 == 0 && year % 400 == 0) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;

//Leap years
// Divisible by four e.g. 1984 and 2004
    //if years divisible by 10, NOT LEAP
        // if divisible by 400, LEAP