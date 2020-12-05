import {
  tree,
  TreeNode,
} from "../../algorithms/searching/breadth-first-search/BFS";

// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// we can validate the tree using the Breadth first search and checking the current node with the next
function isValidBST(root: TreeNode | null): boolean {
  let currentNode = root;

  let list = [];
  let queue = [];
  queue.push(currentNode);

  while (queue.length > 0) {
    currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      if (currentNode.left.value > currentNode.value) {
        return false;
      }
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      if (currentNode.right.value < currentNode.value) {
        return false;
      }
      queue.push(currentNode.right);
    }
  }

  return true;
}

console.log(isValidBST(tree.root));

export {};
