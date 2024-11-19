function convertToTitle(columnNumber) {
    let result = "";

    while (columnNumber > 0) {
        columnNumber--; // Adjust to 0-based index
        const char = String.fromCharCode((columnNumber % 26) + 'A'.charCodeAt(0));
        result = char + result; // Prepend the character to the result
        columnNumber = Math.floor(columnNumber / 26); // Move to the next position
    }

    return result;
}

// Example usage
console.log(convertToTitle(1));  // Output: "A"
console.log(convertToTitle(28)); // Output: "AB"
console.log(convertToTitle(701)); // Output: "ZY"
