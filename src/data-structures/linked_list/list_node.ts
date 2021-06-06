class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

export { buildList, ListNode };
