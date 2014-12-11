/*   
    Substitution ciphers are ciphers in which each alphabetical character is mapped with another character in a one-to-one fashion. The following string
    
    The quick brown fox jumped over the lazy dog
    
    when encrypted becomes
    
    'fzq kpgwj vxbsa rbh lpniqe bdqx fzq uomy ebt'
    
    Based on the substitution above, your task is to decipher the text below. Once the text is deciphered, the answer shall be obvious.
    
    ''rbpxfy fsb''
 */


/*
 * returns a map of original letters to ciphered letters
 */
function createMap(originalString, cipheredString) {
    map = {};
    
    for (var i = 0; i < originalString.length; i++) {
        
        // set the letter property of the map to the corresponding cipher letter
        // for instance, the map's 't' property is the character 'f':
        // map['t'] == 'f' // true
        // map.t == 'f' // true
        map[originalString[i]] = cipheredString[i];
    }
    
    return map;
}

/*
 * Returns a new map with reversed property: value pairs of the passed in map
 */
function reverseMap(map) {
    var newmap = {};
    
    for (var property in map) {
        newmap[map[property]] = property;
    }
    
    return newmap;
}

/*
 * returns the translation of the specified string using the provided map
 */
function translate(map, string) {
    
    // create a map mapping ciphered letters to original letters
    var newmap = reverseMap(map);
    
    var result = '';
    
    for (var i = 0; i < string.length; i++) {
        result += newmap[string[i]];
    }
    
    return result;
}


var original = 'the quick brown fox jumped over the lazy dog';
var ciphered =  'fzq kpgwj vxbsa rbh lpniqe bdqx fzq uomy ebt';
var map = createMap(original, ciphered);

var stringToDecipher = 'rbpxfy fsb';
var decipheredString = translate(map, stringToDecipher);
console.log(decipheredString);