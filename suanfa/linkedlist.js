function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);

// 尾部插入，只需将最后一个元素 next指向该元素即可
node1.next = node2;

const node1_2 = new ListNode(1.5);

// 中部添加，需要变更的是前驱结点和目标结点的 next 指针指向
node1.next = node1_2;
node1_2.next = node2;

// 删除，只需改变前驱节点指向
node1.next = node2;

console.log(node1);

// 链表时间复杂度
// 添加元素不需要挪动多余的元素。为O(1)
// 删除需要找到前一个节点。所以为O(n)，删除首节点为O(1)
// 链表没有下标可言，读取需要遍历。为O(n)
// 查找需要遍历。为O(n)

// 数组时间复杂度
// 在数组头部和指定位置添加和删除元素时间复杂度为O(n)，在数组末尾添加和删除元素时间复杂度是O(1)
// 数组有下标，读取能直接定位。为O(1)
// 查找需要遍历。为O(n)

// 链表的插入/删除效率较高，而访问效率较低；数组的访问效率较高，而插入/删除效率较低。
