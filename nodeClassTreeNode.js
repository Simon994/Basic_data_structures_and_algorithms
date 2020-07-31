

// A tree node data structure, with children of TreeNode maintained as an array.
// addChild can take a instance of TreeNode or data. Similarly, removeChild will remove by TreeNode or by data

class TreeNode {
    constructor(data){
        this.data = data;
        this.children = [];
    }

    addChild(child){
        if(child instanceof TreeNode){
            this.children.push(child);
        } else{
            child = new TreeNode(child);
            this.children.push(child);
        }
    }

    removeChild(childForRemoval){
        const length = this.children.length;
        this.children = this.children.filter(child => {
            if (childForRemoval instanceof TreeNode){
                return child !== childForRemoval;
            } else {
                return child.data !== childForRemoval;
            }
        });
        if(this.children.length === length){
            this.children.forEach(child => child.removeChild(childForRemoval))        
       }
    }

    depthFirstTraverse(){
        console.log(this.data);
        this.children.forEach(child => child.depthFirstTraverse());
    }

    breadthFirstTraverse(){
        let queue = [this];
        while (queue.length > 0){
            const current = queue.shift();
            console.log(current.data);
            queue = queue.concat(current.children);
        }
    }

    print(level = 0) {
        let result = '';
        for (let i = 0; i < level; i++) {
          result += '-- ';
        }
        console.log(`${result}${this.data}`);
        this.children.forEach(child => child.print(level + 1));
      }
}    

