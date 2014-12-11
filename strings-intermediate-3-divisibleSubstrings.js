/*
    Write a program that finds the number of substrings that are divisible by 
    N. Where N is an integer.

    How many substrings of the string below are divisible by N = 3?

      6781234967
 */

/*
 * Return an array containing each possible substring of the specified string
 */
function createSubstringsArray(string) {
    
    var arr = [];
    
    var counter = 0;
    
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < string.length - i; j++) {
            var substring = string.substr(i, j + 1);
            arr[counter] = substring;
            counter++;
        }
    }
    
    return arr;
}

/*
 * Return true if the value is divisble by the divisor, else return false.
 */
function isDivisible(value, divisor) {
    if (value % divisor == 0) {
        return true;
    }
    
    return false;
}

/*
 * Return the number of substrings that are divisible by n
 */
function getNumDivisibleSubstrings(string, n) {
    var substrings = createSubstringsArray(string);
    var count = 0;
    
    for (var i = 0; i < substrings.length; i++) {
        
        var value = parseInt(substrings[i]);
        
        if (isDivisible(value, n)) {
            count++;
        }
    }
    
    return count;
}

var string = '6781234967';
var count = getNumDivisibleSubstrings(string, 3);

console.log(count);
