

class BinaryTree {
    constructor(value, depth = 1){
        this.value = value;
        this.depth = depth;
        this.left = null;
        this.right = null;
    }

    insert(valueToAdd){
        if(valueToAdd < this.value){
            if(this.left){
                this.left.insert(valueToAdd);
            } else {
                this.left = new BinaryTree(valueToAdd, this.depth+1);
            }
        } else {
            if(this.right){
                this.right.insert(valueToAdd);
            } else {
                this.right = new BinaryTree(valueToAdd, this.depth+1);
            }
        }
    }

    findNodeByValue(valueToFind){
        if(valueToFind === this.value){
            return this.value;
        } else if(valueToFind < this.value && this.left){
               return this.left.findNodeByValue(valueToFind);
        } else if(valueToFind > this.value && this.right) {
            return this.right.findNodeByValue(valueToFind);
        } else {
            return null;
        } 
    }

    depthFirstInOrderTraversal(){
        if(this.left){
            this.left.depthFirstInOrderTraversal();
        }
        console.log(this.value);
        if(this.right){
            this.right.depthFirstInOrderTraversal();
        }
    }



}


const randomize = () => Math.floor(Math.random() * 40);
const bt = new BinaryTree(15);
let numbers = [];

for (let i = 0; i < 10; i++) {
  numbers.push(randomize());
  bt.insert(numbers[i]);
}

console.log(`Inserted [ ${numbers} ] to binary tree`);

console.log('Depth First Traversal');
bt.depthFirstInOrderTraversal();