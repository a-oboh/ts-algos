interface ListNode {
  value: any;
  next: ListNode | null;
}

class LinkedList {
  constructor(value: any) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  head: ListNode;
  tail: ListNode;
  length: number;

  //add to back/end
  append(value: any) {
    let newNode: ListNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;

    // add.next = this.tail;

    this.length++;
  }

  //add to front
  prepend(value: any) {
    const newNode = {
      value: value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
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
      value: val,
      next: null,
    };

    const prevNode: ListNode = this.traverseToIndex(index - 1);
    const nextNode: ListNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;

    this.length++;
    return this.printList();
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

    return this.printList();
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
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }
}

const linkedList1 = new LinkedList(10);
linkedList1.append(5);
linkedList1.append(16);
linkedList1.prepend(8);
linkedList1.insert(2, 99);
linkedList1.insert(3, 88);
linkedList1.remove(2);
console.log(linkedList1.printList());

// function gcdOfStrings(str1: string, str2: string): string {
//   if (str1.includes(str2 + str2)) {

//   }
// }
