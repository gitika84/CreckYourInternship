function strStr(haystack, needle) {
    if (needle === "") return 0; 

    const needleLength = needle.length;
    const haystackLength = haystack.length;

    for (let i = 0; i <= haystackLength - needleLength; i++) {
        
        if (haystack.slice(i, i + needleLength) === needle) {
            return i;
        }
    }

    return -1; 
}


console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("", ""));        
console.log(strStr("abc", "c"));


