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
    let add: ListNode = this.tail;

    this.tail = {
      value: value,
      next: null,
    };

    add.next = this.tail;

    this.head.next = add;

    this.length++;

    // console.log(this.head.next);
  }

  //add to front
  prepend(value: any) {
    let add: ListNode = this.head;

    this.head = {
      value: value,
      next: add,
    };

    this.length++;
  }
}

const linkedList1 = new LinkedList(10);
linkedList1.append(5);
linkedList1.append(16);
linkedList1.prepend(8);
console.log(linkedList1);
