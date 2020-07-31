
// A basic bi-directional node that contains data and links (next and previous) to other nodes. The node’s data will be specified when creating the node and immutable (can’t be updated).

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.previous = null
    }

    //method to set the next Node (which must be a Node instance, or null)
    setNextNode(node){
       if(node instanceof Node || node === null){
            this.next = node;
       } else {
           throw(new Error('Your next node must be a Node instance'));
        }
    }

    setPreviousNode(node){
        if(node instanceof Node || node === null){
            this.previous = node;
        } else {
            throw(new Error('Your previous node must be a Node instance'));
        }
    }

    getNextNode(){
        return this.next;
    }

    getPreviousNode(){
        return this.previous;
    }
}

module.exports = Node;



