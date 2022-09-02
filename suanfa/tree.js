function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const root = new TreeNode("root");

const left1 = new TreeNode("1");
const right1 = new TreeNode("2");
root.left = left1;
root.right = right1;

const left1_1 = new TreeNode("1-1");
const left1_2 = new TreeNode("1-2");
left1.left = left1_1;
left1.right = left1_2;

const right1_1 = new TreeNode("2-1");
const right1_2 = new TreeNode("2-2");
right1.left = right1_1;
right1.right = right1_2;

console.log(root);

// 前序遍历、中序遍历、后续遍历、层次遍历

// 前序遍历：根节点 -> 左子树 -> 右子树
// 中序遍历：左子树 -> 根节点 -> 右子树
// 后续遍历：左子树 -> 右子树 -> 根节点

// 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 输出当前遍历的结点值
  console.log("前序遍历的结点值是：", root.val);
  // 递归遍历左子树
  preorder(root.left);
  // 递归遍历右子树
  preorder(root.right);
}

preorder(root);

// 所有遍历函数的入参都是树的根结点对象
function inorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 递归遍历左子树
  inorder(root.left);
  // 输出当前遍历的结点值
  console.log("中序遍历的结点值是：", root.val);
  // 递归遍历右子树
  inorder(root.right);
}

inorder(root);

// 所有遍历函数的入参都是树的根结点对象
function postorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 递归遍历左子树
  postorder(root.left);
  // 递归遍历右子树
  postorder(root.right);
  // 输出当前遍历的结点值
  console.log("后序遍历的结点值是：", root.val);
}

postorder(root);
