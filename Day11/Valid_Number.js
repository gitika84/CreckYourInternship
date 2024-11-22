function isNumber(s) {
    const regex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
    return regex.test(s.trim());
}

// Example Usage:
console.log(isNumber("2")); // true
console.log(isNumber("0089")); // true
console.log(isNumber("-0.1")); // true
console.log(isNumber("+3.14")); // true
console.log(isNumber("4.")); // true
console.log(isNumber("-123.456e789")); // true
console.log(isNumber("abc")); // false
console.log(isNumber("1a")); // false
console.log(isNumber("1e")); // false
console.log(isNumber("e3")); // false
console.log(isNumber("99e2.5")); // false
console.log(isNumber("--6")); // false
console.log(isNumber("-+3")); // false
console.log(isNumber("95a54e53")); // false
