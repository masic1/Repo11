// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
var monitorsList = [];
// End of monitorsListArray array

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    // Only change code below this line
    for(var i = 1; i < 4; i++) {
        monitorsList.push([newMonitorsList[i-1], i]);
    }
    
    return monitorsList;
    // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray)); // Change this line
module.exports = myMonitorsFunction;