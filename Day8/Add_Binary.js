function addBinary(a, b) {
    let carry = 0;
    let result = [];
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        if (i >= 0) sum += parseInt(a[i--], 10); // Convert character to number and decrement i
        if (j >= 0) sum += parseInt(b[j--], 10); // Convert character to number and decrement j
        result.push(sum % 2); // Add the current bit
        carry = Math.floor(sum / 2); // Calculate the carry
    }

    return result.reverse().join(''); // Reverse and join to form the binary string
}

// Example usage
const binarySum = addBinary("1010", "1011");
console.log(binarySum); // Output: "10101"
