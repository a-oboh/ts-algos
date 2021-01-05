//Stack implementation with Arrays
export default class StackWithArray {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  top: any;
  bottom: any;
  length: number;

  private data: any[] = [];

  peek() {
    return this.top;
  }

  push(value) {
    this.data.push(value);
    this.length++;
    this.bottom = this.data[0];
    this.top = this.data[this.length - 1];

    return this.top;
  }

  pop() {
    if (this.top === null || this.top === undefined) {
      return null;
    }

    // if (this.top === this.bottom) {
    //   this.bottom = null;
    // }

    const currTop = this.top;

    this.data.pop();
    this.length--;
    this.bottom = this.data[0];
    this.top = this.data[this.length - 1];

    return currTop;
  }
}

// const myStack = new StackWithArray();
// myStack.push(30);
// myStack.push(20);
// myStack.push(10);
// myStack.pop();
// console.log(myStack.peek());
// console.log(myStack.top);
