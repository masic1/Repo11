// Only change code below this line
function largestNumFromArr(arr) {
    var maxNumArray = [];
    var num = 0;
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > num) {
                num = arr[i][j];
            }
        }
        maxNumArray.push(num);
        num = 0;
    }
    return maxNumArray;
}
// Only change above this line

console.log(largestNumFromArr(arr)); // Change this line
module.exports = largestNumFromArr;