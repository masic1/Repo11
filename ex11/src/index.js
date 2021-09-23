// Only change code below this one
function splitArrayInGroups(arr, n) {
    var result = [];
    for (var i = 0; i < arr.length; i += n) {
        var split = arr.slice(i, i + n);
        result.push(split);
    }




    
    return result;
}
// Only change code above this line

console.log(splitArrayInGroups([["a", "b", "c", "d"], 2])); // Change this line
module.exports = splitArrayInGroups;