

const LinkedList = require('../singly_linked_list.js');
//const Node = require('../nodeClass.js');

function swapTwoElements(list, data1, data2){
    let node1 = list.head;
    let node2 = list.head;
    let node1Prev = null;
    let node2Prev = null;

    if (data1 === data2) {
        console.log('Elements are the same - no swap to be made');
        return;
      }

    while(node1 !== null){
        if(node1.data === data1){
            break;
        }
        node1Prev = node1;
        node1 = node1.getNextNode();
    }

    while(node2 !== null){
        if(node2.data === data2){
            break;
        }
        node2Prev = node2;
        node2 = node2.getNextNode();
    }

    if (node1 === null || node2 === null) {
        console.log('Swap not possible - one or more element is not in the list');
        return;
      }


    if(node1Prev === null){
        list.head = node2;
    } else {
        node1Prev.setNextNode(node2);
    }

    if(node2Prev === null){
        list.head = node1;
    } else {
        node2Prev.setNextNode(node1);
    }

    let temp = node1.getNextNode();
    node1.setNextNode(node2.getNextNode());
    node2.setNextNode(temp);
}

const newTestList = new LinkedList();

newTestList.addToHead('testing');
newTestList.addToTail('testing2');
newTestList.addToTail('testing3');
newTestList.addToTail('THIS');
newTestList.addToTail('testing4');
newTestList.addToTail('THAT');

newTestList.printList();
swapTwoElements(newTestList, 'THIS', 'THAT');
newTestList.printList();