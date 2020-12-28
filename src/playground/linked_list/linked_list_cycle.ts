//question URL: https://leetcode.com/problems/linked-list-cycle-ii/

import { ListNode } from "../../data-structures/linked_list/list_node";

//naive
function detectCycle(head: ListNode | null): ListNode | null {
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
};


