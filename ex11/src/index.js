// Only change code below this one
function splitArrayInGroups(arr, n) {
    var count = 0;
    var splitArray = [...arr];
    var result = [];
    
    while (count < n) {
        result.push(splitArray.splice(0, n));
        count++;
    }

    return result;
}
// Only change code above this line

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // Change this line
module.exports = splitArrayInGroups;