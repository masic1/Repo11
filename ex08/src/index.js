// Only change code below this line
function myMutation(arr) {
    var firstEl = arr[0].toLowerCase().split("");
    var secondEl = arr[1].toLowerCase().split("");
    var count = 0;

    for (var i = 0; i < secondEl.length; i++) {
        if(firstEl.indexOf(secondEl[i]) > -1 ) {
            count++;
        }
    }

    if (count == secondEl.length) {
        return true;
    } else {
        return false; 
    }
}
// Only change code this line

console.log(myMutation(arr)); // Change this line
module.exports = myMutation;