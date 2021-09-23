// Only change code below this line
function mySplice(arr1, arr2, n) {
    var arrOne = arr1;
    var arrTwo = arr2;
    for(var i = 0; i < arrOne.length; i++) {
        arrTwo.splice(n, 0, arrOne[i]);
    }
    return arrTwo;
}
// Only change code above this line

console.log(mySplice(arr1, arr2, n)); // Change this line
module.exports = mySplice;