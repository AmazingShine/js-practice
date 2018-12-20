import LinkedList from '../linked-list/LinkedList';
export default class Stack{
    constructor() {
    // We're going to implement Stack based on LinkedList since these
    // structures are quite similar. Compare push/pop operations of the Stack
    // with prepend/deleteHead operations of LinkedList.
    this.linkedList = new LinkedList();
    }

    isEmpty(){
        return !this.linkedList.head
    }

    peek(){
        if (this.isEmpty()) {
          return null;
        }
        return this.linkedList.head.value;
    }

    push(value){
        this.linkedList.prepend(value);
    }

    pop(){
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    toString(callback) {
      return this.linkedList.toString(callback);
    }
}