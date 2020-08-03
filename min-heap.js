
class MinHeap {
    constructor(){
        this.heap = [null];
        this.size = 0;
    }

    add(value){
        this.heap.push(value);
        this.size++;
        console.log(`${value} added to heap. Heap: ${this.heap}. Size: ${this.size}`);
        this.bubbleUp();
     }

    bubbleUp(){
        console.log(`bubble up!`)
        let current = this.size;
        while(current>1 && this.heap[current]<this.heap[getParent(current)]){
            console.log(`${this.heap}. Now swapping at index ${current}
             (value: ${this.heap[current]}) and index ${getParent(current)} 
             (value: ${this.heap[getParent(current)]})`);
            this.swap(current, getParent(current));
            current = getParent(current);
        }
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
      }

 
};

function getParent(currentIndex){
    return Math.floor(currentIndex/2);
};

function getleftChild(currentIndex){
    return currentIndex*2;
}
function getRightChild(currentIndex){
    return currentIndex*2+1;
}


