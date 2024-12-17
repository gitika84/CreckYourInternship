class NestedIterator {
    constructor(nestedList) {
        this.stack = [];
        for (let i = nestedList.length - 1; i >= 0; i--) {
            this.stack.push(nestedList[i]);
        }
    }

    next() {
        return this.stack.pop().getInteger();
    }

    hasNext() {
        while (this.stack.length > 0) {
            const current = this.stack[this.stack.length - 1];
            if (current.isInteger()) {
                return true;
            }
            this.stack.pop();
            const nestedList = current.getList();
            for (let i = nestedList.length - 1; i >= 0; i--) {
                this.stack.push(nestedList[i]);
            }
        }
        return false;
    }
}