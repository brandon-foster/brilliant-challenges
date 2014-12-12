/*
    Write a program that takes an unsorted array as an input and returns the 
    total amount of numbers whose remainders are x, when divided by N.

    How many numbers in the array have a remainder of 2 when divided by 4?

    [33, 37, 13, 21, 14, 55, 58, 37, 20, 50, 32, 14, 6, 55, 28, 51, 33, 1, 16,
    26, 19, 25, 43, 38, 18, 11, 44, 19, 31, 3, 57, 21, 21, 20, 39, 8, 60, 27, 
    23, 8, 37, 33, 39, 10, 15, 56, 53, 26, 10, 4]
 */

/*
 * Return the remainder of specified dividend divided by the specified divisor
 */
function remainder(dividend, divisor) {
    return dividend % divisor;
}

/*
 * Return the total number of values in the specified array whose remainders 
 * are x, when divided by n.
 */
function sumRemaindersX(array, n, x) {
    var sum = 0;
    
    for (var i = 0; i < array.length; i++) {
        if (remainder(array[i], n) == x) {
            sum++;
        }
    }
    
    return sum;
}

var array = [33, 37, 13, 21, 14, 55, 58, 37, 20, 50, 32, 14, 6, 55, 28, 51, 33, 1, 16, 26, 19, 25, 43, 38, 18, 11, 44, 19, 31, 3, 57, 21, 21, 20, 39, 8, 60, 27, 23, 8, 37, 33, 39, 10, 15, 56, 53, 26, 10, 4];
var result = sumRemaindersX(array, 4, 2);
console.log(result);
