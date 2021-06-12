//question url: https://leetcode.com/problems/binary-tree-level-order-traversal/

import { TreeNode } from "../../algorithms/searching/breadth-first-search/BFS";

function levelOrder(root: TreeNode) {
  const res = [];
  const q = [root];

  while (q.length) {
    let qLen = q.length;
    let lvlCount = 0;
    const subRes = [];

    while (lvlCount < qLen) {
      const currNode = q.shift();
      subRes.push(currNode.value);

      if (currNode.left) q.push(currNode.left);
      if (currNode.right) q.push(currNode.right);

      lvlCount++;
    }

    res.push(subRes);
  }

  return res;
}

const root = new TreeNode(3);

console.log(levelOrder(root.insert([6, 1, 9, 2])));
