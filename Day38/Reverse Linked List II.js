
var reverseBetween = function(head, left, right) {
    if (!head || left === right) {
        return head;
    }

    const dummy = new ListNode(0, head);
    let prev = dummy;

    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    let cur = prev.next;

    for (let i = 0; i < right - left; i++) {
        const temp = cur.next;
        cur.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
    }

    return dummy.next;    
};