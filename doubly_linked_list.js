

const Node = require('./nodeClassBidirectional.js')

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToHead(data){
        const newHead = new Node(data);
        const oldHead = this.head;
        this.head = newHead;
        if(oldHead){
            newHead.setNextNode(oldHead);
            oldHead.setPreviousNode(newHead);
        } else {
            this.tail = newHead;
        }
    }

    addToTail(data){
        const oldTail = this.tail;
        const newTail = new Node(data);
        this.tail = newTail;
        if(oldTail){
            oldTail.setNextNode(newTail);
            newTail.setPreviousNode(oldTail);
        } else {
           this.head = newTail;
        }
    }

    removeHead(){
        const oldHead = this.head;
        if(!oldHead) return;
        this.head = oldHead.getNextNode();
        const newHead = this.head;
        if(!newHead) {
            this.removeTail();
        } else {
        newHead.setPreviousNode(null);
        }
        return oldHead.data;
    }

    removeTail(){
        const removedTail = this.tail;
        if (!removedTail) return;
        this.tail = removedTail.getPreviousNode();
        if (this.tail){
          this.tail.setNextNode(null);
        }
        if (removedTail === this.head){
          this.removeHead();
        }
        return removedTail.data
      }

     removeByData(data){
         let currentNode = this.head;
         while(currentNode !== null){
             if(currentNode.data === data){
                 if(currentNode === this.head) return this.removeHead();
                 if(currentNode === this.tail) return this.removeTail();
                 let prev = currentNode.getPreviousNode();
                 let next = currentNode.getNextNode();
                 prev.setNextNode(next);
                 next.setPreviousNode(prev);
                 return currentNode.data;
             }
             currentNode = currentNode.getNextNode();
         }
         return null;
     } 

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
}

const newTestList = new DoublyLinkedList();
// newTestList.printList();
newTestList.addToHead('💩');
//console.log(newTestList.tail.data);
//newTestList.printList();
newTestList.addToHead('not a poop!')
newTestList.addToHead('💩💩!')
//newTestList.printList();

newTestList.addToTail('💕💩');

newTestList.addToHead('💩😍')
newTestList.printList();

console.log(newTestList.removeByData('not a poop!'));
newTestList.printList();

// const secondTestList = new DoublyLinkedList();
// secondTestList.addToTail('💩');
// console.log(secondTestList.head.data);