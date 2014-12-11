/*
    Write a program that from an unsorted array finds the number of elements 
    that can be written as a sum of two or more consecutive positive integers.

    From the array below, how many of the elements can be written as sum of two
    or more consecutive positive integers?

    [32, 37, 13, 21, 16, 55, 58, 37, 20, 50, 32, 14, 6, 25, 28, 51, 33, 1, 16, 
    8, 128, 25, 8, 64, 18, 16, 44, 19, 31, 3, 57, 21, 21, 20, 32, 8, 60, 27, 
    23, 8, 37, 33, 39, 10, 15, 56, 53, 26, 10, 4]
 */

/*
 * Return an array whose elements are all the numbers in the range [0 .. num),
 * including zero, and excluding num
 */
function createArrayOfIntegers(num) {
    var arr = [];
    
    // store all natural numbers less than num
    for (var i = 0; i < num; i++) {
        arr[i] = i + 1;
    }
    
    return arr;
}


/*
 * Works like substr, except it operates on arrays
 */
function subArray(array, start, distance) {
    var result = [];
    
    for (var i = start; i < start + distance; i++) {
        result.push(array[i]);
    }
    
    return result;
}

/*
 * Returns an array of all possible consecutive sequences of size two or more.
 * For instance:
 *      arr = [1,2,3,4];
 *      
 *      createArrayOfSubstrings(arr);
 *      
 *      // the above line will return
 *      // [
 *      //  [1],
 *      //  [1,2],
 *      //  [1,2,3]
 *      //  [1,2,3,4]
 *      //  [2],
 *      //  [2,3],
 *      //  [2,3,4],
 *      //  [3],
 *      //  [3,4],
 *      //  [4]
 *      // ]
 *      
 */
function createArrayOfSequences(arr) {
    var result = [];
    
    var size = 2; // keeps track of how many elements should be in the sequence
                  // being created and pushed into the result array
    
    for (var i = 0; i < arr.length; i++) {
        
        for (var j = 0; j < arr.length - i; j++) {
            var tempArr = [];

            tempArr = subArray(arr, i, j + 1);
            
            // only keep sequences of size 2 or greater
            if (tempArr.length > 1) {
                result.push(tempArr);
            }            
        }
    }

    return result;
}

/*
 * Return the sum of elements in the array
 */
function sumElemsInArray(arr) {
    var sum = 0;
    
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}

/*
 * Return true if the number is the sum of consecutive positive integers, else return false.
 */
function isSumOfConsecutiveIntegers(num) {
    
    // for all natural numbers less than num, see if the sum of consecutive numbers equals num
    
    // create an array of sequences of consecutive natural numbers less than 
    // num, where each sequence has two or more elements
    var arr = createArrayOfIntegers(num - 1);
    var sequences = createArrayOfSequences(arr);
    
    // for each sub-array in the sequences array, sum the values
    for (var i = 0; i < sequences.length; i++) {
        var sum = sumElemsInArray(sequences[i]);
        if (sum == num) {
            
            // print out the consecutive integers whose sum equals num, just to
            // see which integers sum to equal the num
            for (var j = 0; j < sequences[i].length; j++) {
                console.log(sequences[i][j]);
            }
            
            console.log('sum: ' + sum);
            
            return true;
        }
    }
    
    return false;
}

/*
 * Return the number of elements in the specified array whose value is the sum 
 * of consecutive positive integers
 */
function numberOfElementsThatAreSumsOfConsecutivePositiveIntegers(arr) {
    var sum = 0;
    
    for (var i = 0; i < arr.length; i++) {
        if (isSumOfConsecutiveIntegers(arr[i])) {
            sum++;
        }
    }
    
    return sum;
}

var array = [32, 37, 13, 21, 16, 55, 58, 37, 20, 50, 32, 14, 6, 25, 28, 51, 33, 1, 16, 8, 128, 25, 8, 64, 18, 16, 44, 19, 31, 3, 57, 21, 21, 20, 32, 8, 60, 27, 23, 8, 37, 33, 39, 10, 15, 56, 53, 26, 10, 4];
var result = numberOfElementsThatAreSumsOfConsecutivePositiveIntegers(array);

console.log(result);