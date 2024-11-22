function numberToWords(num) {
    if (num === 0) return "Zero"; // Special case for 0
    
    const below20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion"];
    
    function helper(n) {
        if (n === 0) return "";
        if (n < 20) return below20[n];
        if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? " " + below20[n % 10] : "");
        return below20[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + helper(n % 100) : "");
    }

    let result = "";
    let chunkIndex = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + (thousands[chunkIndex] ? " " + thousands[chunkIndex] : "") + (result ? " " + result : "");
        }
        num = Math.floor(num / 1000);
        chunkIndex++;
    }
    
    return result;
}

// Example Usage:
console.log(numberToWords(123));       // "One Hundred Twenty Three"
console.log(numberToWords(12345));     // "Twelve Thousand Three Hundred Forty Five"
console.log(numberToWords(1234567));   // "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
console.log(numberToWords(0));         // "Zero"
console.log(numberToWords(1000000));   // "One Million"
console.log(numberToWords(987654321)); // "Nine Hundred Eighty Seven Million Six Hundred Fifty Four Thousand Three Hundred Twenty One"
