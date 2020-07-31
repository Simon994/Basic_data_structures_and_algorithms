

const LinkedList = require('./singly_linked_list.js');
const Node = require('./nodeClass.js');


// Hash Map with seperate chaining
class HashMap {
    constructor(size=0){
        this.hashmap = new Array(size).fill(null).map(() => new LinkedList);
    }

    hash(key){
        let hashCode = 0;
        for (let i=0; i < key.length; i++){
            hashCode += key.charCodeAt(i);
        }
        return hashCode%(this.hashmap.length);
    }

    assign(key, value){
        const arrayIndex = this.hash(key);
        //this.hashmap[arrayIndex] = value;
        const linkedList = this.hashmap[arrayIndex];
        if(linkedList.head === null){
            linkedList.addToHead({key: key, value: value});
            return;
        }

       let current = linkedList.head;
       while(current){
           if (current.data.key === key){
               current.data = {key: key, value: value};
               return;
           } else if (current.getNextNode() === null){
               current.setNextNode(new Node({key: key, value: value}));
               return;
           } else {
               current = current.getNextNode();
           } 
       }
    }

    retrieve(key){
        const arrayIndex = this.hash(key);
        const linkedList = this.hashmap[arrayIndex];
        let current = linkedList.head;
        while(current){
            if(current.data.key === key){
                return current.data.value;
            } else if (!current.getNextNode()){
                return null;
            }
            current = current.getNextNode();
        }
    }
}


