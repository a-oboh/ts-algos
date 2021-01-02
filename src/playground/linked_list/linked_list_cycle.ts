//question URL: https://leetcode.com/problems/linked-list-cycle-ii/

// import { ListNode } from "../../data-structures/linked_list/list_node";

class ListNode {
  val: any;
  next: any;
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const linkedList = [8, 7, 6, 5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc) as unknown,
  null
);

let curr = linkedList as ListNode,
  cycleNode;

while (curr.next !== null) {
  if (curr.val === 3) {
    cycleNode = curr;
  }

  curr = curr.next;
}

curr.next = cycleNode;

//naive solution
function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let currentNode = head;
  let seenNodes = new Set();
  while (!seenNodes.has(currentNode.val)) {
    if (!currentNode.next) {
      return null;
    }

    seenNodes.add(currentNode.val);
    currentNode = currentNode.next;
  }

  return currentNode;
}

//Floyd's tortoise and hare algorithm
//this solution is more performant.
function cycle2(head: ListNode | null) {
  let p1 = head;
  let p2 = head;

  while (true) {
    p1 = p1.next;
    p2 = p2.next;

    if (p2 == null || p2.next == null) {
      return null;
    } else {
      p2 = p2.next;
    }

    if (p1.val === p2.val) break;
  }

  p1 = head;
  // p2 = head;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}

console.log(detectCycle(linkedList as ListNode));
console.log(cycle2(linkedList as ListNode));
