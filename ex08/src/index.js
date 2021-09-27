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

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger","Zebra"]));
console.log(myMutation(["Noel", "Ole"])); // Change this line
module.exports = myMutation;