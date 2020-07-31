

const LinkedList = require('../singly_linked_list');

// Finding the nth-from-last element in a singly linked list
// Approach: Using two pointers at different positions in the list but moving at the same rate.
// We will use one pointer to iterate through the entire list,
// but we’ll also move a second pointer delayed n steps behind the first one.
//O(n) time complexity, and O(1) space complexity, since only two nodes are created no matter the size of the input list.

function findNthLast(list, n){
    let nthLast = null;
    let tailPointer = list.head;
    let count = 0;

    while(tailPointer !== null){
        tailPointer = tailPointer.getNextNode();
        count++;
        if(count >= n){
            if (nthLast !== null){
                nthLast = nthLast.getNextNode();
            } else {
                nthLast = list.head;
            }
        }
        
    }
    return nthLast.data;
}



// const newTestList = new LinkedList();

// newTestList.addToHead('testing');
// newTestList.addToTail('testing2');
// newTestList.addToTail('testing3');
// newTestList.addToTail('THIS');
// newTestList.addToTail('testing4');
// newTestList.addToTail('THAT');

// newTestList.printList();
// console.log(findNthLast(newTestList, 2));
