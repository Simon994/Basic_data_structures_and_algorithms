
const Node = require('./nodeClass.js');

class LinkedList {
    constructor(){
        this.head = null;
    }

//method to add to head
    addToHead(data){
        const newHead = new Node(data);
        const oldHead = this.head;
        this.head = newHead;
        if(oldHead){
            this.head.setNextNode(oldHead);
        }
    }
// method to add to tail
    addToTail(data){
        let tail = this.head;
        if(tail !== null){
            while(tail.getNextNode() !== null){
                tail = tail.getNextNode();
            }
          tail.setNextNode(new Node(data));           
        } else {
            this.head = new Node(data);
        }
    }

// method to remove from head
    removeHead(){
        let oldHead = this.head;
        if(oldHead === null) return;
        this.head = oldHead.getNextNode();
        return oldHead.data;
    }

 // method to print the list, from head to tail
 
    printList(){
        let stringToPrint = '<head> ';
        let currentNode = this.head;
        while(currentNode !== null){
            stringToPrint+=`${currentNode.data}, `;
            currentNode = currentNode.getNextNode();
        }
       stringToPrint+=' <tail>';
       console.log(stringToPrint);
    }


//method to find node by data, iteratively

    findNodeByIteration(data){
        let current = this.head;
        while(current){
            if(current.data === data){
                return current;
            } else if(!current.getNextNode()){
                return null;
            }
            current = current.getNextNode();
        }
    }

 //method to find node by data, recursively
 
    findNodeByRecursion(data, current = this.head){
        if(current === null) {
            return null;
        } else if(current.data === data) {
            return current;
        } else {
        return this.findNodeByRecursion(data, current.getNextNode());
        } 
    }

}



module.exports = LinkedList;

