interface BSTNode {
  value: any;
  left?: BSTNode | null;
  right?: BSTNode | null;
}

function traverse(node: BSTNode) {
  const tree: BSTNode = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

class BinarySearchTree {
  root: BSTNode;

  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode: BSTNode = {
      value,
      left: null,
      right: null,
    };

    if (this.root == null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    
  }

  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
const json = JSON.stringify(traverse(tree.root));
console.log(json);
