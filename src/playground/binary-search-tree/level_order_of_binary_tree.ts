import { TreeNode } from "../../algorithms/searching/breadth-first-search/BFS";

function levelOrder(root: TreeNode, list: number[]) {
  if (root === null) {
    return list;
  }

  list.push(root.value);

  levelOrder(root.left, list);
  levelOrder(root.right, list);
}

const root = new TreeNode(3)


console.log(levelOrder(root.insert([3,6,1,9,2,]),[]));