// Only change code below this one
function splitArrayInGroups(arr, n) {
    var splitArray = [...arr];
    var result = [];
    
    while (splitArray.length) {
        result.push(splitArray.splice(0, n));
    }
    
    return result;
}
// Only change code above this line

console.log(splitArrayInGroups(arr, n)); // Change this line
module.exports = splitArrayInGroups;