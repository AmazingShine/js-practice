import LinkedListNode from './LinkedListNode'
export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        // If there is no tail yet let's make new node a tail.
        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    append(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    delete(value) {
        if (!this.head) {
          return null;
        }
    
        let deletedNode = null;
    
        // If the head must be deleted then make next node that is differ
        // from the head to be a new head.
        while (this.head && this.head.value == value) {
          deletedNode = this.head;
          this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
          // If next node must be deleted then make next node to be a next next one.
          while (currentNode.next) {
            if (currentNode.next.value == value) {
              deletedNode = currentNode.next;
              currentNode.next = currentNode.next.next;
            } else {
              currentNode = currentNode.next;
            }
          }
        }

        // Check if tail must be deleted.
        if (this.tail.value == value) {
            this.tail = currentNode;
          }

          return deletedNode;
    }

    find({ value = undefined, callback = undefined }) {
      if (!this.head) {
        return null;
      }

      let currentNode = this.head;

      while (currentNode) {
        // If callback is specified then try to find node by callback.
        if (callback && callback(currentNode.value)) {
          return currentNode;
        }

        // If value is specified then try to compare by value..
        if (value !== undefined && currentNode.value == value) {
          return currentNode;
        }

        currentNode = currentNode.next;
      }

      return null;
    }

    deleteTail() {
      const deletedTail = this.tail;

      if (this.head === this.tail) {
        // There is only one node in linked list.
        this.head = null;
        this.tail = null;

        return deletedTail;
      }

      // If there are many nodes in linked list...

      // Rewind to the last node and delete "next" link for the node before the last one.
      let currentNode = this.head;
      while (currentNode.next) {
        if (!currentNode.next.next) {
          currentNode.next = null;
        } else {
          currentNode = currentNode.next;
        }
      }

      this.tail = currentNode;

      return deletedTail;
    }

    /**
     * @return {LinkedListNode}
     */
    deleteHead() {
      if (!this.head) {
        return null;
      }

      const deletedHead = this.head;

      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
        this.tail = null;
      }

      return deletedHead;
    }
    

    toArray() {
      const nodes = [];

      let currentNode = this.head;
      while (currentNode) {
        nodes.push(currentNode);
        currentNode = currentNode.next;
      }

      return nodes;
    }

    toString(callback) {
      return this.toArray().map(node => node.toString(callback)).toString();
    }
}
