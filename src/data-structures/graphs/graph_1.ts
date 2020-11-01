// interface AdjList<Parent> {}

// A directionless, unweighted graph
class Graph<Parent, Child> {
  numberOfNodes: number;
  adjacentList;

  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addNode(node: Parent) {
    if (this.adjacentList[node]) {
      return this;
    }

    const children: Array<Child> = [];
    this.adjacentList[node] = children;
    this.numberOfNodes++;

    return this;
  }

  addEdge(node1: Parent, node2: Child) {
    const children: Array<Child> = this.adjacentList[node1];

    children.push(node2);

    this.adjacentList.node1 = children;
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph<string, string>();
myGraph.addNode("0");
myGraph.addNode("1");
myGraph.addNode("2");
myGraph.addNode("3");
myGraph.addNode("4");
myGraph.addNode("5");
myGraph.addNode("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
