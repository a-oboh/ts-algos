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
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;

    while (true) {
      if (currentNode.value == value) {
        return currentNode;
      }

      if (value < currentNode.value) {
        //left side
        if (!currentNode.left) {
          return null;
        }

        currentNode = currentNode.left;
      } else {
        //right side
        if (!currentNode.right) {
          return null;
        }

        currentNode = currentNode.right;
      }
    }
  }

  remove(value) {
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;
    let prevNode: BSTNode = null;
    let nextNode: BSTNode = null;

    //if the value is the root value
    if (value == this.root.value) {
      // currentNode = currentNode.right;
      let successor: BSTNode = currentNode.right;
      let succLeft: BSTNode = successor.left;

      while (succLeft) {
        if (!succLeft.left) {
          succLeft.left = currentNode.left;
          this.root = successor;
          return this;
        }

        succLeft = succLeft.left;
      }

      this.root = successor;

      return this;
    }

    while (currentNode) {
      if (value < currentNode.value) {
        prevNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        prevNode = currentNode;
        currentNode = currentNode.right;
      } else if (value == currentNode.value) {
        //no right child
        if (currentNode.right == null) {
          //if previous value is greater than current value, set left child to equal the current value's left
          if (prevNode.value > currentNode.value) {
            prevNode.left = currentNode.left;
          } else if (prevNode.value < currentNode.value) {
            //if previous value is greater than current value, set right child to equal the current value's left
            prevNode.right = currentNode.left;
          }
        } else if (currentNode.right.left == null) {
          //right child that does not have a left child
          currentNode.right.left = currentNode.left;

          if (prevNode.value > currentNode.value) {
            prevNode.left = currentNode.right;
          } else if (prevNode.value < currentNode.value) {
            prevNode.right = currentNode.right;
          }
        } else {
          //right child with left child

          //find the left most value of the [current] right node
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;

          while (leftMost) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          // leftMostParent.left = currentNode.left;
          leftMost.left = currentNode.left;

          if (prevNode.value > currentNode.value) {
            prevNode.left = currentNode.right;
          } else if (prevNode.value < currentNode.value) {
            prevNode.right = currentNode.right;
          }
        }

        return this;
      }
    }
  }
}

const tree = new BinarySearchTree();

//        9
//    4       20
//  1   6   15  170

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.lookup(20));
// console.log(tree.lookup(12));
tree.remove(20);

const json = JSON.stringify(traverse(tree.root));
console.log(json);

export {}