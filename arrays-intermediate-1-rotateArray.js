/*
    Consider the list of objects below, suppose we rotate it to the left times.
    Which of the following arrays will we get after the rotation?

    { , 3, & , 22, 37, ! , 35, 17, 8, 11
 */

/*
 * Return an array rotated to the left n times.
 */
function rotateLeft(array, n) {

    // determine the index of the value that will be at the beginning of the rotated array
    var startingIndex = 0;
    for (var i = 0; i < n; i++) {
        startingIndex = (startingIndex + 1) % array.length;
    }

    // now that we have the index of the value in the original array that will 
    // be the first value in the new array, copy the values from the original
    // array to the new array, beginning with the value in original array whose
    // index we have determined
    var resultArray = [];
    
    for (var i = 0; i < array.length; i++) {
        resultArray.push(array[startingIndex % array.length]);
        startingIndex++;
    }
    
    return resultArray;
}

var array = ['{' , 3, '&' , 22, 37, '!' , 35, 17, 8, 11]
var result = rotateLeft(array, 129);

console.log(result);