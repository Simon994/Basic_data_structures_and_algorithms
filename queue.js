
const LinkedList = require('./singly_linked_list.js');

//this Queue can be bounded
class Queue {
    constructor(maxSize = Infinity){
        this.queue = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }

    enqueue(data){
        if(this.hasRoom()){
            this.queue.addToTail(data);
            this.size++;
            console.log(`Added ${data} to Queue. Size now: ${this.size}`);
        } else {
            throw new Error(`Maximum size (${this.maxSize}) reached. Can't enqueue.`);
        }
    }

    dequeue(){
        if(!this.isEmpty()){
            let data = this.queue.removeHead();
            this.size--;
            console.log(`Removed ${data} from Queue. Size now: ${this.size}`);
        } else {
            throw new Error(`Queue is empty. Can't dequeue.`);
        } 
    }

    hasRoom(){
        return this.size < this.maxSize;
    }

    isEmpty(){
        return this.size === 0;
    }


}



// const boundedQueue = new Queue(10);

// boundedQueue.enqueue(1);
// boundedQueue.enqueue(2);
// boundedQueue.enqueue(3);
// boundedQueue.enqueue(4);
// boundedQueue.dequeue();
// boundedQueue.dequeue();
// boundedQueue.dequeue();
// boundedQueue.dequeue();
// boundedQueue.dequeue();


// const restaurantOrder = new Queue();
// restaurantOrder.enqueue('apple pie');
// restaurantOrder.enqueue('roast chicken');
// restaurantOrder.enqueue('quinoa salad');
// console.log('\nFood preparing...\n')
// restaurantOrder.dequeue();
// restaurantOrder.dequeue();
// restaurantOrder.dequeue();
// console.log('All orders ready!')