// Question link: https://leetcode.com/problems/reverse-linked-list-ii/

import { ListNode } from "../../data-structures/linked_list/list_node";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function printList(currentNode: ListNode) {
  const arr = [];

  while (currentNode != null) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return arr;
}

function reverseBetween(
  head: ListNode | null,
  m: number,
  n: number
): ListNode | null {
  //current position in list
  let currentPos = 1;

  //position before m (m - 1)
  let start: ListNode | null = head;

  //position after n (n + 1)
  let end: ListNode | null = null;

  let currNode = head;
  let newList: ListNode | null = null;

  while (currentPos < m) {
    start = currNode;
    currNode = currNode.next;
    currentPos++;
  }

  let tail: ListNode | null = currNode;

  while (currentPos >= m && currentPos <= n) {
    console.log(currNode.val);

    let next = currNode.next;

    if (next && next.val === n + 1) {
      end = next;
    }

    currNode.next = newList;
    newList = currNode;

    if (currNode.val === m) {
      tail = newList;
    }

    currNode = next;
    currentPos++;
  }

  
  start.next = newList;
  tail.next = end;
  
  if (m > 1) {
    return head;
  } else {
    return newList;
  }
}

const l1 = new ListNode(
  3,
  // new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
  new ListNode(5, null)
);

const m = 1;
const n = 1;

const rev = reverseBetween(l1, m, n);
console.log(printList(rev));

export {};
