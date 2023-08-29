const removeFromArray = function(arrayParameter, ...toRemove) {

    for (let i = 0; i < toRemove.length; i++) {
        for (let j = 0; j < arrayParameter.length; j++) {
            console.log(`${toRemove[i]} and ${arrayParameter[j]}`);
            if (toRemove[i] === arrayParameter[j]) {
                arrayParameter.splice(j, 1);
            }
        }
    }
    return arrayParameter;

};
module.exports = removeFromArray;


// 1 go through each toRemove
// 2 compare each toRemove[element] to each arrayParameter[element]
// 3 if type and element are same, remove it from arrayParameter
