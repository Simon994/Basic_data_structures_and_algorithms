
// Basic node that contains data and one link to another node. The node’s data will be specified when creating the node and immutable (can’t be updated).

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }

    //method to set the next Node (which must be a Node instance, or null)
    setNextNode(node){
       if(node instanceof Node || node === null){
         this.next = node;
       } else {
           throw(new Error('Your next node must be a Node instance'));
        }
    }

    getNextNode(){
        return this.next;
    }
}

module.exports = Node;



