function reverseWords(s) {
  
    const words = s.trim().split(/\s+/).reverse();
   
    return words.join(' ');
}

console.log(reverseWords("  the sky is blue  ")); 
console.log(reverseWords("hello world"));      
console.log(reverseWords("a good   example"));  
console.log(reverseWords("  singleWord  "));   