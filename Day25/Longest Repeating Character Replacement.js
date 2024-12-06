function characterReplacement(s, k) {
    const count = new Array(26).fill(0); // Frequency array for characters
    const getCharIndex = (char) => char.charCodeAt(0) - 'A'.charCodeAt(0);
    let maxFreq = 0; // Maximum frequency of any single character in the current window
    let left = 0; // Left pointer of the sliding window
    let maxLength = 0; // Result variable for the longest substring

    for (let right = 0; right < s.length; right++) {
        // Increase frequency of the current character
        const index = getCharIndex(s[right]);
        count[index]++;
        maxFreq = Math.max(maxFreq, count[index]);

        // Check if the current window is valid (total changes needed <= k)
        while ((right - left + 1) - maxFreq > k) {
            count[getCharIndex(s[left])]--; // Shrink window from the left
            left++;
        }

        // Update maxLength
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example Usage
const s = "AABABBA";
const k = 1;
console.log(characterReplacement(s, k)); // Output: 4
