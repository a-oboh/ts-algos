import { TreeNode } from "../../algorithms/searching/breadth-first-search/BFS";

//Question link: https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes
// along the longest path from the root node down to the farthest leaf node.

function maxDepthRecursive(root: TreeNode | null, count: number) {
  if (root === null) {
    return count;
  }

  count++;

  const left = maxDepthRecursive(root.left, count);
  const right = maxDepthRecursive(root.right, count);

  return Math.max(left, right);
}

function maxDepthIterative(root: TreeNode) {
   
}

export {};
