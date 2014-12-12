/*
    Consider the array containing the result of 100 coin flips. Let us call a 
    set of flips a "streak" if it is a series of 2 or more adjacent flips of 
    the same value. How many "streaks" are there in the array below?
    
    ['H', 'T', 'H', 'T', 'T', 'H', 'T', 'T', 'H', 'H', 'T', 'H', 'H', 'T', 'H',
     'H', 'H', 'T', 'T', 'H', 'T', 'H', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'H',
     'T', 'H', 'H', 'T', 'T', 'T', 'T', 'T', 'H', 'H', 'T', 'T', 'T', 'H', 'T',
     'H', 'T', 'H', 'H', 'T', 'H', 'H', 'T', 'T', 'T', 'H', 'H', 'H', 'T', 'H',
     'H', 'T', 'T', 'T', 'T', 'T', 'T', 'H', 'H', 'H', 'T', 'T', 'T', 'T', 'H',
     'H', 'T', 'H', 'T', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'T', 'T', 'T', 'H',
     'H', 'H', 'H', 'H', 'T', 'T', 'T', 'H', 'H', 'H']
 */

/*
 * Return the number of streaks of a value in the array.
 */
function countStreaks(array) {
    var sum = 0;
    var prevVal = null; // keep track of the previous value
    var currentStreak = false; // keep track of whether or not the program is currently in a streak
    
    for (var i = 0; i < array.length; i++) {
        
        console.log('array[i]: ' + array[i]);
        // if (current value is different that previous OR last element in 
        // the array) AND the program is currently in a streak
        if ((array[i] != prevVal && currentStreak) || i == array.length - 1 && array[i] == prevVal) {
            sum++;
            console.log('increment sum: ' + sum);
            //currentStreak = false;
            //console.log('set false currentStreak: ' + currentStreak);
        }
        
        currentStreak = (array[i] == prevVal);
        console.log('set currentStreak: ' + currentStreak);
    
        prevVal = array[i];
        console.log('set prevVal: ' + prevVal);
    }
    
    return sum;
    
}

var array = 
    ['H', 'T', 'H', 'T', 'T', 'H', 'T', 'T', 'H', 'H', 'T', 'H', 'H', 'T', 'H',
     'H', 'H', 'T', 'T', 'H', 'T', 'H', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'H',
     'T', 'H', 'H', 'T', 'T', 'T', 'T', 'T', 'H', 'H', 'T', 'T', 'T', 'H', 'T',
     'H', 'T', 'H', 'H', 'T', 'H', 'H', 'T', 'T', 'T', 'H', 'H', 'H', 'T', 'H',
     'H', 'T', 'T', 'T', 'T', 'T', 'T', 'H', 'H', 'H', 'T', 'T', 'T', 'T', 'H',
     'H', 'T', 'H', 'T', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'T', 'T', 'T', 'H',
     'H', 'H', 'H', 'H', 'T', 'T', 'T', 'H', 'H', 'H'];
var result  = countStreaks(array);
console.log(result);
