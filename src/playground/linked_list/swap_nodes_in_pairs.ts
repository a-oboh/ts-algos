import { ListNode } from "../../data-structures/linked_list/list_node";

/*
  Problem: Given a linked list, swap every two adjacent 
  nodes and return its head.

  Input: head = [1,2,3,4]
  Output: [2,1,4,3]
*/

function buildList(nodes: number[]) {
  const head = new ListNode(nodes[0]);
  let currentNode = head;

  for (let i = 1; i < nodes.length; i++) {
    let newNode = new ListNode(nodes[i]);

    currentNode.next = newNode;
    currentNode = currentNode.next;
  }

  return head;
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let tmpHead = head;
  let tmpNext = head.next;

  //swap
  head = tmpNext;
  tmpHead.next = head.next;
  head.next = tmpHead;

  if (!head.next.next) {
    return head;
  }

  head.next.next = swapPairs(head.next.next);

  return head;
}

console.log(swapPairs(null));
