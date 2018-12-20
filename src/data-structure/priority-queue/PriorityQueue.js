import MinHeap from '../heap/MinHeap';

// It is the same as min heap except that when comparing to elements
// we take into account not element's value but rather its priority.
export default class PriorityQueue extends MinHeap {
    constructor() {
        super();
        this.priorities = {};
    }

    add(item, priority = 0) {
        this.priorities[item] = priority;
        super.add(item);

        return this;
    }

    remove(item) {
        super.remove(item);
        delete this.priorities[item];

        return this;
    }
    
    changePriority(item, priority) {
        this.remove(item);
        this.add(item, priority);

        return this;
    }

    findByValue(item) {
        return this.find(item);
    }

    hasValue(item) {
        return this.findByValue(item).length > 0;
    }

    comparePriority(a, b) {
        if (this.priorities[a] === this.priorities[b]) {
            return 0;
        }

        return this.priorities[a] < this.priorities[b] ? -1 : 1;
    }

    compareValue(a, b) {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }
}