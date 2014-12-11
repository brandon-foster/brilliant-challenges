/*
    In cryptography, Caesar's cipher is arguably the simplest and most widely 
    known encryption technique.
    
    It is a simple substitution cipher in which each letter in the plaintext is
    replaced by a letter some fixed number of positions down the alphabet. For 
    example, with a password of 3, A would be replaced by D, B would become E,
    and so on.
    
    Implement Caesar's cipher and use it to reveal the answer to this problem 
    by decoding the message below.
    
    ugfyjslmdslagfk gf kgdnafy lzak hjgtdwe lzw sfkowj ak log zmfvjwv sfv lowflq log
 */

/*
 * Return a map which maps the alphabet to a letter three positions away 
 * so that A maps to D, B maps to E, and Z maps to C
 */
function createCaesarMap(offset) {

    var map = {};
    
    // create property-value pairs for the caesar map
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < alphabet.length; i++) {
        var asciiCodeCaesarChar = alphabet[i].charCodeAt(0) + offset;
        
        // wrap around back to 'a', don't go past 'z'
        if (asciiCodeCaesarChar > 'z'.charCodeAt(0)) {
            asciiCodeCaesarChar -= 26;
        }
        
        var caesarChar = String.fromCharCode(asciiCodeCaesarChar);
        
        map[alphabet[i]] = caesarChar;
    }
    
    // don't forget to map a space to a space
    map[' '] = ' ';
    
    return map;
}

function reverseMap(map) {
    var resultMap = {};
    
    for (var property in map) {
        resultMap[map[property]] = property;
    }
    
    return resultMap;
}

function decipher(encrypted, offset) {
    
    var map = createCaesarMap(offset);
    var reversedMap = reverseMap(map);
    
    result = '';
    
    for (var i = 0; i < encrypted.length; i++) {
        result += reversedMap[encrypted[i]];
    }
    
    return result;
}

var encrypted = 'ugfyjslmdslagfk gf kgdnafy lzak hjgtdwe lzw sfkowj ak log zmfvjwv sfv lowflq log';

// run the cipher with offsets from 0 through 25
for (var i = 0; i < 26; i++) {
    var decrypted = decipher(encrypted, i);
    console.log('i: ' + i + '. message: ' + decrypted);
}