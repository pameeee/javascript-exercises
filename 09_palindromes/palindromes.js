const palindromes = function (str) {
    const cleanedStr = (str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, '')).toLowerCase();
    let arr = cleanedStr.split("");
    let j = 0;
    for (let i=arr.length - 1; i >= Math.floor(arr.length / 2); i--) {
        if (arr[i] !== arr[j]) {
            return false
        }
        j++
    }
    return true
};

let word = 'racecar';
// let word = 'racecar!' // disregard punctuation ; true
// let word = "Racecar!" // disregard capital letters ; true
// let word = 'Animal loots foliated detail of stool lamina.' // disregard spaces ; true
// let word = 'ZZZZ car, a man, a maracaz.' // false
console.log(palindromes(word));

// Do not edit below this line
module.exports = palindromes;
