/*
 * Given a string, find the sum of all the digits in the string.
 */

function isNumber(char) {
    if (char == '0'
           || char == '1'
           || char == '2'
           || char == '3'
           || char == '4'
           || char == '5'
           || char == '6'
           || char == '7'
           || char == '8'
           || char == '9') {
        return true;
    }
    return false;
}

function countSum(string) {

    var sum = 0;

    var len = string.length;
    
    for (var i = 0; i < len; i++) {
        if (isNumber(string[i])) {
            console.log(parseInt(string[i]));
            sum += parseInt(string[i]);
        }
    }
    
    return sum;
}

var myString = '96h11k4959q615948s50922o38h1453ij38w73413d5577lzrqw3780b389750vf100zd29z73j5wh73l6965n85vm77cw10awrjr29265289222238n10013uk10062f9449acbhfgcm35j78q80';
var result = countSum(myString);
console.log(result);