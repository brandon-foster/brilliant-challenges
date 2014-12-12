/*
    Let the variance(the average of the squared differences from the mean) of 
    the data below be sigma. What is the value of floor(sqrt(sigma))?
    
    2.1, 2.3, 5.5, 6.9, 9.1, 9.4, 10.1, 11.7, 12.3, 15.2, 15.6, 16.1, 16.3, 
    17.6, 18.2, 21.1, 21.5, 22.7, 22.9, 23.1, 25.3, 27.1, 27.1, 27.5, 27.8,
    30.4, 33.3, 36.1, 39.1, 39.5, 40.6, 40.9, 42.4, 43.8, 43.9, 44.1, 44.6,
    45.8, 46.5, 48.8, 48.9, 49.4, 50.5, 50.7, 50.9, 52.9, 53.7, 54.2, 54.5,
    54.9, 55.6, 55.7, 55.8, 58.5, 58.7, 59.1, 61.7, 62.8, 63.1, 64.6, 64.7,
    64.9, 65.2, 65.2, 66.3, 66.5, 67.8, 68.1, 69.6, 70.1, 70.5, 70.7, 72.6,
    73.1, 74.7, 74.8, 75.3, 77.4, 78.4, 78.8, 79.1, 79.3, 79.3, 80.4, 80.5,
    81.5, 83.7, 85.7, 87.6, 89.1, 89.5, 91.1, 91.2, 91.2, 91.4, 91.7, 92.4,
    94.2, 98.7, 100.7
 */

/*
 * Return the average of the 
 */
function calcMean(array) {
    var sum = 0;
    
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    var mean = (sum / array.length);
    
    return mean;
}

/*
 * Return the variance of the values in passed in array. Variance is the average of
 * the squared differences from the mean.
 */
function calcVariance(array) {
    
    // find the mean of the values
    var mean = calcMean(array);
    
    // for each value, find the squared difference (take the difference from 
    // the mean, then square it)
    var sumSquaredDiffs = 0; // keep track of the sum of the squared differences
    
    for (var i = 0; i < array.length; i++) {
        var diff = array[i] - mean;
        var squaredDiff = Math.pow(diff, 2);
        sumSquaredDiffs += squaredDiff;
    }
    
    var variance = sumSquaredDiffs / array.length;
    
    return variance;
    
}

/*
 * Return the standard deviation of the values in the passed in array.
 */
function calcStdDev(array) {
    var variance = calcVariance(array);
    
    var stdDev = Math.floor(Math.sqrt(variance));
    
    return stdDev;
}

var array = [2.1, 2.3, 5.5, 6.9, 9.1, 9.4, 10.1, 11.7, 12.3, 15.2, 15.6, 16.1, 16.3, 17.6, 18.2, 21.1, 21.5, 22.7, 22.9, 23.1, 25.3, 27.1, 27.1, 27.5, 27.8, 30.4, 33.3, 36.1, 39.1, 39.5, 40.6, 40.9, 42.4, 43.8, 43.9, 44.1, 44.6, 45.8, 46.5, 48.8, 48.9, 49.4, 50.5, 50.7, 50.9, 52.9, 53.7, 54.2, 54.5, 54.9, 55.6, 55.7, 55.8, 58.5, 58.7, 59.1, 61.7, 62.8, 63.1, 64.6, 64.7, 64.9, 65.2, 65.2, 66.3, 66.5, 67.8, 68.1, 69.6, 70.1, 70.5, 70.7, 72.6, 73.1, 74.7, 74.8, 75.3, 77.4, 78.4, 78.8, 79.1, 79.3, 79.3, 80.4, 80.5, 81.5, 83.7, 85.7, 87.6, 89.1, 89.5, 91.1, 91.2, 91.2, 91.4, 91.7, 92.4, 94.2, 98.7, 100.7];
var stdDev = calcStdDev(array);
console.log('standard deviation: ' + stdDev);
