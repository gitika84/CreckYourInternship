function removeElements(head, val) {
    // Handle the case where the head nodes have the value `val`
    while (head !== null && head.val === val) {
      head = head.next; // Move the head to the next node
    }
  
    // Use a pointer to traverse the rest of the list
    let current = head;
    while (current !== null && current.next !== null) {
      if (current.next.val === val) {
        // Bypass the node with value `val`
        current.next = current.next.next;
      } else {
        // Move to the next node
        current = current.next;
      }
    }
  
    return head; // Return the updated head
  }
  