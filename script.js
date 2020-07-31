

class Stack {
    constructor() {
        this._array = []
    }

    get array(){
        return this._array;
    }

    push(...data){
        this._array.push(...data);
    }

    pop(){
       return this._array.pop();
    }
}

const newTestStack = new Stack();

console.log(newTestStack);
newTestStack.push(5, 12);
console.log(newTestStack.array);