//question link: https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

class ListNode {
  val: number;
  prev: ListNode | null;
  next: ListNode | null;
  child: ListNode | null;
  constructor(
    val?: number,
    prev?: ListNode,
    next?: ListNode,
    child?: ListNode
  ) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
    this.child = child === undefined ? null : child;
  }
}

// ---- Generate our linked list ----
const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6];

const buildMultiLevel = function (nodes) {
  const head = new ListNode(nodes[0]);
  let currentNode = head;

  for (let i = 1; i < nodes.length; i++) {
    const val = nodes[i];
    let nextNode: ListNode | null;

    if (Array.isArray(val)) {
      nextNode = buildMultiLevel(val);
      currentNode.child = nextNode;
      continue;
    }

    nextNode = new ListNode(val);
    currentNode.next = nextNode;
    nextNode.prev = currentNode;
    currentNode = nextNode;
  }

  return head;
};

let multiLinkedList = buildMultiLevel(nodes);

// ---- Generate our linked list ----

const printListMulti = (head: ListNode | null) => {
  if (!head) {
    return;
  }

  console.log(head.val);

  if (head.child) {
    printListMulti(head.child);
  }

  printListMulti(head.next);
};

const printList = (head: ListNode | null) => {
  if (!head) {
    return;
  }

  console.log(head.val);

  printList(head.next);
};

function flatten(head: ListNode | null): ListNode | null {
  if (!head) return head;
  // let newNode: ListNode | null = new ListNode(-1);
  let currHead = head;

  while (currHead) {
    let prevNext = currHead.next;
    let child = currHead.child;

    if (child) {
      while (child.next) {
        child = child.next;
      }

      child.next = prevNext;

      if (prevNext) {
        prevNext.prev = child;
      }

      currHead.next = currHead.child;
      currHead.child = null;
    }

    currHead = currHead.next;
  }

  return head;
}

const flat = flatten(multiLinkedList);

printListMulti(flat);

export {};
