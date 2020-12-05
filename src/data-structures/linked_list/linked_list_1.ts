interface ListNode {
  val: any;
  next: ListNode | null;
  prev?: ListNode | null;
}

export class LinkedList {
  constructor(val: any) {
    this.head = {
      val: val,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  head: ListNode;
  tail: ListNode;
  length: number;

  //add to back/end of list
  append(val: any) {
    let newNode: ListNode = {
      val: val,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this.head;
  }

  //add to front
  prepend(val: any) {
    const newNode = {
      val: val,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this.head;
  }

  insert(index, val) {
    if (index == 0) {
      this.prepend(val);
      return this.printList();
    } else if (index >= this.length) {
      this.append(val);
      return this.printList();
    }

    const newNode: ListNode = {
      val: val,
      next: null,
    };

    const prevNode: ListNode = this.traverseToIndex(index - 1);
    const nextNode: ListNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;

    this.length++;
    return this.head;
  }

  remove(index) {
    if (index > this.length) {
      return `Index exceeds length (${this.length})`;
    }

    const prevNode: ListNode = this.traverseToIndex(index - 1);
    const currNode: ListNode = prevNode.next;
    const nextNode: ListNode = currNode.next;

    prevNode.next = nextNode;

    this.length--;

    return this.head;
  }

  traverseToIndex(index): ListNode {
    let counter = 0;
    let currentNode: ListNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode != null) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }

    return arr;
  }

  reverse() {
    //check if there's one node
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    let second = first.next;

    //as long as second is not null
    while (second) {
      //third node
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;

    return this.head;
  }
}

const linkedList1 = new LinkedList(1);
linkedList1.append(2);
linkedList1.append(3);
linkedList1.prepend(0);
linkedList1.insert(2, 4);
linkedList1.insert(3, 88);
linkedList1.remove(2);
console.log(linkedList1.printList());
linkedList1.reverse();
console.log(linkedList1.printList());

// function gcdOfStrings(str1: string, str2: string): string {
//   if (str1.includes(str2 + str2)) {

//   }
// }

export {ListNode}