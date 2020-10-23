class DoublyLinkedList {
  constructor(value: any) {
    this.head = {
      value: value,
      prev: null,
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
    const prevNode: ListNode = this.head;

    let newNode: ListNode = {
      value: value,
      prev: prevNode,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;

    // add.next = this.tail;

    this.length++;
  }

  //add to front
  prepend(value: any) {
    const prevHead = this.head;

    const newNode: ListNode = {
      value: value,
      prev: null,
      next: null,
    };

    prevHead.prev = newNode;
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
      prev: null,
      next: null,
    };

    const prevNode: ListNode = this.traverseToIndex(index - 1);
    const currentNode: ListNode = prevNode.next;

    newNode.prev = prevNode;
    prevNode.next = newNode;
    currentNode.prev = newNode;
    newNode.next = currentNode;

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

    nextNode.prev = prevNode;
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

const doublyLinkedList = new DoublyLinkedList(10);
doublyLinkedList.append(5);
doublyLinkedList.prepend(20);
doublyLinkedList.prepend(70);
doublyLinkedList.insert(2, 99);
doublyLinkedList.insert(3, 200);

console.log(doublyLinkedList.printList());

doublyLinkedList.remove(2);

console.log(doublyLinkedList.printList());
