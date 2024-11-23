function removeDuplicates(s, k) {
    const stack = []; // Stack to store characters and their counts

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1][0] === char) {
            // Increment the count if the character matches the top of the stack
            stack[stack.length - 1][1]++;
        } else {
            // Push the character with a count of 1
            stack.push([char, 1]);
        }

        // Remove the character group if its count reaches k
        if (stack[stack.length - 1][1] === k) {
            stack.pop();
        }
    }

    // Reconstruct the string from the stack
    let result = "";
    for (let [char, count] of stack) {
        result += char.repeat(count);
    }

    return result;
}

// Example Usage:
console.log(removeDuplicates("abcd", 2));        // Output: "abcd"
console.log(removeDuplicates("deeedbbcccbdaa", 3)); // Output: "aa"
console.log(removeDuplicates("pbbcggttciiippooaais", 2)); // Output: "ps"
