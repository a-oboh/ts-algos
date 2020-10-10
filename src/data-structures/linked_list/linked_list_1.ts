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
  }

  head: ListNode;
  tail: ListNode;
  length;

  append(value: any) {
    let add: ListNode = this.tail;

    this.tail = {
      value: value,
      next: null,
    };

    add.next = this.tail;

    this.head.next = add;

    console.log(this.head.next);
  }
}

const linkedList1 = new LinkedList(10);
linkedList1.append(5);
linkedList1.append(16);
linkedList1.append(12);
// console.log(linkedList1);
