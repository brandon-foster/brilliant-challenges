/*
 * Write a method that returns number of times a substring occurs in a string.
 * In the string below how many times does the string "EAT" occur?
 * 
 * AUDRYBERNITAEATVIVANBROOKSEATJENIEATMICHALELASANDRALATIAEATLIDIAEATDEANDRAEATSYBILEATMONROEEATLATRISHAALTAEATDERICKEATROSANNLEVILIBBYKIRSTENCHARLESEATELLYNEATJANEEEATSTASIAEATJULIETTARANDIEATNORBERTSAGEEATARACELIKATINAMERNAEATISAIASWINNIEEATARLETHAEATMILOCAMIEEATANNABELEATLEANORABERTHASYBLECHANAEATREAGANERICKVALENTINAEATDORETHEASEBASTIANKRISROBERTAEATIVONNEEATAI
 */

/*
 * returns a three character string from the beginning of the passed in string
 */
function getThreeWordString(string) {
    var result = '';
    for (var i = 0; i < 3; i++) {
        result += string[i];
    }
    return result;
}

/*
 * Returns the number of occurences of the target string within the string 
 */
function countSubstring(string, target) {
    var sum = 0;
    
    var len = string.length;
    for (var i = 0; i < len - 2; i++) {
        if (string.substr(i, 3) == target) {
            sum += 1;
            i += 2;
        }
    }
    return sum;
}

var haystack = 'AUDRYBERNITAEATVIVANBROOKSEATJENIEATMICHALELASANDRALATIAEATLIDIAEATDEANDRAEATSYBILEATMONROEEATLATRISHAALTAEATDERICKEATROSANNLEVILIBBYKIRSTENCHARLESEATELLYNEATJANEEEATSTASIAEATJULIETTARANDIEATNORBERTSAGEEATARACELIKATINAMERNAEATISAIASWINNIEEATARLETHAEATMILOCAMIEEATANNABELEATLEANORABERTHASYBLECHANAEATREAGANERICKVALENTINAEATDORETHEASEBASTIANKRISROBERTAEATIVONNEEATAI';
var needle = 'EAT';
var occurences = countSubstring(haystack, needle);
console.log(occurences);