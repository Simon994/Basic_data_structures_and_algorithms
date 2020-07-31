
const LinkedList = require('./singly_linked_list.js');

class Stack {
    constructor(maxSize = Infinity){
        this.stack = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }

    peek(){
        if(!this.isEmpty()){
            return this.stack.head.data;
        } else {
            return null;
        }
    }

    pop(){
        if(!this.isEmpty()){
            const value = this.stack.removeHead();
            this.size--;
            return value;
        } else {
            throw new Error(`Stack is already empty!`);
        }
    }

    push(value){
        if(this.hasRoom()){
            this.stack.addToHead(value);
            this.size++;
        } else {
            throw new Error(`Can't add ${value}. Stack is full!`);
        }
    }

    hasRoom(){
       return this.size < this.maxSize; 
    }

    isEmpty(){
        return this.size === 0;
    }
}

