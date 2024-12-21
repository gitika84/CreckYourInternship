var flatten = function(head) {
    if (!head) return null;
    let dummyHead = new Node(0, null, head, null);

    let stack = [head];
    let current = dummyHead;
    let prev = null;

    while(stack.length!=0) {        
        current = stack.pop();
        
        if (prev) {
            current.prev = prev;
            prev.next = current;
        } 

        if (current.next!=null) stack.push(current.next);
        if (current.child!=null) { // has a child
            stack.push(current.child);
            current.child = null; // remove child reference
        }
        
        prev = current;   
    }
    
    return dummyHead.next;
};