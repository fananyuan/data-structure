class Stack {
    constructor() {
        this.items = [];
    }

    push(ele) {
        this.items.push(ele);
    }

    pop() {
       return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }
}

let stack = new Stack();
stack.push(123);
stack.push(789);
stack.push(456);


let stack2 = new Stack();
stack2.push(111);

console.log(stack);
console.log(stack2);

// let stack = new Stack;
//
// stack.push(123);
// stack.push(789);
// stack.push(456);

// console.log(stack.pop());
// console.log(stack.size());
// console.log(stack.peek());
// console.log(stack.size());
// stack.clear()
// console.log(stack.size());
