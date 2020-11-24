// Merge two sorted linked lists and return it as a new sorted list.
// The new list should be made by splicing together the nodes of the first two lists.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 == null) {
    return l2;
  } else if (l2 == null) {
    return l1;
  }

  let newNode: ListNode | null = new ListNode(-1);
  let curr = newNode;

  while (l1 && l2) {
    if (l1 <= l2) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    curr = curr.next;
  }

  if (l1) {
    curr.next = l1;
  } else if (l2) {
    curr.next = l2;
  }

  return newNode.next;
}

const l1 = new ListNode(1, new ListNode(2));
const l2 = new ListNode(1, new ListNode(3));

console.log(mergeTwoLists(l1, l2));

export {};
