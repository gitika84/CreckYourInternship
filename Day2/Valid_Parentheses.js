function isValid(s) {
   
    if (s.length % 2 !== 0) return false;

  
    const stack = [];
   
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

   
    for (let char of s) {
      
        if (bracketPairs[char]) {
            
            const topElement = stack.length > 0 ? stack.pop() : '#';
          
            if (topElement !== bracketPairs[char]) {
                return false;
            }
        } else {
           
            stack.push(char);
        }
    }
    return stack.length === 0;
}

console.log(isValid("()")); 
// console.log(isValid("()[]{}")); 
// console.log(isValid("(]")); 
// console.log(isValid("([)]")); 
// console.log(isValid("{[]}")); 