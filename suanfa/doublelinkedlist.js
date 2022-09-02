function DoubleListNode(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}

const node1 = new DoubleListNode(1);
const node2 = new DoubleListNode(2);
const node3 = new DoubleListNode(3);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

console.log(node1);
