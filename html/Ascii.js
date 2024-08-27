function getNextCharacter(char) {
    
    const asciiValue = char.charCodeAt(0);

    const nextAsciiValue = asciiValue + 1;

    const nextChar = String.fromCharCode(nextAsciiValue);

    return nextChar;
}
console.log(getNextCharacter('a')); 
console.log(getNextCharacter('G')); 
console.log(getNextCharacter('8')); 
console.log(getNextCharacter('z')); 
console.log(getNextCharacter('9')); 
