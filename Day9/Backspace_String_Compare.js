function backspaceCompare(s, t) {
    function processString(str) {
        const stack = [];
        for (let char of str) {
            if (char === '#') {
                stack.pop(); // Remove the last character if backspace
            } else {
                stack.push(char); // Add character to stack
            }
        }
        return stack.join(''); // Convert the stack back to a string
    }
    return processString(s) === processString(t)
}
// Example usage:
console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b")); // false
