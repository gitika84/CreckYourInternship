class RandomizedCollection {
    constructor() {
        this.values = []; // Array to store elements for getRandom.
        this.indexMap = new Map(); // Map to store indices of elements.
    }

    insert(val) {
        const exists = this.indexMap.has(val);
        if (!exists) {
            this.indexMap.set(val, new Set());
        }
        this.indexMap.get(val).add(this.values.length);
        this.values.push(val);
        return !exists;
    }

    remove(val) {
        if (!this.indexMap.has(val)) {
            return false;
        }
        
        // Get an index of the value to remove
        const valIndex = this.indexMap.get(val).values().next().value;
        const lastIndex = this.values.length - 1;
        const lastVal = this.values[lastIndex];

        // Swap the value to remove with the last value
        this.values[valIndex] = lastVal;
        this.values.pop();

        // Update indexMap for lastVal
        this.indexMap.get(lastVal).delete(lastIndex);
        if (valIndex !== lastIndex) {
            this.indexMap.get(lastVal).add(valIndex);
        }

        // Remove val from indexMap
        this.indexMap.get(val).delete(valIndex);
        if (this.indexMap.get(val).size === 0) {
            this.indexMap.delete(val);
        }

        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.values.length);
        return this.values[randomIndex];
    }
}
