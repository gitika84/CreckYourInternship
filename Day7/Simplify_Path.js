function simplifyPath(path) {
    const stack = [];
    const components = path.split('/');

    for (const component of components) {
        if (component === '.' || component === '') {
           
            continue;
        } else if (component === '..') {
           
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
          
            stack.push(component);
        }
    }

   
    return '/' + stack.join('/');
}

console.log(simplifyPath("/home/"));              
console.log(simplifyPath("/../"));                
console.log(simplifyPath("/home//foo/"));           
console.log(simplifyPath("/a/./b/../../c/"));      
console.log(simplifyPath("/a/../../b/../c//.//")); 
console.log(simplifyPath("/a//b////c/d//././/..")); 