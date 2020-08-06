
// a min-heap class


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

    popMin(){
        if(!this.size) return null;
        console.log(this.heap);
        this.swap(1, this.size);
        const min = this.heap.pop();
        this.size--;
        this.heapifyDown();
        console.log(this.heap, min);
        return min;
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

    heapifyDown(){
        let parent = 1;
        let leftChildIndex = getleftChild(parent);
        let rightChildIndex = getRightChild(parent);
        while(this.swapPossible(parent, leftChildIndex,rightChildIndex)){
            if(leftChildIndex && rightChildIndex){
                if(this.heap[leftChildIndex]<this.heap[rightChildIndex]){
                    this.swap(leftChildIndex, parent);
                    parent = leftChildIndex;
                } else {
                    this.swap(rightChildIndex, parent);
                    parent = rightChildIndex;
                }
            }
            leftChildIndex=getleftChild(parent);
            rightChildIndex=getRightChild(parent);
        } 
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }


    swapPossible(parentIndex, leftChildIndex, rightChildIndex){
       return (
           (this.present(leftChildIndex) && this.heap[parentIndex]>this.heap[leftChildIndex])
           || (this.present(rightChildIndex) && this.heap[parentIndex]>this.heap[rightChildIndex])
           );
    }
    
    present(index){
        return index <= this.size;
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




