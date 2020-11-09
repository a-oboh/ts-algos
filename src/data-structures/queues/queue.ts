//FIFO - First In First Out

class Node<T> {
  value: T;
  next: Node<T>;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue<T> {
  first: Node<T>;
  last: Node<T>;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }

  enqueue(value: T) {
    const newNode = new Node<T>(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

const queue = new Queue<String>();
queue.peek();
queue.enqueue("Hey");
queue.enqueue("BumbleBee");
queue.enqueue("Rickkyy");
queue.peek();
queue.dequeue();
queue.peek();

export {};
