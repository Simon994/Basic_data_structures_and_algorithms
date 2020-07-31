
const LinkedList = require('../singly_linked_list');

//Find middle element in a singly linked list (if list has even number of elements then middle is element at list-length/2+1).
// Approach: sending pointers through the list at different iteration “speeds”.
//O(n) time complexity, and O(1) space complexity, since only two nodes are created no matter the size of the input list.

function findMiddle(list){
    let fastPointer = list.head;
    let slowPointer = list.head;
    let count = 0;
    while(fastPointer !== null){
        fastPointer = fastPointer.getNextNode();
        count++;
        if(count%2 == 0){
            slowPointer = slowPointer.getNextNode();
        }
    }
    return slowPointer.data;
}



// const newTestList = new LinkedList();

// newTestList.addToHead('testing');
// newTestList.addToTail('testing2');
// newTestList.addToTail('testing3');
// newTestList.addToTail('testing3aa');
// newTestList.addToTail('MIDDLE')
// newTestList.addToTail('testing3a');
// newTestList.addToTail('testing4');
// newTestList.addToTail('testing5');

// newTestList.printList();
// console.log(findMiddle(newTestList));